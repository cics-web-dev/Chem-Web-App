import type { Actions } from './$types';
import { signupSchema } from '$lib/zodSchema/SignupSchema.js';
import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/**
 * Handles the form submission actions for the signup page.
 * Reference:
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action-validation-errors
 * @param request - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the form submission is handled.
 */
export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        const get = (tag: string): string | undefined => formData.get(tag)?.toString();

        // extract the user data from the form submission
        const name = get('userFullName');
        const email = get('userEmail');
        const password = get('userPassword');
        const confirmPassword = get('userConfirmPassword');

        // validte the form date using zod schema
        const result = signupSchema.safeParse({ name, email, password, confirmPassword });

        // if the form data is invalid, return and display a list of error messages
        // not returning password and confirmPassword for security reasons
        if (!result.success) {
            return fail(400, { name, email, errors: result.error.issues.map(issue => issue.message) });
        }

        // send the request to the server
        const body = await api.post('/auth/signup', { name, email, password, role: "student" });

        // decode the jwt token and set it as a cookie
        const jwt = btoa(JSON.stringify(body.user)); 
        cookies.set('jwt', jwt, { path: '/' });

        redirect(307, '/signup');
    }
} satisfies Actions;
