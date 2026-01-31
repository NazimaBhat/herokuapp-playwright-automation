import { test, expect } from '@playwright/test';
import CheckboxPage from '../../pages/CheckboxPage';

test.describe('Checkboxes UI ', () => {

  test('User can check and uncheck both checkboxes', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.openCheckboxes();

    await checkboxPage.checkFirstCheckbox();
    await checkboxPage.uncheckSecondCheckbox();

    expect(await checkboxPage.isFirstChecked()).toBe(true);
    expect(await checkboxPage.isSecondChecked()).toBe(false);
  });

});
