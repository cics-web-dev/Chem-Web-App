<script lang="ts">
    import gsap from 'gsap';
    import SplitType from 'split-type';
    import { spring } from 'svelte/motion';

    import { goto } from '$app/navigation';

    import Book from '$icons/Main/Book.svelte';
    import LightBulb from '$icons/Main/LightBulb.svelte';
    import Puzzle from '$icons/Main/Puzzle.svelte';
    import Responsive from '$icons/Main/Responsive.svelte';
    import Atom from '$icons/Main/Atom.svelte';
    import MolecularStructure from '$icons/Main/MolecularStructure.svelte';
    import Molecule from '$icons/Main/Molecule.svelte';
    import RoundBeaker from '$icons/Main/RoundBeaker.svelte';

    /* ---- ANIMATION FOR TEXT ---- */

    let animateTextWrapper: HTMLElement;
    let animatePopIn: HTMLElement;

    const animationDuration = 0.3;
    let timeline: gsap.core.Timeline;

    $: {
        if (animateTextWrapper) {
            Array.from(animateTextWrapper.children).forEach((elem) => {
                timeline = gsap.timeline();
                const splitText = new SplitType(elem as HTMLElement, {
                    types: 'words,chars'
                });
                timeline.from(splitText.words, {
                    y: 10,
                    opacity: 0,
                    duration: animationDuration,
                    stagger: 0.05
                });
                timeline.from(splitText.chars, {
                    y: 10,
                    opacity: 0,
                    duration: animationDuration,
                    stagger: 0.025
                });
            });
        }
        if (animatePopIn) {
            timeline.fromTo(
                animatePopIn,
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: animationDuration * 0.5,
                    stagger: 0.05
                }
            );
        }
    }

    /* ---- ANIMATION FOR PARTICLES ---- */
    const randomSpringCoords = () => {
        const xMin = 10;
        const xMax = 40;
        const yMin = 0;
        const yMax = 90;

        const getRandomVal = (min: number, max: number) => Math.random() * (max - min) + min;

        const coords = spring({
            x: getRandomVal(xMin, xMax),
            y: getRandomVal(yMin, yMax)
        });
        coords.stiffness = 0.002;
        coords.damping = 1;
        const setNewCoords = () => {
            coords.set({
                x: getRandomVal(xMin, xMax),
                y: getRandomVal(yMin, yMax)
            });
        };
        setNewCoords();
        setInterval(setNewCoords, 10000);
        return coords;
    };

    const atomCoords = randomSpringCoords();
    const molStructureCoords = randomSpringCoords();
    const molCoords = randomSpringCoords();
    const roundBeakerCoords = randomSpringCoords();
</script>

<svelte:head>
    <title>SkoutaLab</title>
</svelte:head>

<div
    class="relative z-0 flex items-center justify-around text-slate-800 lg:h-[calc(100vh-60px)] dark:bg-slate-800 dark:text-white"
>
    <div id="hero" class="z-0">
        <div bind:this={animateTextWrapper}>
            <h1 class="mb-4 text-8xl font-bold text-green-600 dark:text-green-300">SkoutaLab</h1>
            <p class="mb-8 text-2xl font-semibold">
                Organic Chemistry, but now more fun and interactive!
            </p>
        </div>
        <button
            bind:this={animatePopIn}
            class="relative rounded-xl bg-neutral-900 px-8 py-2 text-2xl font-semibold text-white opacity-0 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-700 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-400"
            on:focus={() => goto('/login')}
        >
            Start learning
        </button>
    </div>
    <ul id="hover-card" class="relative flex w-96 flex-col dark:text-slate-600">
        <li class="tile group self-center">
            <div
                class="tile-bg top-0 transition-[width,top] group-hover:top-6 dark:bg-slate-400"
            ></div>
            <Book className="w-8 h-8 group-hover:z-20" />
            <p
                class="absolute top-24 z-20 text-center opacity-0 transition-all group-hover:opacity-100"
            >
                Learn about the different chapters in organic chemistry
            </p>
        </li>
        <div class="-mt-4 flex justify-center gap-16">
            <li class="tile group justify-self-end">
                <div
                    class="tile-bg left-0 transition-[width,left] group-hover:left-6 dark:bg-slate-400"
                ></div>
                <LightBulb className="w-8 h-8 group-hover:z-20" />
                <p
                    class="absolute left-24 z-20 text-center opacity-0 transition-all group-hover:opacity-100"
                >
                    Test your knowledge with our interactive questions
                </p>
            </li>
            <li class="tile group">
                <div
                    class="tile-bg right-0 transition-[width,right] group-hover:right-6 dark:bg-slate-400"
                ></div>
                <Puzzle className="w-8 h-8 group-hover:z-20" />
                <p
                    class="absolute right-24 z-20 text-center opacity-0 transition-all group-hover:opacity-100"
                >
                    Challenge yourself with our quizzes
                </p>
            </li>
        </div>
        <li class="tile group -mt-4 self-center">
            <div
                class="tile-bg bottom-0 transition-[width,bottom] group-hover:bottom-6 dark:bg-slate-400"
            ></div>
            <Responsive className="w-12 h-12 group-hover:z-20" />
            <p
                class="absolute bottom-24 z-20 text-center opacity-0 transition-all group-hover:opacity-100"
            >
                Our platform is responsive and works on all devices
            </p>
        </li>
    </ul>
    <div style="position: absolute; left: {$atomCoords.x}%; top: {$atomCoords.y}%; z-index: -20;">
        <Atom className="w-16 h-16 text-slate-300 dark:text-slate-500" />
    </div>
    <div
        style="position: absolute; left: {$molStructureCoords.x}%; top: {$molStructureCoords.y}%; z-index: -20;"
    >
        <MolecularStructure className="w-16 h-16 text-slate-400" />
    </div>
    <div style="position: absolute; left: {$molCoords.x}%; top: {$molCoords.y}%; z-index: -20;">
        <Molecule className="w-16 h-16 text-slate-300 dark:text-slate-500" />
    </div>
    <div
        style="position: absolute; left: {$roundBeakerCoords.x}%; top: {$roundBeakerCoords.y}%; z-index: -20;"
    >
        <RoundBeaker className="w-16 h-16 text-slate-300 dark:text-slate-500" />
    </div>
</div>

<style lang="postcss">
    .tile {
        @apply relative flex aspect-square w-1/4 items-center justify-center hover:cursor-pointer;
    }

    .tile-bg {
        @apply absolute -z-10 aspect-square w-full rotate-45 rounded-lg bg-slate-200 group-hover:z-10 group-hover:w-[225%];
    }
</style>
