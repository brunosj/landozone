<script lang="ts">
	import Chart from '$lib/assets/svg/chart.svelte';
	import Website from '$lib/assets/svg/website.svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<div class="figures" transition:fly={{ x: 100, duration: 500, delay: 250, easing: cubicInOut }}>
	<div class="website">
		<Website />
	</div>
	<div class="chart">
		<Chart />
	</div>
</div>

<style>
	.figures {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
		margin: auto;
	}

	.website {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-gray);
		border-radius: 12px;
		z-index: auto;
	}

	.chart {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-gray);
		border-radius: 12px;
		z-index: auto;
	}

	.chart::before,
	.website::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0.5;
		/* z-index: -1; */
		border-radius: 12px;
		border: 2px solid var(--color-primary);
		transform: translate(0.5rem, -0.5rem);
		box-sizing: border-box;
	}

	@media (min-width: 50em) {
		.figures {
			margin-left: auto;
		}

		.website {
			width: 30%;
			padding: 2rem;
			margin-top: 8rem;
		}

		.chart {
			width: 30%;
			padding: 2rem;
			margin-bottom: 8rem;
		}

		.chart::before,
		.website::before {
			transform: translate(1rem, -1rem);
		}
	}
</style>
