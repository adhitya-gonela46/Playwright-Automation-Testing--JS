const { test, expect } = require('@playwright/test');

test('Login Flow Validation', async ({ page }) => {

  
  await page.goto('https://the-internet.herokuapp.com/login');

  
  const username=page.locator('#username');
  await username.fill('tomsmith');
  const password=page.locator('password');
  await password.fill('SuperSecretPassword!');

 
  const loginButton = page.getByRole('button', { name: 'Login' });

  await Promise.all([
    page.waitForNavigation(),
    loginButton.click()
  ]);
// if it is sucess or not
  await expect(page).toHaveURL(/secure/);

  
  const message = page.locator('#flash');
  await expect(message).toContainText('You logged into a secure area!');
  
  const logoutBtn = page.getByRole('link', { name: 'Logout' });
  await expect(logoutBtn).toBeVisible();

});