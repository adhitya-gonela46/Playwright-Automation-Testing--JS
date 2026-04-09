import { test, expect } from '@playwright/test';

test('TEST 4: DELETE REQUEST - Delete and Validate', async ({ request }) => {

  const response = await request.delete('https://dummyjson.com/posts/1');

  // status checking
  expect(response.status()).toBe(200);

  const body = await response.json();

  // validation
  expect(body).toHaveProperty('id');
  expect(body.id).toBe(1);

  console.log(body);
});