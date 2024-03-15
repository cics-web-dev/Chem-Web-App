<script lang="ts">
    import UserProfileIcon from '$icons/Popover/UserProfile.svelte';
    import LogoutIcon from '$icons/Popover/Logout.svelte';
    import Hamburger from '$icons/Sidebar/Hamburger.svelte';

    import { isSidebarOpenStore } from '$stores/SidebarOpenStore';

    // the store to keep track of the width of the window
    $: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<header
    class="sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-2 dark:border-gray-700 dark:bg-gray-800"
>
    <nav
        class="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
        aria-label="Global"
    >
        <div class="me-5 flex gap-3 lg:me-0 lg:hidden">
            <!-- the hamburger button to trigger the open and close of the sidebar -->
            <!-- very important to incldue the data-hs-overlay because it is how tailwindcss trigger the sidebar -->
            <button
                type="button"
                class="text-gray-500 hover:text-gray-600"
                data-hs-overlay="#application-sidebar"
            >
                <span class="sr-only">Toggle Navigation</span>
                <Hamburger />
            </button>

            <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Home"
                >Home</a
            >
        </div>

        <div class="flex w-full items-center justify-between">
            <!-- it has to have this block to push the avatar to the other side -->
            <!-- if the window is greater than 1024 pixel, then show the hamburger icon -->
            <div class="text-white sm:block">
                {#if outerWidth >= 1024}
                    <button on:click={isSidebarOpenStore.toggle}>
                        <Hamburger />
                    </button>
                {/if}
            </div>

            <div class="flex flex-row items-center justify-end gap-2">
                <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
                    <button
                        id="hs-dropdown-with-header"
                        type="button"
                        class="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                        <img
                            class="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-gray-800"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
                            alt="User avatar"
                        />
                    </button>

                    <div
                        class="hs-dropdown-menu duration hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
                        aria-labelledby="hs-dropdown-with-header"
                    >
                        <div class="-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-gray-700">
                            <p class="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                            <p class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                chemwebapp@site.com
                            </p>
                        </div>
                        <div class="mt-2 py-2 first:pt-0 last:pb-0">
                            <a class="drowdown-menu-button-style" href="/profile">
                                <UserProfileIcon />
                                Profile
                            </a>
                            <a class="drowdown-menu-button-style" href="/">
                                <LogoutIcon />
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>

<style lang="postcss">
    .drowdown-menu-button-style {
        @apply flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300;
    }
</style>
