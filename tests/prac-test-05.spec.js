import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('deleting' ,async({request})=>{
    const response=await request.delete('https://dummyjson.com/users/1');
    expect(response.status()).toBe(200);
    const body=await response.json();
    expect(body.isDeleted).toBe(true);
});