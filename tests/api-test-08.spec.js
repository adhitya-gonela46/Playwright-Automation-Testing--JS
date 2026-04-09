import { test, expect } from '@playwright/test';

test('TEST 8: API CHAINING - Get list and use ID', async ({ request }) => {

  //from api, extracting the products
  const listResponse = await request.get('https://dummyjson.com/products');

  expect(listResponse.status()).toBe(200);

  const listBody = await listResponse.json();

  // Validate list structure
  expect(listBody).toHaveProperty('products');
  expect(Array.isArray(listBody.products)).toBe(true);

  //extracting one id from porducts
  const productId = listBody.products[0].id;

  // 3.passing as input to the another request or API
  const singleResponse = await request.get(`https://dummyjson.com/products/${productId}`);

  expect(singleResponse.status()).toBe(200);

  const singleBody = await singleResponse.json();

  // 4. Validate correct data is returned
  expect(singleBody.id).toBe(productId);
  expect(singleBody).toHaveProperty('title');
  expect(singleBody).toHaveProperty('price');

  console.log('Product details:', singleBody);
});