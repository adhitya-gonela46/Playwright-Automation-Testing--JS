// @ts-nocheck

import { test as base } from '@playwright/test';
import { AppPage } from '../pages/appPages';

/**
 * @typedef {{ app: AppPage }} MyFixtures
 */

export const test = base.extend/** @type {import('@playwright/test').Fixtures<MyFixtures>} */({
  app: async ({ page }, use) => {

    const app = new AppPage(page);

    await page.goto('https://www.saucedemo.com/');
    await app.login('standard_user', 'secret_sauce');

    await use(app);
  }
});

export { expect } from '@playwright/test';
