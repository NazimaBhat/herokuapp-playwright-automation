import { test, expect } from '@playwright/test';
import FramesPage from '../../pages/FramesPage.js';

test('Frames page should load', async ({ page }) => {
  const framesPage = new FramesPage(page);

  await framesPage.openFramesPage();
  const header = await framesPage.getHeaderText();

  expect(header).toContain('Frames');
});
