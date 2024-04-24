import type { Handle } from "@sveltejs/kit"

/**
 * Handles the incoming request and adds the decoded JWT to the locals object.
 * @param handleEvent - The handle event object containing the request event and resolve function.
 * @returns The response object.
 */
export const handle: Handle = async ({ event, resolve }) => {
    const jwt = event.cookies.get('jwt');

    // Decode the JWT and add it to the locals object
    // atob decodes a string of data which has been encoded using Base64 encoding.
    event.locals.user = jwt ? JSON.parse(atob(jwt)) : undefined;

    const response = await resolve(event);

    return response;
};