const { test, expect } = require('@playwright/test');

test('Network Validation - Login Request', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  const [response] = await Promise.all([
    page.waitForResponse(resp =>
      resp.url().includes('inventory') && resp.status() === 200
    ),
    page.click('#login-button')
  ]);

  expect(response.status()).toBe(200);

//   await expect(page).toHaveURL(/inventory/);
  await expect(page).toHaveURL(/inventory/);

});