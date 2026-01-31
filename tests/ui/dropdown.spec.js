import { test, expect } from '@playwright/test';
import DropdownPage from '../../pages/DropdownPage';

test.describe('Dropdown UI', () => {

  test('User can select option from dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.openDropdown();
    await dropdownPage.selectDropdownValue('2');

    expect(await dropdownPage.getSelectedValue()).toBe('2');
  });

});
