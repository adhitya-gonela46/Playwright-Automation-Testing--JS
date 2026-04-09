// measuring the response time
import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('basic performance check',async({request})=>{
    const start=Date.now();
    const response= await request.get('https://dummyjson.com/products');
    const end=Date.now();
    const response_time=end-start;
    console.log("response-time : ",response_time);
    expect(response.status()).toBe(200);
    expect(response_time).toBeLessThan(2000);
});