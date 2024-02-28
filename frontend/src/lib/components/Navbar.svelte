<script lang="ts">
    /*
    TODO: (TAS-25) Work on the nav bar component here
    https://www.notion.so/uma-chemistry/Implement-the-main-page-nav-bar-9e9eaa1e62ae4c11a778e53cd1ee292d?pvs=4
    */
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
                <button
                    type="button"
                    class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-collapse="#navbar-collapse-with-animation"
                    aria-controls="navbar-collapse-with-animation"
                    aria-label="Toggle navigation"
                >
                    <svg
                        class="hs-collapse-open:hidden size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><line x1="3" x2="21" y1="6" y2="6" /><line
                            x1="3"
                            x2="21"
                            y1="12"
                            y2="12"
                        /><line x1="3" x2="21" y1="18" y2="18" /></svg
                    >
                    <svg
                        class="hs-collapse-open:block hidden size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>
        </div>
        <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
            <div
                class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
            >
                <a
                    class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/login"
                    aria-current="page">Log In</a
                >
                <a
                    class="font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/signup">Sign Up</a
                >
            </div>
        </div>
    </nav>
</header>
