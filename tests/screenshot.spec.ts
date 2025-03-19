import { test, expect } from '@playwright/test';

test('has image screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  const imgLocator = page.getByAltText('Browsers (Chromium, Firefox, WebKit)');
  await expect(imgLocator).toBeVisible();
  await expect(imgLocator).toHaveScreenshot();
});

