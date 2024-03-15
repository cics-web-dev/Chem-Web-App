<script lang="ts">
    import '$styles/Auth.pcss';
    import { enhance } from '$app/forms';

    import { userAuthenticated } from '$stores/UserAuthenticationStore';

    let showPassword: boolean = false;
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="auth-page">
    <div class="container-page">
        <div class="auth-row">
            <div class="p-4 sm:p-7">
                <!-- Header section -->
                <div class="text-center">
                    <h1 class="auth-title">Let's get learning</h1>
                    <p class="auth-subtitle">Please log in to continue</p>
                </div>
                <!-- End of Header section -->

                <div class="mt-5">
                    <!-- Form -->
                    <form method="POST" use:enhance>
                        <div class="grid gap-y-4">
                            <!-- Email form group -->
                            <div class="email-form-group">
                                <span class="auth-input-field-label">Email address</span>
                                <div class="relative">
                                    <input
                                        type="email"
                                        name="userEmail"
                                        class="auth-input-field"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Email Form Group -->

                            <!-- Password Form Group -->
                            <div class="password-form-group">
                                <div class="flex items-center justify-between">
                                    <span class="mb-2 block text-sm dark:text-white">Password</span>
                                    <a class="auth-redirect-button" href="/forget"
                                        >Forgot password?</a
                                    >
                                </div>
                                <div class="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="userPassword"
                                        class="auth-input-field"
                                        autocomplete="off"
                                        required
                                    />
                                    <button
                                        type="button"
                                        class="password-reveal-button"
                                        on:click={() => (showPassword = !showPassword)}
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                            <!-- Password End Form Group -->

                            <!-- dash line -->
                            <div class="dashline"></div>

                            <button type="submit" class="auth-submit-button" id="auth-submit-button"
                                >Log in</button
                            >

                            <div class="text-center">
                                <p class="auth-subtitle">
                                    Don't have an account?
                                    <a class="auth-redirect-button" href="/signup">
                                        Sign up here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>
                    <!-- End Form -->
                    <a
                        href="/questions/1"
                        on:click={() => {
                            userAuthenticated.login();
                        }}
                        class="text-center text-white"
                    >
                        Secret Button to enter question page
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
