const {test,expect} =require('@playwright/test');
test('loading of page and validation',async({page})=>{
     await page.goto('https://the-internet.herokuapp.com/');

     // now verigiying the title
     await expect(page).toHaveTitle(/The Internet/);

     //veryfying it is visible or not
     const heading=page.locator('h1');
     await expect(heading).toBeVisible();


});