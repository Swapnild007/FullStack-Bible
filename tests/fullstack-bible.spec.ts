import { test, expect } from '@playwright/test';

const modules = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));

async function clearLearningState(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    localStorage.clear();
  });
}

test.describe('FullStack Bible smoke and learning flow', () => {
  test('landing page is reachable and points to the roadmap', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page).toHaveTitle(/FullStack Bible/i);
    await expect(page.getByRole('link', { name: /start learning/i })).toHaveAttribute('href', /roadmap\.html/);
  });

  test('roadmap exposes all 12 modules', async ({ page }) => {
    await page.goto('/roadmap.html');
    for (const module of modules) {
      await expect(page.locator(`a[href="module-${module}.html"]`)).toHaveCount(1);
    }
  });

  test('all module pages load', async ({ page }) => {
    for (const module of modules) {
      const response = await page.goto(`/module-${module}.html`);
      expect(response?.ok(), `module-${module}.html should return a successful response`).toBeTruthy();
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('learning hub exposes 12 stages', async ({ page }) => {
    await page.goto('/learn.html');
    await expect(page.locator('body')).toContainText('12');
    for (const module of modules) {
      await expect(page.locator(`a[href*="stage=${module}"]`)).toHaveCount(2);
    }
  });

  test('stage 03 practice is focused and persistent', async ({ page }) => {
    await clearLearningState(page);
    await page.goto('/practice.html?stage=03');
    await expect(page.getByText(/Practice Module 03/i)).toBeVisible();
    await expect(page.getByText(/Debug persistent state/i)).toBeVisible();
    await expect(page.getByText(/Relationship query/i)).toHaveCount(0);
  });

  test('stage 03 project is focused', async ({ page }) => {
    await page.goto('/projects.html?stage=03');
    await expect(page.getByText(/Learning dashboard/i)).toBeVisible();
    await expect(page.getByText(/Learning data model/i)).toHaveCount(0);
  });

  test('module checklist survives reload', async ({ page }) => {
    await clearLearningState(page);
    await page.goto('/module-02.html');
    const first = page.locator('#checks input').first();
    await first.check();
    await page.reload();
    await expect(first).toBeChecked();
    await expect(page.locator('#progressText')).toContainText('% complete');
  });

  test('progress engine can aggregate module checklist state', async ({ page }) => {
    await clearLearningState(page);
    await page.goto('/module-01.html');
    await page.locator('#checks input').first().check();
    await page.goto('/progress.html');
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('body')).toContainText(/Start here/i);
  });

  test('invalid stage does not crash practice or projects', async ({ page }) => {
    await page.goto('/practice.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('/projects.html?stage=99');
    await expect(page.locator('body')).toBeVisible();
  });

  test('keyboard navigation has a visible focus target', async ({ page }) => {
    await page.goto('/index.html');
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
