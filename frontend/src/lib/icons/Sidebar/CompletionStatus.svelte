<script lang="ts">
    // to indicate whether a question is completed or not
    export let isCompleted: boolean;
</script>

<!-- Credit: https://tablericons.com/ -->
{#if isCompleted}
    <!-- Checkmark icon when question is completed (need to add color) -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-check"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#00b341"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
    </svg>
{:else}
    <!-- Full circle icon when the question is not completed  -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-circle-filled"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#00b341"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
            stroke-width="0"
            fill="currentColor"
        />
    </svg>
{/if}
