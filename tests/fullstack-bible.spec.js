const { test, expect } = require('@playwright/test');

const pages = [
  'index.html','site/roadmap.html','site/curriculum.html','site/learn.html','site/lessons.html',
  'site/projects.html','site/practice.html','site/ai.html','site/progress.html','site/resources.html','site/settings.html',
  ...Array.from({length:17},(_,i)=>`site/module-${String(i+1).padStart(2,'0')}.html`)
];

test.describe('FullStack Bible site smoke', () => {
  test('every public HTML page loads without a page error', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Full page inventory runs once on Chromium.');
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const path of pages) {
      const response = await page.goto(path, { waitUntil:'domcontentloaded' });
      expect(response && response.ok(), path).toBeTruthy();
      await expect(page.locator('h1').first(), path).toBeVisible();
      await expect(page.locator('body'), path).not.toContainText('cite');
      await expect(page.locator('body'), path).not.toContainText('url');
    }
    expect(errors, 'No uncaught browser errors').toEqual([]);
  });

  test('landing menu exposes the core destinations', async ({ page }) => {
    await page.goto('index.html');
    await page.getByRole('button', { name: /open menu/i }).click();
    for (const [label, href] of Object.entries({
      Learn:'site/learn.html', Projects:'site/projects.html', Practice:'site/practice.html', AI:'site/ai.html',
      Progress:'site/progress.html', Resources:'site/resources.html', Settings:'site/settings.html'
    })) {
      await expect(page.getByRole('link', { name: new RegExp('^'+label+'\\b') })).toHaveAttribute('href', href);
    }
  });

  test('practice contains all 17 stages and 85 drills', async ({ page }) => {
    await page.goto('site/practice.html');
    await expect(page.locator('.module')).toHaveCount(17);
    await expect(page.locator('.drill')).toHaveCount(85);
    await expect(page.locator('#summary')).toContainText('0 / 17');
  });

  test('practice drill completion persists after reload', async ({ page }) => {
    await page.goto('site/practice.html?stage=17');
    const drill = page.locator('.drill').first();
    await expect(drill).toBeVisible();
    await drill.getByRole('button', { name:'Mark complete' }).click();
    await page.reload();
    await expect(page.locator('.drill').first()).toContainText('Completed');
  });

  test('progress understands the advanced module checklist keys', async ({ page }) => {
    await page.goto('site/module-13.html');
    const first = page.locator('#checks input').first();
    await first.check();
    await page.goto('site/progress.html');
    const stage13 = page.locator('.stage').filter({ hasText:'System Design & Distributed Systems' });
    await expect(stage13).toContainText('1/18 checklist items');
  });

  test('landing, projects, invalid stages and keyboard focus work', async ({ page }) => {
    await page.goto('index.html');
    await expect(page).toHaveTitle(/FullStack Bible/i);
    await expect(page.getByRole('link', { name:/start learning/i })).toHaveAttribute('href', /site/roadmap\.html/);
    await page.goto('site/projects.html?stage=03');
    await expect(page.locator('body')).toContainText(/Task Manager/i);
    await page.goto('site/practice.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('site/projects.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('index.html');
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
  });

  test('module checklist survives reload', async ({ page }) => {
    await page.goto('site/module-02.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const first = page.locator('#checks input').first();
    await first.check();
    await page.reload();
    await expect(page.locator('#checks input').first()).toBeChecked();
    await expect(page.locator('#progressText')).toContainText('% complete');
  });

  test('embedded terminal mounts and executes a browser lab command', async ({ page }) => {
    await page.goto('site/practice.html?stage=1');
    await page.locator('.drill').first().getByRole('button', { name:/open full lab/i }).click();
    await expect(page.locator('[data-terminal-host]').first()).toBeVisible();
    const terminal = page.locator('.fsb-terminal').first();
    await expect(terminal).toContainText('Browser sandbox');
    const input = terminal.locator('.fsb-terminal-line input');
    await input.fill('pwd');
    await input.press('Enter');
    await expect(terminal.locator('.fsb-terminal-output')).toContainText('/project');
    await input.fill('run');
    await input.press('Enter');
    await expect(terminal.locator('.fsb-terminal-output')).toContainText('Program started');
  });

  test('projects open real learning source and explanation', async ({ page }) => {
    await page.goto('site/projects.html');
    const projectCard = page.locator('.card[data-project-id="07"]');
    await expect(projectCard).toHaveCount(1);
    await projectCard.getByRole('button', { name:/read project/i }).click();
    await expect(page.locator('.project #ptitle')).toHaveText('Blog CMS');
    await page.getByRole('button', { name:'Source code' }).click();
    await expect(page.locator('.code')).toBeVisible();
    await expect(page.locator('.code')).toContainText('PostgreSQL');
    await page.getByRole('button', { name:'Explain' }).click();
    await expect(page.locator('.concept')).toHaveCount(6);
  });

});
