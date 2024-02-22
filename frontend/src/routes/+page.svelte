<script lang="ts">
	import lib from '$lib/chemdoodle/ChemDoodleWeb.js?url';
	import '$lib/chemdoodle/ChemDoodleWeb.css';
	let data: string | null = null;
	const fetchData = async () => {
		const response = await fetch('http://localhost:8080/mol');
		const json = await response.json();
		data = atob(json.mol);
		let viewACS = new ChemDoodle.ViewerCanvas('viewACS', 300, 300);
		viewACS.styles.bonds_width_2D = 0.6;
		viewACS.styles.bonds_saturationWidthAbs_2D = 2.6;
		viewACS.styles.bonds_hashSpacing_2D = 2.5;
		viewACS.styles.atoms_font_size_2D = 10;
		viewACS.styles.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
		viewACS.styles.atoms_displayTerminalCarbonLabels_2D = true;
		// let caffeineMolFile =
		// 	'Molecule Name\n  CHEMDOOD08070920033D 0   0.00000     0.00000     0\n[Insert Comment Here]\n 14 15  0  0  0  0  0  0  0  0  1 V2000\n   -0.3318    2.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318    1.0000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980    0.5000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342    0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640    1.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804    0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640   -1.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -1.0000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    2.0640   -0.0000    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.7910    1.7553    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804   -0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -2.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  3  2  1  0  0  0  0\n  4  2  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  7  4  1  0  0  0  0\n  4  8  2  0  0  0  0\n  9  5  2  0  0  0  0\n 10  5  1  0  0  0  0\n 10  8  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 12  1  0  0  0  0\n 13  8  1  0  0  0  0\n 13 11  2  0  0  0  0\n 10 14  1  0  0  0  0\nM  END\n> <DATE>\n07-08-2009\n';
		let caffeine = ChemDoodle.readMOL(data);
		caffeine.scaleToAverageBondLength(14.4);
		viewACS.loadMolecule(caffeine);

		let transformBallAndStick = new ChemDoodle.TransformCanvas3D('transformBallAndStick', 250, 250);
		transformBallAndStick.styles.set3DRepresentation('Ball and Stick');
		transformBallAndStick.styles.backgroundColor = 'black';
		// let molFile =
		// 	'3036\n  CHEMDOOD12280913053D\n\n 28 29  0     0  0  0  0  0  0999 V2000\n    0.0456    1.0544   -1.9374 Cl  0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7952   -1.7026   -1.7706 Cl  0  0  0  0  0  0  0  0  0  0  0  0\n    0.6447   -0.8006   -4.1065 Cl  0  0  0  0  0  0  0  0  0  0  0  0\n    1.8316   -0.9435    4.4004 Cl  0  0  0  0  0  0  0  0  0  0  0  0\n    6.9949    1.1239   -3.9007 Cl  0  0  0  0  0  0  0  0  0  0  0  0\n    1.9032   -1.0692   -1.6001 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8846   -1.0376   -0.1090 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2176   -0.5035   -2.1949 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5585   -0.6223   -2.3126 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2670    0.1198    0.5688 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3480   -1.2638   -2.0859 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4856   -2.1660    0.6075 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1719    0.7242   -2.7939 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2506    0.1490    1.9633 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.5313   -0.7541   -2.6203 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4691   -2.1369    2.0020 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3552    1.2340   -3.3284 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8515   -0.9793    2.6800 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.5350    0.4948   -3.2417 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.9777   -2.1366   -1.8749 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5727    1.0177    0.0401 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3513   -2.2356   -1.6034 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1951   -3.0814    0.0991 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.3077    1.3562   -2.8879 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5491    1.0585    2.4783 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.4431   -1.3411   -2.5451 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1584   -3.0244    2.5473 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3449    2.2098   -3.8075 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  9  1  0  0  0  0\n  2  9  1  0  0  0  0\n  3  9  1  0  0  0  0\n  4 18  1  0  0  0  0\n  5 19  1  0  0  0  0\n  6  7  1  0  0  0  0\n  6  8  1  0  0  0  0\n  6  9  1  0  0  0  0\n  6 20  1  0  0  0  0\n  7 10  2  0  0  0  0\n  7 12  1  0  0  0  0\n  8 11  2  0  0  0  0\n  8 13  1  0  0  0  0\n 10 14  1  0  0  0  0\n 10 21  1  0  0  0  0\n 11 15  1  0  0  0  0\n 11 22  1  0  0  0  0\n 12 16  2  0  0  0  0\n 12 23  1  0  0  0  0\n 13 17  2  0  0  0  0\n 13 24  1  0  0  0  0\n 14 18  2  0  0  0  0\n 14 25  1  0  0  0  0\n 15 19  2  0  0  0  0\n 15 26  1  0  0  0  0\n 16 18  1  0  0  0  0\n 16 27  1  0  0  0  0\n 17 19  1  0  0  0  0\n 17 28  1  0  0  0  0\nM  END\n';
		let molecule = ChemDoodle.readMOL(data, 1);
		transformBallAndStick.loadMolecule(molecule);
	};
</script>

<svelte:head>
	<script type="text/javascript" src={lib}></script>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={fetchData}> Tap on me to fetch file </button>

{#if data !== null}
	<h1>{data}</h1>
	<h2>testing chemdoodle</h2>
{/if}

<canvas id="viewACS"></canvas>
<canvas id="transformBallAndStick"></canvas>
