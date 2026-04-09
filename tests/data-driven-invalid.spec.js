import {test,expect} from '@playwright/test';
import data from '../test-data/data.json'; //taking the json data from test-data
test('Invalid login test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', data.invalidUser.username);
  await page.fill('#password', data.invalidUser.password);
  await page.click('#login-button'); 

});