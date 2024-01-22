<script lang="ts">
	export let data;

	import type { Blog } from '$lib/types/types';
	import { onMount, afterUpdate } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Tag from '$components/UI/Tag.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import { formatDate, generateTOC } from '$lib/utils/utils.js';
	// @ts-ignore
	import Toc from 'svelte-toc';

	let item: Blog = data.meta;
	let { name, date, slug, description, technologies } = item;

	let element;
	let intersecting = false;

	let contentElement: HTMLElement | null;
	let tocElement: HTMLElement | null;
	let activeListItem: HTMLLIElement | null;

	onMount(() => {
		checkContentElement();
	});

	afterUpdate(() => {
		checkContentElement();
	});

	function checkContentElement() {
		contentElement = document.querySelector('.markdown');
		if (contentElement) {
			tocElement = generateTOC(contentElement);
		}
	}
</script>

<SEO title={`landozone | ${name}`} {description} />

<article bind:this={element} class="">
	<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
		{#if intersecting}
			<div
				class="table-of-contents"
				transition:fly={{ x: -100, duration: 500, delay: 250, easing: cubicInOut }}>
				<Toc
					title=""
					--toc-width="20vw"
					--toc-desktop-sticky-top="15vh"
					--toc-desktop-nav-margin="0 0 0 2rem"
					--toc-overflow="hidden"
					--toc-active-bg="transparent"
					--toc-li-padding="0.4rem 0rem"
					--toc-active-color="#00cfa1"
					--toc-li-hover-color="#00cfa1"
					--toc-active-font-weight="500" />
			</div>
			<section class="page-container">
				<div class="markdown" transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>
					<div class="header">
						<span class="title">{name}</span>
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
		display: grid;

		grid-template-columns: 1fr auto;
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

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.title {
		font-family: 'Sora Variable', sans-serif;
		font-size: 1.5rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.table-of-contents {
		display: none;
	}

	@media (min-width: 55em) {
		.title {
			font-size: 3rem;
			line-height: 3rem;
		}

		.title {
			margin-bottom: 2rem;
		}

		.table-of-contents {
			display: block;
		}

		.markdown {
			width: 75%;
		}

		.details {
			gap: 1.5rem;
		}
	}

	@media (min-width: 100em) {
		.markdown {
			width: 65%;
		}
	}
</style>
