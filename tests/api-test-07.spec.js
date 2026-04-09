import { test, expect } from '@playwright/test';

test('TEST 7: NEGATIVE API TEST - Error Handling', async ({ request }) => {

  //invalid end point or wrong answer
  const invalidresponse = await request.get('https://dummyjson.com/invalid-endpoint');

  expect(invalidresponse.status()).toBe(404);

  const invalidBody = await invalidresponse.json();
  expect(invalidBody).toHaveProperty('message');

  console.log('Invalid endpoint response:', invalidBody);


  // missing required fields
  const nopayload = {};

  const postresponse = await request.post('https://dummyjson.com/posts/add', {
    data: nopayload
  });
// expecting 200 or 300 or 400 or 422
  expect([200, 400, 422]).toContain(postresponse.status());

  const postbody = await postresponse.json();

  // validate structure exists even if fake API
  expect(postbody).toHaveProperty('id');

  console.log('Invalid payload response is:', postbody);
});
