import { test, expect } from '@playwright/test';
import WindowsPage from '../../pages/WindowsPage.js';

test.describe('Multiple Windows', () => {

  test('Open and verify new window', async ({ page }) => {
    const windowPage = new WindowsPage(page);

    await windowPage.openPage();

    expect(await windowPage.headerText(page)).toBe('Opening a new window');

    const newWindow = await windowPage.openNewWindow();
    const headText = await windowPage.headerText(newWindow);

    expect(headText).toBe('New Window');
  });

  test('link should not open new window without click', async ({ page }) => {
    const windowsPage = new WindowsPage(page);

    await windowsPage.openPage();

    const pages = page.context().pages();
    expect(pages.length).toBe(1);
  });

});
