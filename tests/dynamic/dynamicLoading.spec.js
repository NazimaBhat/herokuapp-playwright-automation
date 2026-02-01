import { test, expect } from '@playwright/test';
import DynamicLoadingPage from '../../pages/DynamicLoadingPage.js';

test.describe('Dynamic Loading Module tests', () => {

  test('Example 1: Element on page that is hidden', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);

   
  await dynamicPage.openMainPage();
    
  await dynamicPage.openExample1();

    
   await dynamicPage.startLoader();
  
   await dynamicPage.waitForLoadingToFinish();

   
    const resultText = await dynamicPage.viewFinishedText();
    expect(resultText).toBe('Hello World!');
  });

  test('Example2: : Element rendered after the fact', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);

    await dynamicPage.openMainPage();

    await dynamicPage.openExample2();

    await dynamicPage.startLoader();

    await dynamicPage.waitForLoadingToFinish();

    expect(await dynamicPage.viewFinishedText()).toBe('Hello World!');
  });

});
