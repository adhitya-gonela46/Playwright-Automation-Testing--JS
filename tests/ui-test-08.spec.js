// iframes
import {test,expect} from '@playwright/test';
test('complex ui handling',async({page, context})=>{
 
    // handled the pop up alert
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.click('button:has-text("Click for JS Alert")');
    const result=page.locator('#result');
    await expect(result).toContainText('You successfully clicked an alert');

    // handle the iframe interaction

    await page.goto('https://the-internet.herokuapp.com/iframe');
    const frame = page.frameLocator('#mce_0_ifr');
    const textbox = frame.locator('#tinymce');
await frame.locator('#tinymce').evaluate(el => el.setAttribute('contenteditable', 'true'));
    await textbox.fill('Hello from Playwright');
    await expect(textbox).toHaveText('Hello from Playwright');

    // handling new tab or window
    await page.goto('https://the-internet.herokuapp.com/windows');

    const link=page.getByRole('link',{ name: "Click Here"});
    const [newPage] =await Promise.all([
        context.waitForEvent('page'),
        link.click()


    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(/New Window/);
    




});