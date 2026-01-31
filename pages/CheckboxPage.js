import BasePage from './BasePage';

export default class CheckboxPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkbox1 = '#checkboxes input:nth-of-type(1)';
    this.checkbox2 = '#checkboxes input:nth-of-type(2)';
  }

  async openCheckboxes() {
    await this.open('/checkboxes');
  }

  async checkFirstCheckbox() {
    if (!(await this.page.locator(this.checkbox1).isChecked())) {
      await this.page.locator(this.checkbox1).check();
    }
  }

  async uncheckSecondCheckbox() {
    if (await this.page.locator(this.checkbox2).isChecked()) {
      await this.page.locator(this.checkbox2).uncheck();
    }
  }

  async isFirstChecked() {
    return await this.page.locator(this.checkbox1).isChecked();
  }

  async isSecondChecked() {
    return await this.page.locator(this.checkbox2).isChecked();
  }
  
}
