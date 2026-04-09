//@ts-nocheck
import { test, expect } from '../fixtures/testSetup';

test('Add to cart using fixture', async ({ app }) => {

  await app.clickElement('#add-to-cart-sauce-labs-backpack');
  await app.goToCart();

});