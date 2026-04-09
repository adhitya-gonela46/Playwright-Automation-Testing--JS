import {test} from '@playwright/test';
import { AppPage} from '../pages/appPages';
test('using page object model',async({page})=>{

    const app = new AppPage(page);
    await page.goto('https://www.saucedemo.com/');

    await app.login('standard_user', 'secret_sauce');
    await app.clickElement('#add-to-cart-sauce-labs-backpack');
    await app.goToCart();
});