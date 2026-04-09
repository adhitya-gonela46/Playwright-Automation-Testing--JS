const {test, expect} = require('playwright/test');
test('example of locator and assertion',async({page})=>{
    //it opens the website
    await page.goto('https://example.com');

    // using the locator: get heading
    const heading=page.locator('h1');

    // now checking heading is visible
    await expect(heading).toBeVisible();

    //now checking the context in heading
    await expect(heading).toHaveText('Example Domain');


    //now getting the link and storing
   const link=page.locator('a:has-text("Learn more")');
    


    //now checking link is clickable
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
    await Promise.all([
        page.waitForNavigation(),
        link.click()]);

        // We use Promise.all to ensure that Playwright waits for navigation triggered by a click action, preventing timing issues and flaky tests.
        // Use it when:

        // Clicking a link 
        // Submitting a form 
        // Any action that changes page


    //now checking the url or not
    await expect(page).toHaveURL(/iana.org/);





})

// npx playwright codegen
// npx playwright test --headed --debug
// npx playwright test --headed
// website UI testing,  locators, useractions, browser context,interactive web sites
