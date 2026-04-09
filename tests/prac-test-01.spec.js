import {test, expect} from '@playwright/test';
import { request } from 'node:http';
test('testing the rest api',async({request})=>{
    const response=await request.get('https://dummyjson.com/users');
    expect(response.status()).toBe(200);
    const body=await response.json();
    expect(body.users.length).toBeGreaterThan(0);
});