<script>
    import '$styles/Feedback.pcss';
    import EmailIcon from '$icons/Email.svelte';

</script>

<h1 class="m-3">Submit your Feedback!</h1>

<form class="m-3 w-full-sm w-1/2">
    <div class="w-1/2">
        <span class="text-input-label">Name</span>
        <input type="text" class="text-input-field" placeholder="i.e. John Doe">
    </div>
    <br>
    <div class="w-1/2">
        <label for="hs-leading-icon" class="text-input-label">Email address</label>
        <div class="relative">
          <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="text-input-field" placeholder="jdoe@umass.edu">
          <div class="email-icon-holder">
            <EmailIcon />
          </div>
        </div>
      </div>
    <br>
    <div class="w-1/2">
        <span class="text-input-label">Question Number, if applicable</span>
        <input type="text" class="text-input-field" placeholder="i.e. 1.21">
    </div>
    <br>
    <label>Description of issue</label>
    <textarea id="message" rows="4" class="textarea-input-field" placeholder="Write your feedback here..."></textarea>

    
</form>