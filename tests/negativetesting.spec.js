import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('nagative testing',async({request})=>{

    const response=await request.get('https://dummyjson.com/users/99999');
    expect(response.status()).toBe(404);

});
