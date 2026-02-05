import BasePage from './BasePage.js';

export default class TablesPage extends BasePage {
  constructor(page) {
    super(page);

    this.table = '#table1';
    this.rows = '#table1 tbody tr';
    this.lastNameHead = '#table1 th:nth-child(1)';
  }

  async openPage() {
    await this.open('/tables');
  }

  async countRows() {
    return await this.page.locator(this.rows).count();
  }

  async viewCellText(rowIndex, colIndex) {
    return await this.getText(`${this.rows}:nth-child(${rowIndex}) td:nth-child(${colIndex})`);
  }

  async sortByLastName() {
    await this.click(this.lastNameHead);
  }
  
  async getAllLastNames() {
    const lastNames = [];
    const rows = this.page.locator(this.rows);
    const count = await rows.count();

    for (let x = 1; x <= count; x++) {
      const text = await this.viewCellText(x, 1);
      lastNames.push(text.trim());
    }

    return lastNames;
  }
}
