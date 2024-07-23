<script lang="ts">
    import { enhance } from '$app/forms';

    import '$styles/Feedback.pcss';
    import '$styles/Auth.pcss';
    import EmailIcon from '$icons/Feedback/Email.svelte';
    import IncrementIcon from '$icons/Feedback/Increment.svelte';
    import DecrementIcon from '$icons/Feedback/Decrement.svelte';
    import PersonIcon from '$icons/Feedback/Person.svelte';
    import '$styles/Button.pcss';
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<div class="auth-page">
    <div class="mx-auto w-full max-w-xl p-6;">
        <div class="auth-row">
            <h1 class="heading-text">Submit Your Feedback</h1>
            <p class="m-3 text-center">
                Your feedback is important to us! Use this space to suggest a new feature, notify
                our team of any tech issues, or note an inconsistency in solutions.
            </p>
            <p class="m-3">* required field</p>
            <form method="POST" use:enhance class="m-3">
                <div>
                    <label for="hs-leading-icon" class="text-input-label">Name</label>
                    <div class="relative">
                        <input
                            type="text"
                            id="hs-leading-icon"
                            name="name"
                            class="text-input-field"
                            placeholder="John Doe"
                        />
                        <div class="email-icon-holder opacity-50">
                            <PersonIcon />
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <label for="hs-leading-icon" class="text-input-label">Email address</label>
                    <div class="relative">
                        <input
                            type="text"
                            id="hs-leading-icon"
                            name="email"
                            class="text-input-field"
                            placeholder="jdoe@umass.edu"
                        />
                        <div class="email-icon-holder">
                            <EmailIcon />
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div>
                        <label for="chapter-num" class="text-input-label"
                            >Chapter Number, if applicable</label
                        >
                        <!-- Input Number -->
                        <div class="input-number-outer-wrapper" data-hs-input-number="">
                            <div class="input-number-inner-wrapper">
                                <button
                                    type="button"
                                    class="number-button"
                                    data-hs-input-number-decrement=""
                                >
                                    <DecrementIcon />
                                </button>
                                <input
                                    class="number-input"
                                    type="text"
                                    name="chapter-number"
                                    value="0"
                                    data-hs-input-number-input=""
                                />
                                <button
                                    type="button"
                                    class="number-button"
                                    data-hs-input-number-increment=""
                                >
                                    <IncrementIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!-- End Input Number -->
                        <label for="question-num" class="text-input-label"
                            >Question Number, if applicable</label
                        >
                        <!-- Input Number -->
                        <div class="input-number-outer-wrapper w-[110px]" data-hs-input-number="">
                            <div class=".input-number-inner-wrapper">
                                <button
                                    type="button"
                                    class="number-button"
                                    data-hs-input-number-decrement=""
                                >
                                    <DecrementIcon />
                                </button>
                                <input
                                    class="number-input"
                                    type="text"
                                    value="0"
                                    name="question-number"
                                    data-hs-input-number-input=""
                                />
                                <button
                                    type="button"
                                    class="number-button"
                                    data-hs-input-number-increment=""
                                >
                                    <IncrementIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End Input Number -->
                </div>
                <br />
                <label>Description of issue *</label>
                <textarea
                    name="feedback-field"
                    id="message"
                    rows="4"
                    class="textarea-input-field"
                    placeholder="Write your feedback here..."
                ></textarea>

                <button type="submit" class="submit-button m-3"> Submit Feedback </button>
            </form>
        </div>
    </div>
</div>
