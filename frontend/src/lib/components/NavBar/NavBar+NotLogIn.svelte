<script lang="ts">
    import { page } from '$app/stores';
</script>

<header class="z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap dark:bg-gray-800">
    <nav
        class="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4"
        aria-label="Global"
    >
        <a class="flex-none text-xl font-semibold dark:text-white" href="/">Home</a>
        <div class="flex flex-row items-center gap-5">
            <a class="nav-button" class:active={$page.url.pathname === '/login'} href="/login"
                >Log In</a
            >
            <a class="nav-button" class:active={$page.url.pathname === '/signup'} href="/signup"
                >Sign up</a
            >
        </div>
    </nav>
</header>

<style lang="postcss">
    .active {
        @apply text-blue-600 dark:text-blue-600;
    }
</style>
