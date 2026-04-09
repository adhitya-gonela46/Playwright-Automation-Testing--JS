import{test,expect} from '@playwright/test';
test('api chaining',async({request})=>{
    const response=await request.get('https://dyummy.com/users');
    const body= await response.json();
    const extracting=body.users[0].id;
    const resp2=await request.get(`https://dummyjson.com/users/${extracting}`);
    expect(resp2.status()).toBe(200);
});