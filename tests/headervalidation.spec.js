import{test,expect} from '@playwright/test';
test('header metadata validation',async({request})=>{
    const response=await request.get('https://dummyjson.com/users');
    const headers=response.headers();
    expect(headers['content-type']).toContain('application/json');
})