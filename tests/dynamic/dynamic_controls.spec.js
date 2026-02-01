import { test, expect } from '@playwright/test';
import DynamicControlsPage from '../../pages/DynamicControlsPage.js';

test.describe('Dynamic Controls Module', () => {

  test('Remove and Add checkbox test', async ({ page }) => {
    const dynamicCtrl = new DynamicControlsPage(page);

    await dynamicCtrl.openPage();

    //remove
    await dynamicCtrl.clickRemoveOrAddButton();
  

    expect(await dynamicCtrl.viewMessage()).toContain("It's gone!");
    expect(await dynamicCtrl.isCheckboxVisible()) .toBe(false);

    // Add
    await dynamicCtrl.clickRemoveOrAddButton();

    expect(await dynamicCtrl.viewMessage())
      .toContain("It's back!");
    expect(await dynamicCtrl.isCheckboxVisible())
      .toBe(true);
  });

  
  test('Enable and Disable input field test', async ({ page }) => {
    const dynamicControls = new DynamicControlsPage(page);

    await dynamicControls.openPage();
   //enable
    await dynamicControls.clickEnableOrDisable();
    

    expect(await dynamicControls.isInputFieldEnabled()).toBe(true);
    expect(await dynamicControls.viewMessage()).toContain("It's enabled!");

    //disable
    await dynamicControls.clickEnableOrDisable();
   

    expect(await dynamicControls.isInputFieldEnabled()).toBe(false);
    expect(await dynamicControls.viewMessage())
      .toContain("It's disabled!");
  });

});
