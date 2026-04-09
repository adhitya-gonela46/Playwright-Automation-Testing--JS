import{test,expect} from '@playwright/test';
import { request } from 'node:http';
test('bearer token',async({request})=>{
    const response=await request.get('https://dummyjson.com/users',{
        headers:{
            Authorization : 'Bearer my_fake_token'
        }
    });
    expect(response.status()).toBe(200);
});