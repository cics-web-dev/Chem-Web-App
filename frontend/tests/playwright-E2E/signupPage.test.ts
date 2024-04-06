import { expect, test } from '@playwright/test';

test.describe('signup page test', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('/signup');
   });

   test('Check signup page heading', async ({ page }) => {
      // capture the <h> tag
      await expect(page.getByRole('heading', { name: 'Let\'s get learning' })).toBeVisible();
   });

   test('Check signup page form with four textfield and submit button', async ({ page }) => {
    await expect(page.locator('input[name="userFullName"]')).toBeVisible();
    await expect(page.locator('input[name="userEmail"]')).toBeVisible();
    await expect(page.locator('input[name="userPassword"]')).toBeVisible();
    await expect(page.locator('input[name="userConfirmPassword"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
 });

 test('Check redirect button for login page', async ({ page }) => {   
    // capture the <a> tag
    await expect(page.getByRole('link', { name: 'Login in here' })).toBeVisible();
 });

 test('check forget button to redirect to forget password page', async ({ page }) => {
    await page.click('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:4173/login');
 });


});
