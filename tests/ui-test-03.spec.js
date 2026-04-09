const { test, expect } = require('@playwright/test');

test('user actions', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');
  const username=page.locator("#username");
  await username.fill('tomsmith');
  const password=page.locator("#password");
  await password.fill('SuperSecretPassword!');

  const loginbtn=page.getByRole('button',{name : 'Login'});
  await Promise.all([
    page.waitForNavigation(),
    loginbtn.click()
  ])

  await expect(page).toHaveURL(/secure/);

  // going to the next page
   await page.goto('https://the-internet.herokuapp.com/dropdown');
   const dropd=page.locator('#dropdown');
   await dropd.selectOption('1');

   await expect(dropd).toHaveValue('1');

   //toggling
   await page.goto('https://the-internet.herokuapp.com/checkboxes');

   const checkbox=page.locator('input[type="checkbox"]').first();

   await checkbox.check();
   await expect(checkbox).toBeChecked();

   await checkbox.uncheck();
   await expect(checkbox).not.toBeChecked();







});
