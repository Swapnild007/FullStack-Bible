const { test, expect } = require('@playwright/test');

const pages = [
  'index.html','roadmap.html','curriculum.html','learn.html','lessons.html',
  'projects.html','practice.html','ai.html','progress.html','resources.html','settings.html',
  ...Array.from({length:17},(_,i)=>`module-${String(i+1).padStart(2,'0')}.html`)
];

test.describe('FullStack Bible site smoke', () => {
  test('every public HTML page loads with a primary heading', async ({ page }) => {
    for (const path of pages) {
      const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
      expect(response && response.ok(), path).toBeTruthy();
      await expect(page.locator('h1').first(), path).toBeVisible();
      await expect(page.locator('body'), path).not.toContainText('cite');
      await expect(page.locator('body'), path).not.toContainText('url');
      await expect(page.locator('body'), path).not.toContainText('undefined');
    }
  });

  test('landing menu exposes all nine destinations', async ({ page }) => {
    await page.goto('index.html');
    await page.getByRole('button', { name: /open menu/i }).click();
    const expected = {
      Roadmap:'roadmap.html', Curriculum:'curriculum.html', Lessons:'lessons.html',
      Projects:'projects.html', Practice:'practice.html', AI:'ai.html',
      Progress:'progress.html', Resources:'resources.html', Settings:'settings.html'
    };
    for (const [label, href] of Object.entries(expected)) {
      await expect(page.getByRole('link', { name: new RegExp('^'+label+'$') })).toHaveAttribute('href', href);
    }
  });

  test('practice contains all 17 stages and 85 drills', async ({ page }) => {
    await page.goto('practice.html');
    await expect(page.locator('.module')).toHaveCount(17);
    await expect(page.locator('.drill')).toHaveCount(85);
    await expect(page.locator('#summary')).toContainText('0 / 17');
  });

  test('progress understands the advanced module checklist keys', async ({ page }) => {
    await page.goto('module-13.html');
    const first = page.locator('#checks input').first();
    await first.check();
    await page.goto('progress.html');
    const stage13 = page.locator('.stage').filter({ hasText:'System Design & Distributed Systems' });
    await expect(stage13).toContainText('1/18 checklist items');
  });

  test('practice drill completion persists into progress state', async ({ page }) => {
    await page.goto('practice.html?stage=17');
    await page.locator('.drill').first().getByRole('button', { name:'Mark complete' }).click();
    await page.reload();
    await expect(page.locator('.drill').first()).toContainText('Completed');
  });
});
