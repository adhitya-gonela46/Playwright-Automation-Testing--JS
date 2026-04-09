import { test, expect } from '@playwright/test';

test('Full flow: login → token → get users', async ({ request }) => {

  // 🔹 Step 1: Login (Fix headers)
  const loginRes = await request.post('https://reqres.in/api/login', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  console.log('Status:', loginRes.status());
  console.log('Response:', await loginRes.text()); // debug

  expect(loginRes.status()).toBe(200);

  const loginBody = await loginRes.json();
  const token = loginBody.token;

  // 🔹 Step 2: Use token
  const userRes = await request.get('https://reqres.in/api/users/2', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(userRes.status()).toBe(200);

  const userBody = await userRes.json();
  expect(userBody.data.id).toBe(2);
});
