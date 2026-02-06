import BasePage from './BasePage.js';

export default class DragDropPage extends BasePage {
  constructor(page) {
    super(page);

    this.columnA = '#column-a';
    this.columnB = '#column-b';
    this.headerA = '#column-a header';
    this.headerB = '#column-b header';
  }

  async openPage() {
    await this.open('/drag_and_drop');
  }

  async getColAText() {
    return await this.getText(this.headerA);
    //return await this.page.locator(this.headerA).textContent();
  }

  async getColBText() {
    return await this.getText(this.headerB);
  }

  async dragAtoB() {
    await this.page.evaluate(() => {
      function triggerDragDrop(source, target) {
        const dataTransfer = new DataTransfer();

        source.dispatchEvent(new DragEvent('dragstart', { dataTransfer }));
        target.dispatchEvent(new DragEvent('drop', { dataTransfer }));
        source.dispatchEvent(new DragEvent('dragend', { dataTransfer }));
      }

      const source = document.querySelector('#column-a');
      const target = document.querySelector('#column-b');

      triggerDragDrop(source, target);
    });
  }
}
