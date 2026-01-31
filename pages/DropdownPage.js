import BasePage from './BasePage';

export default class DropdownPage extends BasePage {
  constructor(page) {
    super(page);
    this.dropdown = '#dropdown';
  }

  async openDropdown() {
    await this.open('/dropdown');
  }

  async selectDropdownValue(value) {
    await this.page.selectOption(this.dropdown, value);
  }

  async getSelectedValue() {
    return await this.page.locator(this.dropdown).inputValue();
  }
}
