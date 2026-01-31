import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { users } from '../../utils/testData';

test.describe('Authentication', () => {

  test('Valid login and logout test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.openLogin();
    await login.login(users.valid.username, users.valid.password);

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

    await login.logout();
    await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
  });

  test('Invalid  login attempt with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.openLogin();
    await login.login(users.invalid.username, users.invalid.password);

    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  });

  test('login attempt with invalid username and valid password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.openLogin();
    await login.login(users.invalid.username, users.valid.password);
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  });

   test('login attempt with valid username and invalid password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.openLogin();
    await login.login(users.valid.username, users.invalid.password);
    await expect(page.locator('#flash')).toContainText('Your password is invalid!');
  });
});
