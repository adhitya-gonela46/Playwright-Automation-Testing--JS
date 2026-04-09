// negative login
import {test,expect} from '@playwright/test';
test('negative feedback',async({page})=>{
 await page.goto('https://the-internet.herokuapp.com/login');

 const username=page.locator('#username');
 await username.fill('tomsmithx');

 const password=page.locator('#password');
 await password.fill('tomsmith');

 const button=page.getByRole('button',{name: 'Login'});
 await button.click();

 const errorm=page.locator('#flash');
 await expect(errorm).toBeVisible();
 await expect(errorm).toContainText('Your username is invalid!');

 await expect(page).toHaveURL(/login/);
});