import { test, expect } from '@playwright/test';

test('query parameters', async ({ request }) => {

 // with query params
  const response = await request.get('https://dummyjson.com/products', {
    params: {
      limit: 5,
      skip: 0
    }
  });

  // 2. Validate status code
  expect(response.status()).toBe(200);

  const body = await response.json();
// to have products
  expect(body).toHaveProperty('products');
  //checking its an array or not
  expect(Array.isArray(body.products)).toBe(true);

  //length should be five
  expect(body.products.length).toBe(5);

  
});