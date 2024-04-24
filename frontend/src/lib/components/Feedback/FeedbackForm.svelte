<script lang="ts">
    import '$styles/Feedback.pcss';
    import '$styles/Auth.pcss';
    import EmailIcon from '$icons/Email.svelte';
    import IncrementIcon from '$icons/Increment.svelte';
    import DecrementIcon from '$icons/Decrement.svelte';
    import PersonIcon from '$icons/Person.svelte';
    import '$styles/Button.pcss';

    let name: string = "";
    let email: string = "";
    let chapter: number = 0;
    let question: number = 0;
    let feedback: string = "";

    const submitFeedback = () => {
        fetch('https://script.google.com/a/macros/umass.edu/s/AKfycbyy6_ndlSZu_VUC_tdgoQhoOsxyUEBIKZ1YvwJGnwJSy_DLBqDr2uYiiUkVot-fHWRQ/exec', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                chapter: chapter,
                question: question,
                feedback: feedback
            })
        }).then((response) => {
            if (response.ok) { console.log("feedback sent successfully"); }
            else { console.log("error encountered in sending feedback"); }
        }).catch(error => {
            console.error('Error submitting feedback:', error);
        });
    }
</script>

<div class="auth-page">
    <div class="mx-auto w-full max-w-xl p-6;">
        <div class="auth-row">
            <h1 class="heading-text">Submit Your Feedback</h1>
            <p class="m-3 text-center">Your feedback is important to us! Use this space to suggest a new feature, notify our team of any tech issues, or note an inconsistency in solutions. </p>
            <p class = "m-3">* required field</p>
            <form class="m-3">
                <div>
                    <label for="hs-leading-icon" class="text-input-label">Name</label>
                    <div class="relative">
                    <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="text-input-field" placeholder="John Doe" bind:value={name}>
                    <div class="email-icon-holder opacity-50">
                        <PersonIcon />
                    </div>
                    </div>
                </div>
                <br>
                <div>
                    <label for="hs-leading-icon" class="text-input-label">Email address</label>
                    <div class="relative">
                    <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="text-input-field" placeholder="jdoe@umass.edu" bind:value={email}>
                    <div class="email-icon-holder">
                        <EmailIcon />
                    </div>
                    </div>
                </div>
                <br>
                <div>
                    <div>
                        <label for="chapter-num" class="text-input-label">Chapter Number, if applicable</label>
                        <!-- Input Number -->
                        <div class="input-number-outer-wrapper" data-hs-input-number="">
                            <div class="input-number-inner-wrapper">
                            <button type="button" class="number-button" data-hs-input-number-decrement="">
                                <DecrementIcon />
                            </button>
                            <input class="number-input" type="text" value="0" data-hs-input-number-input="">
                            <button type="button" class="number-button" data-hs-input-number-increment="">
                                <IncrementIcon />
                            </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    <!-- End Input Number -->
                    <label for="question-num" class="text-input-label">Question Number, if applicable</label>
                    <!-- Input Number -->
                    <div class="input-number-outer-wrapper w-[110px]" data-hs-input-number="">
                        <div class=".input-number-inner-wrapper">
                        <button type="button" class="number-button" data-hs-input-number-decrement="">
                            <DecrementIcon />
                        </button>
                        <input class="number-input" type="text" value="0" data-hs-input-number-input="">
                        <button type="button" class="number-button" data-hs-input-number-increment="">
                            <IncrementIcon />
                        </button>
                        </div>
                    </div>
                </div>
                    <!-- End Input Number -->
                </div>
                <br>
                <label>Description of issue *</label>
                <textarea id="message" rows="4" class="textarea-input-field" placeholder="Write your feedback here..." bind:value={feedback}></textarea>

                <button type="submit" class="submit-button m-3" on:click={submitFeedback}> Submit Feedback </button>
                
            </form>
        </div>
    </div>
    
</div>
