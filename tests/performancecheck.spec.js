import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('performance check', async({request})=>{
    const currenttime=Date.now();
    const response=await request.get('https://dummyjson.com/users');
    const posttime=Date.now();
    const responsetime=posttime-currenttime;
    console.log("response time",responsetime);
    expect(response.status()).toBe(200);
    expect(responsetime).toBeLessThan(2000);
});