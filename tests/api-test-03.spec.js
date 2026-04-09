import { test, expect } from '@playwright/test';

test('updating/validating', async ({page, request }) => {
//updating the data
await page.goto('https://dummyjson.com/posts/1');
  const updatedpayload = {
    title: 'Updated Ttitle by Venkata adhithya'
  };
  const response = await request.patch('https://dummyjson.com/posts/1', {
    data: updatedpayload
  });

  expect(response.status()).toBe(200);

//converting to the json
  const body = await response.json();

  //validating
  expect(body.title).toBe(updatedpayload.title);
  expect(body).toHaveProperty('id');
  expect(body.id).toBe(1);
  console.log(updatedpayload);
  await page.waitForTimeout(5000);
  
});