//@ts-nocheck
import { test } from '../fixtures/testSetup';
import data from '../test-data/forminputs.json';

test('Fill checkout form', async ({ app, page }) => {

  await app.goToCart();
  await page.click('#checkout');

  await page.fill('#first-name', data.formInputs.firstName);
  await page.fill('#last-name', data.formInputs.lastName);
  await page.fill('#postal-code', data.formInputs.postalCode);

  await page.click('#continue');

});