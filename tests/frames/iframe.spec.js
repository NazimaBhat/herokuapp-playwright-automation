import { test, expect } from '@playwright/test';
import FramesPage from '../../pages/FramesPage.js';

test.describe('iFrame page', () => {

  test.skip('type inside iframe', async ({ page }) => {
    const framesPage = new FramesPage(page);

    await framesPage.openIFramePage();
    await framesPage.type('Hello playwright...');

    const text = await framesPage.getEditorText();
    expect(text).toContain('Hello playwright...');
  });

  test('read text inside iframe', async ({ page }) => {
  const framesPage = new FramesPage(page);

  await framesPage.openIFramePage();
  const text = await framesPage.getEditorText();

  expect(text).toContain("Your content goes here");
});


});
