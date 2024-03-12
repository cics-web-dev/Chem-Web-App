<script lang="ts">
    import '$styles/Auth.pcss';
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
                    <h1 class="auth-title-style">Let's get learning</h1>
                    <p class="auth-subtitle-style">Please sign up to continue</p>
                </div>
                <!-- End of Header section -->

                <div class="mt-5">
                    <!-- Form -->
                    <form method="POST" use:enhance>
                        <div class="grid gap-y-4">
                            <!-- Name form group -->
                            <div class="name-form-group">
                                <span class="auth-input-field-label-style">Name</span>
                                <div class="relative">
                                    <input
                                        type="text"
                                        name="userFullName"
                                        class="auth-input-field-style"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Name Form Group -->

                            <!-- Email form group -->
                            <div class="email-form-group">
                                <span class="auth-input-field-label-style">Email address</span>
                                <div class="relative">
                                    <input
                                        type="email"
                                        name="userEmail"
                                        class="auth-input-field-style"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- End Email Form Group -->

                            <!-- Password Form Group -->
                            <div class="password-form-group">
                                <span class="auth-input-field-label-style">Password</span>
                                <div class="relative">
                                    <input
                                        type="password"
                                        name="userPassword"
                                        class="auth-input-field-style"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <!-- Password End Form Group -->

                            <!-- Confirm password Form Group -->
                            <div class="confirm-password-form-group">
                                <span class="auth-input-field-label-style">Confirm Password</span>
                                <div class="relative">
                                    <input
                                        type="password"
                                        name="userConfirmPassword"
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
                                <p class="auth-subtitle-style">
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
