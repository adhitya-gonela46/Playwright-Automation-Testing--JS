import{test,expect} from '@playwright/test';

const id=[1,2,3];
id.forEach(i=>{
    test(`${i}`,async({request})=>{
        const response=await request.get(`https://dummyjson.com/users/${id}`);
        expect(response.status()).toBe(200);
    });
})