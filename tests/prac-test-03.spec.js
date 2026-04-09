import{test,expect} from '@playwright/test';
test('putting',async({request})=>{
    const response=await request.put('https://dummyjson.com/users/1',{
        data:{
            firstName:"UpdatedName",
            age:23
        }
    });
    expect(response.status()).toBe(200);
    const body=await response.json();
    expect(body.firstName).toBe("UpdatedName");

});