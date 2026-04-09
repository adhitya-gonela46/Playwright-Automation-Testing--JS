import { test, expect } from '@playwright/test';

test('handling the iframe', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/iframe');

  //locating the i frame
  const frame = page.frameLocator('iframe[title="Rich Text Area"]');
    
  // clearing existing text
  await frame.locator('#tinymce').clear();

  // entering text inside frame
  await frame.locator('#tinymce').fill('I am venkata adhithya');

  // Step 4: Validate text
  await expect(frame.locator('#tinymce'))
    .toHaveText('Playwright iframe working perfectly');

});