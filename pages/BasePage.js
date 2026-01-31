export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path) {
    await this.page.goto(path);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async type(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).textContent();
  }
}
