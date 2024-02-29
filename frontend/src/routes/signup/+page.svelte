<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<svelte:head>
    <title>Sign up</title>
</svelte:head>

<div class="auth-page">
    <div class="container-page">
        <div class="auth-row">
            <div class="p-4 sm:p-7">
                <!-- Header section -->
                <div class="text-center">
                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                        Let's get learning
                    </h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Please sign up to continue
                    </p>
                </div>
                <!-- End of Header section -->

                <div class="mt-5">
                    <!-- Form -->
                    <form method="POST" use:enhance>
                        <div class="grid gap-y-4">
                            <!-- Name form group -->
                            <div>
                                <label for="name" class="auth-input-field-label-style">Name</label>
                                <div class="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        class="auth-input-field-style"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Name Form Group -->

                            <!-- Email form group -->
                            <div>
                                <label for="email" class="auth-input-field-label-style"
                                    >Email address</label
                                >
                                <div class="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        class="auth-input-field-style"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Email Form Group -->

                            <!-- Password Form Group -->
                            <div>
                                <label for="password" class="auth-input-field-label-style"
                                    >Password</label
                                >
                                <div class="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        class="auth-input-field-style"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- Password End Form Group -->

                            <!-- Confirm password Form Group -->
                            <div>
                                <label for="confirm-password" class="auth-input-field-label-style"
                                    >Confirm Password</label
                                >
                                <div class="relative">
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        class="auth-input-field-style"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Confirm password Form Group -->

                            <!-- dash line -->
                            <div class="dashline"></div>

                            <button type="submit" class="auth-submit-button-style">Sign up</button>

                            <div class="text-center">
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Already have an account?
                                    <a class="auth-redirect-button-style" href="/login">
                                        Login in here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </div>
</div>
