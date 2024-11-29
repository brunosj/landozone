<script lang="ts">
	import Chart from '$lib/assets/svg/chart.svelte';
	import Website from '$lib/assets/svg/website.svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | null | undefined = $state();
	let intersecting = $state(false);
</script>

<div class="figures" bind:this={element}>
	<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
		{#if intersecting}
			<div class="website" in:fly={{ x: 100, duration: 500, delay: 250, easing: cubicInOut }}>
				<Website />
			</div>
			<div class="chart" in:fly={{ x: 100, duration: 500, delay: 250, easing: cubicInOut }}>
				<Chart />
			</div>
		{/if}
	</IntersectionObserver>
</div>

<style>
	.figures {
		display: none;
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;
		width: 100%;
		/* margin: auto; */
	}

	.website {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-black);
		border-radius: 12px;
		z-index: auto;
	}

	.chart {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-black);
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
		border-radius: 12px;
		border: 2px solid var(--color-primary);
		transform: translate(-0.3rem, -0.5rem);
		box-sizing: border-box;
	}

	@media (min-width: 55em) {
		.figures {
			margin-left: auto;
			display: flex;
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
