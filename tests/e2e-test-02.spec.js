import { test, expect } from '@playwright/test';

test('TEST 2: Negative E2E Flow - Invalid Login', async ({ page }) => {

  //opening
  await page.goto('https://www.saucedemo.com/');

  //giving wrong credential
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  // testing the data
  const errorMsg = page.locator('[data-test="error"]');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toContainText('Username and password do not match');

  //having the same url
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});