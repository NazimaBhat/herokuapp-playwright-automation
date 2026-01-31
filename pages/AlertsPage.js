import BasePage from './BasePage';

export default class AlertsPage extends BasePage {
  constructor(page) {
    super(page);
    this.alertBtn = 'text=Click for JS Alert';
    this.confirmBtn = 'text=Click for JS Confirm';
    this.promptBtn = 'text=Click for JS Prompt';
    this.result = '#result';
  }

  async openAlerts() {
    await this.open('/javascript_alerts');
  }

  async clickAlertBtn() {
    await this.page.click(this.alertBtn);
  }

  async clickConfirmButton() {
    await this.page.click(this.confirmBtn);
  }

  async clickPrompt() {
    await this.page.click(this.promptBtn);
  }

  async checkResultText() {
  return await this.page.locator(this.result).textContent();
}
}