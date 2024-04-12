<script lang="ts">
    import LogoIcon from '$icons/Logo.svelte';

    import { page } from '$app/stores';
</script>

<header class="z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap dark:bg-gray-800">
    <nav
        class="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4"
        aria-label="Global"
    >
        <a class="flex-none text-lg font-semibold dark:text-white" href="/" aria-label="Home">
            <span class="flex items-center gap-2">
                <LogoIcon />
                Home
            </span>
        </a>
        <div class="flex flex-row items-center gap-8">
            <a
                class="nav-button text-md"
                class:active={$page.url.pathname === '/login'}
                href="/login">Log In</a
            >
            <a
                class="nav-button text-md"
                class:active={$page.url.pathname === '/signup'}
                href="/signup">Sign up</a
            >
        </div>
    </nav>
</header>

<style lang="postcss">
    .active {
        @apply text-blue-600 dark:text-blue-600;
    }
</style>
