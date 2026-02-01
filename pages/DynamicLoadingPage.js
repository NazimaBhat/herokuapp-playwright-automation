import BasePage from './BasePage.js';

export default class DynamicLoadingPage extends BasePage {
  constructor(page) {
    super(page);

    
    this.example1Link = 'a[href="/dynamic_loading/1"]';
    this.example2Link = 'a[href="/dynamic_loading/2"]';
    this.startBtn = '#start button';
    this.loadingBar = '#loading';
    this.finishText = '#finish h4';
  }

  async openMainPage() {
    await this.open('/dynamic_loading');
  }

  async openExample1() {
    await this.click(this.example1Link);
  }

  async openExample2() {
    await this.click(this.example2Link);
  }

  async startLoader() {
    await this.click(this.startBtn);
  }

  async waitForLoadingToFinish() {
    await this.page.locator(this.loadingBar).waitFor({ state: 'hidden' });
  }

  async viewFinishedText() {
    return await this.getText(this.finishText);
  }
}

