<script lang="ts">
    /*
    TODO: (TAS-25) Work on the nav bar component here
    https://www.notion.so/uma-chemistry/Implement-the-main-page-nav-bar-9e9eaa1e62ae4c11a778e53cd1ee292d?pvs=4
    */
    import NavbarCollapseButton from './Navbar+CollapseButton.svelte';
</script>

<header
    class="z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start dark:bg-gray-800"
>
    <nav
        class="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
    >
        <div class="flex items-center justify-between">
            <a class="flex-none text-xl font-semibold dark:text-white" href="/">Home</a>
            <div class="sm:hidden">
                <NavbarCollapseButton />
            </div>
        </div>
        <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
            <div
                class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
            >
                <a class="nav-button-style" href="/login" aria-current="page">Log In</a>
                <a class="nav-button-style" href="/signup">Sign Up</a>
            </div>
        </div>
    </nav>
</header>
