<script>
    import '$styles/Auth.pcss';
    import { enhance } from '$app/forms';
</script>

<svelte:head>
    <title>Forget password?</title>
</svelte:head>

<div class="auth-page">
    <div class="container-page">
        <div class="auth-row">
            <div class="p-4 sm:p-7">
                <div class="text-center">
                    <h1 class="auth-title">Forgot password?</h1>
                    <p class="auth-subtitle">
                        Remember your password?
                        <a class="auth-redirect-button" href="/login"> Log in here </a>
                    </p>
                </div>

                <div class="mt-5">
                    <!-- Form -->
                    <form method="POST" use:enhance>
                        <div class="grid gap-y-4">
                            <!-- Form Group -->
                            <div>
                                <label for="email" class="auth-input-field-label"
                                    >Email address</label
                                >
                                <div class="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="auth-input-field"
                                    />
                                </div>
                            </div>
                            <!-- End Form Group -->

                            <button type="submit" class="auth-submit-button" id="auth-submit-button"
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
