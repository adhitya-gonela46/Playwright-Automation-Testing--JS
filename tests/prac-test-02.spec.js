import {test,expect} from '@playwright/test';
import { request } from 'node:http';
test('posting',async({request})=>{

    const response=await request.post('https://dummyjson.com/users/add',{
        data:{
            firstName:"venkata",
            lastName:"Adhithya",
            age:22
        }
    });
    expect(response.status()).toBe(201);
    const body=await response.json();
    expect(body.firstName).toBe("venkata");
});