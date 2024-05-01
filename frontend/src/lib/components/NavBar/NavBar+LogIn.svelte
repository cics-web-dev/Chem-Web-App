<script lang="ts">
    import UserProfileIcon from '$icons/Popover/Profile.svelte';
    import LogoutIcon from '$icons/Popover/Logout.svelte';
    import Hamburger from '$icons/Sidebar/Hamburger.svelte';
    import Upload from '$icons/Popover/Upload.svelte';

    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
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
            {#if $page.url.pathname.startsWith('/question')}
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
            <div class="flex items-center sm:block dark:text-white">
                {#if $page.url.pathname.startsWith('/question') && innerWidth >= 1024}
                    <button on:click={sidebarExpanded.toggle}>
                        <Hamburger />
                    </button>
                {/if}
            </div>

            {#if $page.data.user}
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
                                    {$page.data.user.email}
                                </p>
                            </div>
                            <div class="mt-2 py-2 first:pt-0 last:pb-0">

                                {#if $page.data.user.role === 'student'}
                                    <a class="dropdown-menu-button" href="/profile">
                                        <UserProfileIcon />
                                        Profile
                                    </a>
                                {:else if $page.data.user.role === 'teacher'}
                                    <a class="dropdown-menu-button" href="/upload"> 
                                        <Upload />
                                        Upload 
                                    </a>
                                {/if}
                                
                                <form use:enhance method="POST" action="/login?/logout">
                                    <button class="dropdown-menu-button w-full">
                                        <LogoutIcon />
                                        Log out
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </nav>
</header>

<style lang="postcss">
    .dropdown-menu-button {
        @apply flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300;
    }
</style>
