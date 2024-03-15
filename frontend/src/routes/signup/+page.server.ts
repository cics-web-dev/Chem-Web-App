import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
// import * as api from '$lib/api';

/**
 * Handles the form submission actions for the signup page.
 * Reference:
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action-validation-errors
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

        // validate the form data and return validation errors
        // along with the previously submitted form values
        const errors: string[] = [];
        const nameRegex = /^[a-zA-Z ]+$/; // 26 letters (upper and lower case) and space

        if (name && !nameRegex.test(name.toString())) {
            errors.push('Name cannot have letters or symbols');
        }

        if (email && !email.toString().endsWith('@umass.edu')) {
            errors.push('Email must be a UMass email');
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }

        if (errors.length > 0) {
            console.log('errors', errors);
            return fail(400, { name, email, errors });
        }

        // send the request to the server
        // const user = api.post('/auth/signup', { name, email, password, isStudent: true });

        // 307 is temporary redirect: temporarily move a resource but intend to bring it back to the original URL
        redirect(307, '/login');
    }
} satisfies Actions;
