<script lang="ts">
    import { onDestroy } from 'svelte';
    import RedoIcon from '$icons/Question/Redo.svelte';
    import TwoDIcon from '$icons/Question/2D-stack.svelte';
    import ThreeDIcon from '$icons/Question/3D-cube.svelte';
    import PlayIcon from '$icons/Question/Play.svelte';
    import PauseIcon from '$icons/Question/Pause.svelte';

    import '$styles/Button.pcss';

    /* instead of having direct export of the entire question,
     we only select the properties we need. Since the question
     has the mol file, which is relatively large, therefore passing the necessary data to a component
     can reduce memory usage and optimize the performance of rendering */
    export let chapter: number;
    export let question: number;
    export let title: string;
    export let description: string;

    let isTwoDimensional: boolean = true; // The default display is 2D

    /*--- The start of timer logic -----*/
    let isTimerStarted: boolean = false; // The timer is not started by default
    let secondsElapsed: number = 0; // The total elapsed time in seconds
    let timer: NodeJS.Timeout; // The timer object that will be used to increment the secondsElapsed

    // Converts the elapsed time in seconds to a minutes:seconds format
    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60); // one minute has 60 seconds
        const remainingSeconds = seconds % 60; // the remaining seconds after converting to minutes
        return `${minutes}m:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`;
    }

    function startTimer() {
        // if timer not started, start the timer
        if (!isTimerStarted) {
            timer = setInterval(() => secondsElapsed++, 1000); // increment the secondsElapsed every 1 second
            isTimerStarted = true; // set the timer as started
        } else {
            clearInterval(timer); // if timer is already started, pause the timer
            isTimerStarted = false; // set the timer as not started
        }
    }

    function resetTimer() {
        clearInterval(timer); // pauses the timer
        secondsElapsed = 0; // reset to original value
        isTimerStarted = false; // set the timer as not started
    }

    // Cleanup the timer when the component is destroyed
    onDestroy(() => {
        clearInterval(timer);
    });
    /*--- The end of timer logic -----*/
</script>

<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid justify-center gap-3 md:grid-cols-2 items-start md:justify-between">
        <div class="text-center md:text-start">
            <h1 class="text-ls uppercase tracking-wider text-black">
                {chapter}.{question} : {title}
            </h1>
            <h2 class="mt-2 font-medium text-black">
                {description}
            </h2>
        </div>

        <div class="mt-3 gap-2 text-center flex flex-wrap items-center justify-center">
            <button type="button" class="question-header-button">
                <RedoIcon />
                Redo
            </button>

            <button
                type="button"
                class="question-header-button"
                on:click={() => (isTwoDimensional = !isTwoDimensional)}
            >
                {#if isTwoDimensional}
                    <TwoDIcon />
                    2D display
                {:else}
                    <ThreeDIcon />
                    3D display
                {/if}
            </button>

            <button
                type="button"
                class="question-header-button timer-button"
                on:click={startTimer}
                on:dblclick={resetTimer}
            >
                {#if isTimerStarted}
                    <PauseIcon />
                {:else}
                    <PlayIcon />
                {/if}
                {formatTime(secondsElapsed)}
            </button>
        </div>
    </div>
</div>

<style>
    .timer-button {
        width: 105px;
    }
</style>
