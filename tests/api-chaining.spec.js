import { test, expect } from '@playwright/test';

test('api testing',async({request})=>{

    const response=await request.get('https://dummyjson.com/users');
    const body=await response.json();
    const extractuserId=body.users[0].id;
    const response2=await request.get(`https://dummyjson.com/users/${extractuserId}`);
    expect(response2.status()).toBe(200);
});