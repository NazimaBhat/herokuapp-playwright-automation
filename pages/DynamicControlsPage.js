import BasePage from './BasePage.js';

export default class DynamicControlsPage extends BasePage {
  constructor(page) {
    super(page);

    this.removeButton = '#checkbox-example button';
    this.checkbox = '#checkbox';
    this.message = '#message';

    this.enableBtn = '#input-example button';
    this.input = '#input-example input';
    
  }

  async openPage() {
    await this.open('/dynamic_controls');
  }

  //checkbox
  async clickRemoveOrAddButton() {
    await this.click(this.removeButton);
    await this.waitForMsg();

  }
  async isCheckboxVisible() {
    return await this.page.locator(this.checkbox).isVisible();
  }

 
  //input field
  async clickEnableOrDisable() {
    await this.click(this.enableBtn);
    await this.waitForMsg();
 }

  async isInputFieldEnabled() {
    return await this.page.locator(this.input).isEnabled();
  }


  //message
  async viewMessage() {
    return await this.getText(this.message);
  }

  async waitForMsg() {
    await this.page.locator(this.message).waitFor({ state: 'visible' });
  }


  
  
}
