<script lang="ts">
    import '$styles/Difficulty.pcss';
    export let difficulty: string;
</script>

{#if difficulty == 'Easy'}
    <span class="easy">Easy</span>
{:else if difficulty == 'Medium'}
    <span class="medium">Medium</span>
{:else if difficulty == 'Hard'}
    <span class="hard">Hard</span>
{/if}
