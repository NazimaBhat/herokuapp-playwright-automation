import { test, expect } from '@playwright/test';
import DownloadPage from '../../pages/DownloadPage.js';

test.describe('File Download Test', () => {

  test('Download a file test', async ({ page }) => {
    const downloadPage = new DownloadPage(page);

    await downloadPage.openPage();
    const fileName = await downloadPage.downloadFile(0);

    expect(fileName).toBeTruthy();
  });


  test('Download multiple files', async ({ page }) => {
  const downloadPage = new DownloadPage(page);
  await downloadPage.openPage();

  for (let i = 0; i < 4; i++) {
    const fileName = await downloadPage.downloadFile(i);
    expect(fileName).toBeTruthy();
  }
});


});
