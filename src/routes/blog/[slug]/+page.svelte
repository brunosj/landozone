<script lang="ts">
	export let data;

	import type { Blog, Heading } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	import Tag from '$components/UI/Tag.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import { formatDate } from '$lib/utils/utils.js';

	let item: Blog = data.meta;
	let { name, date, slug, description, technologies } = item;

	let element;
	let intersecting = false;
</script>

<SEO title={`landozone | ${name}`} {description} />

<article bind:this={element}>
	<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
		{#if intersecting}
			<section class="page-container">
				<div class="markdown" transition:fade={{ duration: 500, delay: 500, easing: cubicInOut }}>
					<div class="header">
						<h2>{name}</h2>
						<div class="details">
							<ul>
								{#each technologies as item}
									<Tag keepTextLight={true}>{item}</Tag>
								{/each}
							</ul>
						</div>
					</div>
					<svelte:component this={data.content} />
					<span>Published on {formatDate(date)}</span>
				</div>
			</section>
		{/if}
	</IntersectionObserver>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		background-color: var(--color-black);
		color: white;
		position: relative;
		margin: 5rem 0;
	}

	section {
		margin: auto;
	}

	span {
		color: var(--color-lightgray);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.7rem;
		column-gap: 0.7rem;
		margin: 0.5rem 0;
	}

	h1,
	h2 {
		color: var(--color-primary);
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}

	@media (min-width: 55em) {
		.details {
			/* flex-direction: row; */
			/* align-items: center; */
			gap: 1.5rem;
		}
	}
</style>
