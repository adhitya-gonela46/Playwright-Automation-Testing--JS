const { test, expect } = require('@playwright/test');

test('performing asertions', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');
  const heading=page.getByText('Login Page');
  await expect(heading).toBeVisible();

  await expect(heading).toHaveText('Login Page');

  const username=page.locator('#username');
  await username.fill('tomsmith');

  const password=page.locator('#password');
  await password.fill('SuperSecretPassword!');

  const link=page.getByRole('button',{name : 'Login'});
  await Promise.all([
    page.waitForNavigation(),
    link.click()
    
  ]);

  await expect(page).toHaveURL(/secure/);
  const logoutbtn =page.getByRole('link',{name : 'Logout'});
  await expect(logoutbtn).toHaveAttribute('href','/logout');


});
