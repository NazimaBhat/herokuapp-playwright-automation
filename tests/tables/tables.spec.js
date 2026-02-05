import { test, expect } from '@playwright/test';
import TablesPage from '../../pages/TablesPage.js';

test.describe('Tables', () => {

  test('Count the correct number of rows in the table', async ({ page }) => {
    const tablePage = new TablesPage(page);

    await tablePage.openPage();
    const rowCount = await tablePage.countRows();

    expect(rowCount).toBe(4);
  });

  test('Validate data in specific row', async ({ page }) => {
    const tPage = new TablesPage(page);

    await tPage.openPage();

    const lastName = await tPage.viewCellText(1, 1);
    const email = await tPage.viewCellText(1, 3);
    const due = await tPage.viewCellText(1, 4);

    expect(lastName).toBe('Smith');
    expect(email).toBe('jsmith@gmail.com');
    expect(due).toBe('$50.00');
  });

  test('Sort last names alphabetically', async ({ page }) => {
    const tablesPage = new TablesPage(page);

    await tablesPage.openPage();
    await tablesPage.sortByLastName();

    const names = await tablesPage.getAllLastNames();
    const sortedNames = [...names].sort();
    console.log(names);
    console.log(sortedNames);

    expect(names).toEqual(sortedNames);
  });

});
