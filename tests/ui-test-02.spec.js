const { test, expect } = require('@playwright/test');

test('Locators Validation', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  // firslty locating the text
  const logintext = page.getByText('Login Page');
  await expect(logintext).toBeVisible();

  // now locating using the role
  const loginbutton = page.getByRole('button', { name: 'Login' });
  await expect(loginbutton).toBeVisible();

  // now locating using the css
  const usernamex = page.locator('#username');
  await expect(usernamex).toBeVisible();
  
  await usernamex.fill('tomsmith');
  await expect(usernamex).toHaveValue("tomsmith");

});
