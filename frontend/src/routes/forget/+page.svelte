<script>
    import '$styles/Auth.pcss';
    import { enhance } from '$app/forms';
</script>

<html class="h-full">
    <div class="auth-page">
        <div class="container-page">
            <div class="auth-row">
                <div class="p-4 sm:p-7">
                    <div class="text-center">
                        <h1 class="auth-title-style">Forgot password?</h1>
                        <p class="auth-subtitle-style">
                            Remember your password?
                            <a class="auth-redirect-button-style" href="/login"> Sign in here </a>
                        </p>
                    </div>

                    <div class="mt-5">
                        <!-- Form -->
                        <form method="POST" use:enhance>
                            <div class="grid gap-y-4">
                                <!-- Form Group -->
                                <div>
                                    <label for="email" class="auth-input-field-label-style"
                                        >Email address</label
                                    >
                                    <div class="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            class="auth-input-field-style"
                                            required
                                            aria-describedby="email-error"
                                        />
                                        <div
                                            class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"
                                        >
                                            <svg
                                                class="size-5 text-red-500"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p class="mt-2 hidden text-xs text-red-600" id="email-error">
                                        Please include a valid email address so we can get back to
                                        you
                                    </p>
                                </div>
                                <!-- End Form Group -->

                                <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >Reset password</button
                                >
                            </div>
                        </form>
                        <!-- End Form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</html>
