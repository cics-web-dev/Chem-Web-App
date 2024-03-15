<script>
    import '$styles/Auth.pcss';
    import { enhance } from '$app/forms';
</script>

<div class="auth-page">
    <div class="container-page">
        <div class="auth-row">
            <div class="p-4 sm:p-7">
                <div class="text-center">
                    <h1 class="auth-title-style">Forgot password?</h1>
                    <p class="auth-subtitle-style">
                        Remember your password?
                        <a class="auth-redirect-button-style" href="/login"> Log in here </a>
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
                                    />
                                </div>
                            </div>
                            <!-- End Form Group -->

                            <button type="submit" class="auth-submit-button-style"
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
