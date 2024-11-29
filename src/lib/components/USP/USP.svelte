<script lang="ts">
	import ArrowLink from '$components/UI/ArrowLink.svelte';
	import Figures from '$components/Figures/Figures.svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | null | undefined = $state();
	let intersecting = $state(false);
</script>

<section id="usp" class="page-section" bind:this={element}>
	<div class="page-container">
		<div class="content">
			<div class="grid">
				<div class="description">
					<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
						{#if intersecting}
							<h2 in:fly={{ x: -100, duration: 500, delay: 250, easing: cubicInOut }}>
								Let me help you bring your vision to life
							</h2>
							<p in:fly={{ x: -100, duration: 500, delay: 250, easing: cubicInOut }}>
								Whether you need a simple website, a complex web app, or stunning data
								visualizations, I'm here to help!
							</p>
							<p in:fly={{ x: -100, duration: 500, delay: 250, easing: cubicInOut }}>
								I’m an open-minded freelancer ready to help you through the entire process — from
								design to implementation and ongoing support.
							</p>
							<p in:fly={{ x: -100, duration: 500, delay: 250, easing: cubicInOut }}>
								Have an exciting project you would like to collaborate on? Let's chat!
							</p>
						{/if}
					</IntersectionObserver>
				</div>
				<Figures />
			</div>
		</div>
	</div>
</section>

<style>
	#usp {
		background-color: var(--color-gray);
	}

	h2 {
		color: var(--color-primary);
		margin-bottom: 2rem;
	}

	section {
		color: var(--color-white);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
	}

	.description > * + * {
		margin-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		gap: 3rem;
	}

	.description {
		margin: auto 0;
	}

	@media (min-width: 55em) {
		h2 {
			margin-bottom: 3rem;
		}

		.grid {
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}
	}
</style>
