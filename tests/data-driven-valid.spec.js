//@ts-nocheck
import { test } from '@playwright/test';
import data from '../test-data/data.json';
import { AppPage } from '../pages/appPages';

test('login using test data', async ({ page }) => {

  const app = new AppPage(page); // creating the new page

  await page.goto('https://www.saucedemo.com/');
// here I am validating seperately by importing the appPages from pages
  await app.login(data.validUser.username, data.validUser.password);

});