import { expect, test } from '@playwright/test';

test.describe('login page test', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('/login');
   });

   test('Check login page heading', async ({ page }) => {
      // capture the <h> tag
      await expect(page.getByRole('heading', { name: 'Let\'s get learning' })).toBeVisible();
   });

   test('Check login page form with two textfield and submit button', async ({ page }) => {
      // capture user email and password textfield using name and type attribute
      await expect(page.locator('input[name="userEmail"]')).toBeVisible();
      await expect(page.locator('input[name="userPassword"]')).toBeVisible();
      await expect(page.locator('button[type="submit"]')).toBeVisible();
   });

   test('Check redirect button for forget and sign up page', async ({ page }) => {   
      // capture the <a> tag
      await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up here' })).toBeVisible();
   });

   test('check forget button to redirect to forget password page', async ({ page }) => {
      await page.click('a[href="/forget"]');
      expect(page.url()).toBe('http://localhost:4173/forget');
   });

   test('check signup button to redirect to signup page', async ({ page }) => {
      await page.click('a[href="/signup"]');
      expect(page.url()).toBe('http://localhost:4173/signup');
   });

});
