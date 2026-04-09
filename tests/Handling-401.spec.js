import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('401 unauthorized',async({request})=>{
    const response=await request.get('https://dummyjson.com/auth/me');
    expect(response.status()).toBe(401);//unauthorized access
    const body=await response.json();
    console.log('error',body);


});

// the authorization token is missing that why the error is coming as 401

// import { test, expect } from '@playwright/test';

// test('Login → get token → access protected API', async ({ request }) => {

//   // 🔹 Step 1: Login API (get token)
//   const loginRes = await request.post('https://dummyjson.com/auth/login', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: {
//       username: 'kminchelle',
//       password: '0lelplR'
//     }
//   });

//   // ✅ Validate login success
//   expect(loginRes.status()).toBe(200);

//   const loginBody = await loginRes.json();
//   const token = loginBody.token;

//   console.log('Access Token:', token);

//   // 🔹 Step 2: Use token in protected API
//   const userRes = await request.get('https://dummyjson.com/auth/me', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });

//   // ✅ Validate protected API
//   expect(userRes.status()).toBe(200);

//   const userBody = await userRes.json();

//   console.log('User Data:', userBody);

//   // 🔹 Step 3: Assertions
//   expect(userBody.username).toBe('kminchelle');
//   expect(userBody.email).toContain('@');
// });