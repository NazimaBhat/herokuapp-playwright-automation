import { test, expect } from '@playwright/test';
import UploadPage from '../../pages/UploadPage.js';
import { FILES } from '../../utils/testData.js';


test.describe('File Upload tests', () => {

  test('User can upload a file successfully', async ({ page }) => {
    const uploadpage = new UploadPage(page);

    await uploadpage.openPage();
    await uploadpage.upload(FILES.Sample_File);


    const uploadedFile = await uploadpage.getUploadedFileName();
    expect(uploadedFile).toContain('sample.txt');
  });


  test( 'Upload without file', async ({ page }) => {
  const uploadPage = new UploadPage(page);

  await uploadPage.openPage();
  await uploadPage.clickUploadBtn();

  expect(await uploadPage.errorText()).toBe('Internal Server Error');
});

});
