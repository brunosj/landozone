<script lang="ts">

	import type { Blog } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Tag from '$components/UI/Tag.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	interface Props {
		item: Blog;
	}

	let { item }: Props = $props();

	let { name, date, slug, description, technologies } = item;
	let animate = $state(false);
	let isHovered = $state(false);

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<li onmouseenter={() => (isHovered = true)} onmouseleave={() => (isHovered = false)}>
		<a class="blog" href={`/blog/${slug}`}>
			<div class="info">
				<p>{formatDate(date)}</p>
				<h4>
					{name}
				</h4>
				<p class="description">{description}</p>
				<div class="details">
					<ul class="">
						{#each technologies as item}
							{#if isHovered}
								<Tag keepTextLight={false}>{item}</Tag>
							{:else}
								<Tag keepTextLight={true}>{item}</Tag>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		</a>
	</li>
{/if}

<style>
	li {
		position: relative;
		list-style: none;
		width: 100%;
		border-radius: 12px;
		display: flex;
		justify-content: space-between;
		background-color: var(--color-gray);
		transition: all 0.3s ease-in-out;
		/* margin-bottom: 3rem; */
	}

	li:hover {
		background-color: var(--color-primary);
		color: var(--color-black);
	}

	li:hover p {
		color: var(--color-black);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.7rem;
		column-gap: 0.7rem;
		margin: 0.5rem 0;
	}

	p {
		font-size: 0.9rem;
		color: var(--color-lightgray);
		transition: all 0.3s ease-in-out;
	}

	.blog {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 12px;
		gap: 0.5rem;
		/* height: 100%; */
	}

	.info {
		padding: 1rem;
	}

	.info > * + * {
		margin-top: 1rem;
	}

	@media (min-width: 55em) {
		li {
			width: 48%;
		}

		p {
			font-size: 1rem;
		}

		.info {
			padding: 2rem;
		}

		.info > * + * {
			margin-top: 1.5rem;
		}
	}
</style>
