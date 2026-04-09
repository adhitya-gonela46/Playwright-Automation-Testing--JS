import {test, expect} from '@playwright/test';

const testData = [
  { username: 'tomsmith', password: 'SuperSecretPassword!', valid: true },
  { username: 'wronguser', password: 'SuperSecretPassword!', valid: false },
  { username: 'tomsmith', password: 'wrongpass', valid: false },
];

test.describe('Data Driven Login Test', () => {

  for (const data of testData) {

    test(`Login test with ${data.username} / ${data.password}`, async ({ page }) => {

      await page.goto('https://the-internet.herokuapp.com/login');

      // 🔹 Enter data
      await page.fill('#username', data.username);
      await page.fill('#password', data.password);

      await page.click('button[type="submit"]');

      const message = page.locator('#flash');

      
      if (data.valid) {
        // going to the new page
        await expect(page).toHaveURL(/secure/);
        await expect(message).toContainText('You logged into a secure area!');
      } else {
        //staying in the current
        
        await expect(page).toHaveURL('/login');
        await expect(message).toContainText('invalid');
      }

    });

  }

});