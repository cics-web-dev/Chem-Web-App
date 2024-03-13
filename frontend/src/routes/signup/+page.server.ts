import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

/**
 * Handles the form submission actions for the signup page.
 * Reference: https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action
 * @param request - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the form submission is handled.
 */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('userFullName');
        const email = data.get('userEmail');
        const password = data.get('userPassword');
        const confirmPassword = data.get('userConfirmPassword');

        if (password !== confirmPassword) {
            fail(400, { error: 'Passwords do not match' });
        }


    }
} satisfies Actions;