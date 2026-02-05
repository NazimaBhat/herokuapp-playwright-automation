import BasePage from './BasePage.js';

export default class WindowsPage extends BasePage {
  constructor(page) {
    super(page);

    this.openLink = 'a[href="/windows/new"]';
    this.header = 'h3';
  }

  async openPage() {
    await this.open('/windows');
  }

  async openNewWindow() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.click(this.openLink)   
    ]);

    await newPage.waitForLoadState();
    return newPage;
  }

async headerText(page) {
  return await page.locator(this.header).textContent();
}
}