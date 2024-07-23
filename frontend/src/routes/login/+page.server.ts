import type { Actions, PageServerLoad } from './$types';
import { loginSchema } from '$lib/validations/LoginSchema.js';
import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

// redirect user to home page when user already logins
export const load: PageServerLoad = ({ locals }) => {
    if (locals.user) redirect(307, "/");
}

/**
 * Handles the form submission actions for the signup page.
 * Reference:
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action
 *    - https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action-validation-errors
 * @param request - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the form submission is handled.
 */
export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();

        const get = (tag: string): string | undefined => formData.get(tag)?.toString();

        const email = get('userEmail');
        const password = get('userPassword');

        const result = loginSchema.safeParse({ email, password });

        if (!result.success) {
            return fail(400, { email, errors: result.error.issues.map(issue => issue.message) });
        }

        const body = await api.post('/auth/login', { email, password, role: "student" });

        const jwt = btoa(JSON.stringify(body.user));
        cookies.set('jwt', jwt, { path: '/' });

        redirect(307, '/');
    },

    logout: ({ cookies, locals }) => {
        cookies.delete('jwt', { path: '/' });
        locals.user = undefined;
    }
} satisfies Actions;
