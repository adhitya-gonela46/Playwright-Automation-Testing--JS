const { test, expect } = require('@playwright/test');


test('user actions', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  //fingind the button
  const button=page.getByRole('button',{name : 'Start'});
  await button.click();

const text=page.locator('#finish h4');
await text.waitFor({state:'visible'});

  await expect(text).toHaveText('Hello World!');


  
});
