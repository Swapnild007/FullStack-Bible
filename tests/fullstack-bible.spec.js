const { test, expect } = require('@playwright/test');

const pages = [
  'index.html','roadmap.html','curriculum.html','learn.html','lessons.html',
  'projects.html','practice.html','ai.html','progress.html','resources.html','settings.html',
  ...Array.from({length:17},(_,i)=>`module-${String(i+1).padStart(2,'0')}.html`)
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

  test('landing menu exposes all nine destinations', async ({ page }) => {
    await page.goto('index.html');
    await page.getByRole('button', { name: /open menu/i }).click();
    for (const [label, href] of Object.entries({
      Roadmap:'roadmap.html', Curriculum:'curriculum.html', Lessons:'lessons.html',
      Projects:'projects.html', Practice:'practice.html', AI:'ai.html',
      Progress:'progress.html', Resources:'resources.html', Settings:'settings.html'
    })) {
      await expect(page.getByRole('link', { name: new RegExp('^'+label+'\\b') })).toHaveAttribute('href', href);
    }
  });

  test('practice contains all 17 stages and 85 drills', async ({ page }) => {
    await page.goto('practice.html');
    await expect(page.locator('.module')).toHaveCount(17);
    await expect(page.locator('.drill')).toHaveCount(85);
    await expect(page.locator('#summary')).toContainText('0 / 17');
  });

  test('practice drill completion persists after reload', async ({ page }) => {
    await page.goto('practice.html?stage=17');
    const drill = page.locator('.drill').first();
    await expect(drill).toBeVisible();
    await drill.getByRole('button', { name:'Mark complete' }).click();
    await page.reload();
    await expect(page.locator('.drill').first()).toContainText('Completed');
  });

  test('progress understands the advanced module checklist keys', async ({ page }) => {
    await page.goto('module-13.html');
    const first = page.locator('#checks input').first();
    await first.check();
    await page.goto('progress.html');
    const stage13 = page.locator('.stage').filter({ hasText:'System Design & Distributed Systems' });
    await expect(stage13).toContainText('1/18 checklist items');
  });

  test('landing, projects, invalid stages and keyboard focus work', async ({ page }) => {
    await page.goto('index.html');
    await expect(page).toHaveTitle(/FullStack Bible/i);
    await expect(page.getByRole('link', { name:/start learning/i })).toHaveAttribute('href', /roadmap\.html/);
    await page.goto('projects.html?stage=03');
    await expect(page.locator('body')).toContainText(/Learning dashboard/i);
    await page.goto('practice.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('projects.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('index.html');
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
  });

  test('module checklist survives reload', async ({ page }) => {
    await page.goto('module-02.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const first = page.locator('#checks input').first();
    await first.check();
    await page.reload();
    await expect(page.locator('#checks input').first()).toBeChecked();
    await expect(page.locator('#progressText')).toContainText('% complete');
  });

  test('embedded terminal mounts and executes a browser lab command', async ({ page }) => {
    await page.goto('practice.html?stage=1');
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
    await page.goto('projects.html');
    const projectCard = page.locator('.card[data-project-id="07"]');
    await expect(projectCard).toHaveCount(1);
    await projectCard.getByRole('button', { name:/read project/i }).click();
    await expect(page.getByRole('heading', { name:/Blog CMS/i })).toBeVisible();
    await page.getByRole('button', { name:'Source code' }).click();
    await expect(page.locator('.code')).toBeVisible();
    await expect(page.locator('.code')).toContainText('PostgreSQL');
    await page.getByRole('button', { name:'Explain' }).click();
    await expect(page.locator('.concept')).toHaveCount(6);
  });

});
