<script lang="ts">
    import '$styles/Auth.pcss';

    import { enhance } from '$app/forms';

    import ListErrors from '$components/Miscellaneous/ListErrors.svelte';
    import type { ActionData } from './$types';

    export let form: ActionData;

    let showPassword: boolean = false;
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
                    <h1 class="auth-title">Let's get learning</h1>
                    <p class="auth-subtitle">Please sign up to continue</p>
                </div>
                <!-- End of Header section -->

                <div class="mt-5">
                    <!-- Form -->
                    <form method="POST" use:enhance>
                        <div class="grid gap-y-4">
                            <!-- Name form group -->
                            <div class="name-form-group">
                                <span class="auth-input-field-label">Full Name</span>
                                <div class="relative">
                                    <input
                                        type="text"
                                        name="userFullName"
                                        class="auth-input-field"
                                        value={form?.name ?? ''}
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Name Form Group -->

                            <!-- Email form group -->
                            <div class="email-form-group">
                                <span class="auth-input-field-label">Email address</span>
                                <div class="relative">
                                    <input
                                        type="email"
                                        name="userEmail"
                                        class="auth-input-field"
                                        value={form?.email ?? ''}
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Email Form Group -->

                            <!-- Password Form Group -->
                            <div class="password-form-group">
                                <span class="auth-input-field-label">Password</span>
                                <div class="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="userPassword"
                                        class="auth-input-field"
                                        minlength="8"
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

                            <!-- Confirm password Form Group -->
                            <div class="confirm-password-form-group">
                                <span class="auth-input-field-label">Confirm Password</span>
                                <div class="relative">
                                    <input
                                        type="password"
                                        name="userConfirmPassword"
                                        class="auth-input-field"
                                        minlength="8"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Confirm password Form Group -->

                            <!-- Show a list of errors here with bullet point -->
                            <ListErrors errors={form?.errors ?? []} />

                            <!-- dash line -->
                            <div class="dashline"></div>

                            <button type="submit" class="auth-submit-button" id="auth-submit-button"
                                >Sign up</button
                            >

                            <div class="text-center">
                                <p class="auth-subtitle">
                                    Already have an account?
                                    <a class="auth-redirect-button" href="/login">
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
