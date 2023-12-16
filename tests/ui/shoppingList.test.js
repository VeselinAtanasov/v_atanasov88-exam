const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://v-atanasov88-exam.onrender.com/shopping-list');
    const list = await page.$('li');
    expect(list).toBeTruthy();
  });
  