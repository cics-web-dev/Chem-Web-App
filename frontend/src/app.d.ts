// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: string | undefined;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    interface Window {
        HSStaticMethods: any;
    }
}

export { };
