import { getFilePath } from '../utils/helpers.js';
import BasePage from './BasePage.js';

export default class UploadPage extends BasePage {
  constructor(page) {
    super(page);

    this.fileInput = '#file-upload';
    this.uploadBtn = '#file-submit';
    this.uploadedText = '#uploaded-files';
    this.error = 'h1';

  }

  async openPage() {
    await this.open('/upload');
  }

  async upload(fileName) {
    const filePath = getFilePath(fileName);
    await this.page.setInputFiles(this.fileInput, filePath);
    await this.click(this.uploadBtn);
  }

  async getUploadedFileName() {
    return await this.getText(this.uploadedText);
  }

  async clickUploadBtn() {
  await this.click(this.uploadBtn);
}

async errorText() {
    return await this.getText(this.error);
  }

}