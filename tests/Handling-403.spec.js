// forbidden 
import {test,expect} from '@playwright/test';

test('forbidden 403',async({request})=>{
    const resp=await request.get('https://httpstat.us/403');// no permission
    console.log('response',resp.status());
    console.log('body',await resp.text());
    expect(resp.status()).toBe(403);

});