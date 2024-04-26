import type { LayoutServerLoad } from "./$types";

/**
 * Loads the layout server data.
 * @param locals - The local data.
 * @returns The layout server data.
 */
export const load: LayoutServerLoad = async ({ locals }) => {
    return {
        user: locals.user && {
            name: locals.user.name,
            email: locals.user.email,
            role: locals.user.role,
            token: locals.user.token,
        }
    }
};