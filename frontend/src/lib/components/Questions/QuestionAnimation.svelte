<script lang="ts">
    import { viewCanvasStyle } from '$chemdoodle/ChemDoodleCanvasStyles';
    import type { ViewCanvasStyle } from '$types/ChemDoodle';

    import { onMount } from 'svelte';

    // the mol file to be used for the question
    export let questionMolFile: string;

    // canvas properties
    const viewCanvasID: string = 'viewerCanvas';
    const canvasWidth: number = 225;
    const canvasHeight: number = 225;

    // 2D canvas
    const initViewerCanvas = () => {
        const viewerCanvas = new ChemDoodle.ViewerCanvas(viewCanvasID, canvasWidth, canvasHeight);
        Object.keys(viewCanvasStyle).forEach((style: string) => {
            viewerCanvas.styles[style] = viewCanvasStyle[style as keyof ViewCanvasStyle];
        });

        const molFile = ChemDoodle.readMOL(questionMolFile);
        molFile.scaleToAverageBondLength(15);
        viewerCanvas.loadMolecule(molFile);
    };

    // 3D canvas (still in work progress, not yet implemented)
    // const initTransformCanvas = () => {
    //     let transformBallAndStick = new ChemDoodle.TransformCanvas3D('transform', canvasWidth, canvasHeight);
    //     transformBallAndStick.styles.set3DRepresentation('Ball and Stick');
    //     transformBallAndStick.styles.backgroundColor = 'black';
    //     let molecule = ChemDoodle.readMOL(questionMolFile, 1);
    //     transformBallAndStick.loadMolecule(molecule);
    // };

    onMount(() => {
        initViewerCanvas();
    });
</script>

<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid justify-center gap-3 md:grid-cols-2 md:items-center md:justify-between">
        <div class="text-center md:text-start">
            <canvas id={viewCanvasID} />
        </div>
    </div>
</div>
