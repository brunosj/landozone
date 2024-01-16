<script lang="ts">
	export let data;

	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'imprint + privacy policy';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Imprint',
			slug: 'imprint'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact',
		datePublished: '2023-12-05T14:19:33.000+0100',
		lastUpdated: '2021-12-05T14:19:33.000+0100'
	};

	// Logic
	let element;
	let intersecting = false;
</script>

<SEO {...seoProps} />
<section>
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container" bind:this={element}>
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			{#if intersecting}
				<div class="content">
					<div class="description">
						<h2 transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>
							imprint + privacy policy
						</h2>
					</div>
					<div class="markdown" transition:fade={{ duration: 500, delay: 500, easing: cubicInOut }}>
						<svelte:component this={data.content} />
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		color: white;
		position: relative;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}

	h2 {
		color: var(--color-secondary);
	}

	.svg-bg {
		position: fixed;
		top: -2%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.15;
	}

	.description {
		margin-bottom: 1rem;
	}

	@media (min-width: 50em) {
		section {
			margin-top: 7rem;
		}

		.svg-bg {
			width: 100%;
			top: -35%;
		}

		.description {
			width: 60%;
			margin: 0 auto;
			margin-bottom: 2rem;
		}
	}
</style>
