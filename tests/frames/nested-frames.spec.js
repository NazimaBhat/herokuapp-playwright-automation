import { test, expect } from '@playwright/test';
import FramesPage from '../../pages/FramesPage.js';

test.describe('Nested Frames', () => {

  test('Verify text in all nested frames', async ({ page }) => {
    const framesPage = new FramesPage(page);
    
    await framesPage.openNFramesPage();

    const leftText = await framesPage.ViewNestedFramesText(['frame-top', 'frame-left']);
    expect(leftText.trim()).toBe('LEFT');

    const midText = await framesPage.ViewNestedFramesText(['frame-top', 'frame-middle']);
    expect(midText.trim()).toBe('MIDDLE');

    const rightText = await framesPage.ViewNestedFramesText(['frame-top', 'frame-right']);
    expect(rightText.trim()).toBe('RIGHT');

    const bottomText = await framesPage.ViewNestedFramesText(['frame-bottom']);
    expect(bottomText.trim()).toBe('BOTTOM');
  });

});
