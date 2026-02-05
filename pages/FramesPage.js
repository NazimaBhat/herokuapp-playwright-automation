import BasePage from './BasePage.js';

export default class FramesPage extends BasePage {
  constructor(page) {
    super(page);

    this.header = 'h3';
    this.iframeId = '#mce_0_ifr';
    this.editBody = '#tinymce';
  }

  async openFramesPage() {
    await this.open('/frames');
  }

  async openIFramePage() {
    await this.open('/iframe');
  }
  
  async openNFramesPage() {
    await this.open('/nested_frames');
  }

  async getHeaderText() {
    return await this.getText(this.header);
  }

  async type(inputText) {
    const frame = this.page.frameLocator(this.iframeId);
    await frame.locator(this.editBody).fill(inputText);
  }

  async getEditorText() {
    const frame = this.page.frameLocator(this.iframeId);
    return await frame.locator(this.editBody).textContent();
  }


  async ViewNestedFramesText(frame_path) {
  let frame = this.page.mainFrame();

  for (const name of frame_path) {
    frame = frame.childFrames().find(fr => fr.name() === name);
  }

  return await frame.locator('body').textContent();
}
}
