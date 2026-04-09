import { test, expect } from '@playwright/test';

test(' using get request', async ({ request }) => {
// using get
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  // status code validation
  expect(response.status()).toBe(200);

  //response structure validation
  const body = await response.json();

  //whether its an array or not
  expect(Array.isArray(body)).toBe(true);

//checking first obj str
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('name');
  expect(body[0]).toHaveProperty('email');
// expect(body[1]).toHaveProperty('address');
//like that we can check

  
  expect(body[0]).toHaveProperty('address');
  expect(body[0].address).toHaveProperty('city');
});