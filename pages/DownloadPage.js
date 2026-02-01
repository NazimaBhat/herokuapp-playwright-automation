import BasePage from './BasePage.js';

export default class DownloadPage extends BasePage {
  constructor(page) {
    super(page);

    this.downloadLinks = 'a[href^="download"]';
  }

  async openPage() {
    await this.open('/download');
  }

  async downloadFile(index) {
  const link = this.page.locator(this.downloadLinks).nth(index);
  const downloadPromise = this.page.waitForEvent('download');

  await link.click();

  const download = await downloadPromise;
  const fileName = download.suggestedFilename();

  return fileName;
}

  }







