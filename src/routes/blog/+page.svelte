<script lang="ts">
	import type { Blog } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import BlogCard from '$components/Blog/BlogCard.svelte';
	let { data } = $props();

	// SEO
	let title = 'blog';
	let metadescription = 'some thoughts on web development and other things';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Blog',
			slug: 'blog'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact'
	};

	// Logic
	let blogs: Blog[] = data.blogs;

	let blogsByDate: Blog[] = blogs.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	let element: HTMLElement | null | undefined = $state();
	let intersecting = $state(false);
</script>

<SEO {...seoProps} />
<section bind:this={element}>
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container">
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			{#if intersecting}
				<div class="content">
					<div class="description">
						<h2 transition:fade={{ duration: 350, delay: 0, easing: cubicInOut }}>blog</h2>
						<p transition:fade={{ duration: 350, delay: 250, easing: cubicInOut }}>
							some thoughts on web development and other things
						</p>
					</div>
					<ul
						class="blogs"
						transition:fly={{ y: 75, duration: 500, delay: 250, easing: cubicInOut }}>
						{#each blogsByDate as item}
							<BlogCard {item} />
						{/each}
					</ul>
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
	}

	h2 {
		color: var(--color-primary);
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
		margin-bottom: 3rem;
		/* text-align: center; */
	}

	.description > * + * {
		margin-top: 0.5rem;
	}

	.blogs {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		width: 100%;
	}

	@media (min-width: 55em) {
		section {
			margin-top: 7rem;
		}

		.svg-bg {
			width: 100%;
			top: -35%;
		}

		.blogs {
			gap: 2rem;
		}

		.description {
			margin-bottom: 4rem;
		}

		.description > * + * {
			margin-top: 1rem;
		}
	}
</style>
