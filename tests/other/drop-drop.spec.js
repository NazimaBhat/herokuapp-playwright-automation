import { test, expect } from '@playwright/test';
import DragDropPage from '../../pages/DragDropPage.js';


test.describe('Drag and Drop module', () => {

  test('should swap A and B after drag-and-drop', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);

    await dragDropPage.openPage();


    const beforeA = await dragDropPage.getColAText();
    const beforeB = await dragDropPage.getColBText();

    expect(beforeA).toBe('A');
    expect(beforeB).toBe('B');


    await dragDropPage.dragAtoB();

    // After drag
    const afterA = await dragDropPage.getColAText();
    const afterB = await dragDropPage.getColBText();

    expect(afterA).toBe('B');
    expect(afterB).toBe('A');
  });
  

});
