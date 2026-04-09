import { test, expect } from '@playwright/test';

test('test 2', async ({ request }) => {

  const payload = {
    title: 'Venkat',
    body: 'API testing',
    userId: 1
  };

  const response = await request.post('https://dummyjson.com/posts/add', {
    data: payload
  });
  // dummyjson returns 200 (not 201)
  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe(payload.title);
  expect(body.body).toBe(payload.body);

  expect(body).toHaveProperty('id');

});