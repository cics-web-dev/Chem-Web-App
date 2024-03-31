<script lang="ts">
    import DarkModeIcon from '$icons/Popover/DarkMode.svelte';
    import UserProfileIcon from '$icons/Popover/UserProfile.svelte';
    import LogoutIcon from '$icons/Popover/Logout.svelte';
    import Hamburger from '$icons/Sidebar/Hamburger.svelte';

    import { page } from '$app/stores';
    import { sidebarExpanded } from '$stores/SidebarExpandedStore';

    // the store to keep track of the inner width of the window
    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<header
    class="sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap border-b bg-white py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-2 dark:border-gray-700 dark:bg-gray-800"
>
    <nav
        class="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
        aria-label="Global"
    >
        <div class="me-5 flex gap-3 lg:me-0 lg:hidden">
            <!-- This is the hamburger button to trigger the expand state of the sidebar. It is very important to
            include the data-hs-overlay because it is how tailwindcss triggers the sidebar. Also, hamburger
            button only exists in the question page, therefore we need to check the pathname -->
            {#if $page.url.pathname.startsWith('/questions')}
                <button
                    type="button"
                    class="text-gray-500 hover:text-gray-600"
                    data-hs-overlay="#application-sidebar"
                >
                    <span class="sr-only">Toggle Navigation</span>
                    <Hamburger />
                </button>
            {/if}

            <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Home"
                >Home</a
            >
        </div>

        <div class="flex w-full items-center justify-between">
            <!-- It has to have this block to push the avatar to the other side -->
            <!-- Hamburger icon only exists on the questions page and when its inner width is greater than 1024 pixel -->
            <div class="sm:block dark:text-white">
                {#if $page.url.pathname.startsWith('/questions') && innerWidth >= 1024}
                    <button on:click={sidebarExpanded.toggle}>
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
                        class="hs-dropdown-menu duration hs-dropdown-open:opacity-100 hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] dark:border dark:border-gray-700 dark:bg-gray-800"
                        aria-labelledby="hs-dropdown-with-header"
                    >
                        <div class="-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-gray-700">
                            <p class="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                            <p class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                chemwebapp@site.com
                            </p>
                        </div>
                        <div class="mt-2 flex flex-col py-2 first:pt-0 last:pb-0">
                            <button class="drowdown-menu-button dark-mode-button justify-between">
                                <div class="flex items-center gap-x-3.5">
                                    <DarkModeIcon />
                                    Dark mode
                                </div>

                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer sr-only" />
                                    <div class="dark-mode-switch peer"></div>
                                </label>
                            </button>

                            <a class="drowdown-menu-button" href="/profile">
                                <UserProfileIcon />
                                Profile
                            </a>

                            <button class="drowdown-menu-button">
                                <LogoutIcon />
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>

<style lang="postcss">
    /* adding inline-flex allows button to behave like inline element, allowing the hover effect to extend the full width of the container  */
    .drowdown-menu-button {
        @apply inline-flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800;
        @apply focus:ring-2 focus:ring-blue-500;
        @apply hover:bg-gray-100;
        @apply dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300;
    }

    .dark-mode-button {
        @apply hover:bg-transparent; /* Remove hover effect for Dark Mode button */
        cursor: default; /* Remove pointer cursor for Dark Mode button */
    }

    .dark-mode-switch {
        @apply relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''];
        @apply peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full;
        @apply dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800;
    }
</style>
