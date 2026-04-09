import { test, expect } from '@playwright/test';

test('TEST 1: Complete User Flow', async ({ page }) => {

  //opening page
  await page.goto('https://www.saucedemo.com/');

  //logging in
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  //adding item
  await page.click('#add-to-cart-sauce-labs-backpack');

//  going to cart
  await page.click('.shopping_cart_link');

  //results validation
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');

});