import { test, expect } from '@playwright/test';
import AlertsPage from '../../pages/AlertsPage';

test.describe('Javascript Alerts tests', () => {

  test('JS Alert (Accept) Test', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.openAlerts();

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });

    await alertsPage.clickAlertBtn();
    expect(await alertsPage.checkResultText()).toBe('You successfully clicked an alert');
  });

  test('JS Confirm (Accept) Test', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.openAlerts();

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });

    await alertsPage.clickConfirmButton();
    expect(await alertsPage.checkResultText()).toBe('You clicked: Ok');
  });

  test('Handle JS Confirm (Dismiss)', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.openAlerts();

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.dismiss();
    });

    await alertsPage.clickConfirmButton();
    expect(await alertsPage.checkResultText()).toBe('You clicked: Cancel');
  });

  test('JS Prompt (input + accept) Test', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.openAlerts();

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept('prompt input Test');
    });

    await alertsPage.clickPrompt();
    expect(await alertsPage.checkResultText()).toBe('You entered: prompt input Test');
  });

  
  test('JS Prompt (Cancel) Test', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.openAlerts();

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.dismiss();
    });

    await alertsPage.clickPrompt();
    expect(await alertsPage.checkResultText()).toBe('You entered: null');
  });

});
