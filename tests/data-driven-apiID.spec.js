import { test, expect } from '@playwright/test';
import data from '../test-data/data.json';

test('API test using IDs', async ({ request }) => {

  const response = await request.get(`https://jsonplaceholder.typicode.com/users/${data.apiData.userId}`);
  //checking the response
  expect(response.status()).toBe(200);

});
