import{test,expect} from '@playwright/test';

test('bearer token',async({request})=>{
    const response=await request.get('https://api.example.com',{
        headers:{
            Authorization : 'Basic dXNlcjpwYXNz'
        }
    });
    expect(response.status()).toBe(200);
});