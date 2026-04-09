import { test, expect } from '@playwright/test';

test('TEST 6: RESPONSE VALIDATION - Full Validation', async ({ request }) => {

  //  iam reequesting here
  const response = await request.get('https://dummyjson.com/products/1');
  expect(response.status()).toBe(200);

  const headers=response.headers();
  expect(headers['content-type']).toContain('application/json');

  // to json
  const body = await response.json();

  
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('price');
  expect(body).toHaveProperty('brand');
//datatypes

  expect(typeof body.id).toBe('number');
  expect(typeof body.title).toBe('string');
  expect(typeof body.price).toBe('number');
  expect(typeof body.brand).toBe('string');

  
});