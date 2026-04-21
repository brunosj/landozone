<script lang="ts">
	import type { Project } from '$lib/types/types';
	import { getImageComponent } from '$lib/utils/getProjectVisuals';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';
	import * as m from '$lib/paraglide/messages';

	interface Props {
		item: Project;
		variant?: 'compact' | 'featured';
	}

	let { item, variant = 'compact' }: Props = $props();

	let slug = $derived(item.slug);
	let name = $derived(item.name);
	let description = $derived(item.description);
	let color = $derived(item.color);
	let url = $derived(item.url);
	let typeLabel = $derived(item.type);
	let year = $derived(new Date(item.date).getFullYear());

	let ImageComponent = $derived(getImageComponent(slug));
</script>

<article
	class="card"
	class:featured={variant === 'featured'}
	style="--accent: {color};">
	<a class="media" href={`/projects/${slug}`} aria-labelledby="title-{slug}">
		{#if ImageComponent}
			<img src={ImageComponent} alt="" role="presentation" />
		{:else}
			<div class="media-placeholder"></div>
		{/if}
	</a>
	<div class="body">
		<div class="title-row">
			<h3 class="title" id="title-{slug}">
				<a href={`/projects/${slug}`}>{name}</a>
			</h3>
			{#if url}
				<a
					class="external"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={m.projects_open_external({ name })}>
					<IconArrow width="1.1rem" />
				</a>
			{/if}
		</div>
		<p class="description">{description}</p>
		<div class="meta">
			<span class="year">{year}</span>
			<span class="dot" aria-hidden="true">·</span>
			<span class="type">{typeLabel}</span>
		</div>
		<a class="case-link" href={`/projects/${slug}`}>{m.learn_more()}</a>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 12px;
		background-color: var(--color-gray);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent);
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.card:hover {
		box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent);
		transform: translateY(-2px);
	}

	.media {
		display: block;
		aspect-ratio: 16 / 10;
		background: var(--color-black);
		overflow: hidden;
	}

	.card.featured .media {
		aspect-ratio: 16 / 9;
		min-height: 10rem;
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.media-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--accent) 25%, var(--color-gray)),
			var(--color-gray)
		);
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 1rem 1rem 1.1rem;
		flex: 1;
	}

	.title-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.title {
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.25;
		font-weight: 500;
		font-family: 'Sora Variable', sans-serif;
	}

	.title a {
		color: var(--color-white);
		text-decoration: none;
	}

	.title a:hover {
		color: var(--color-secondary);
	}

	.external {
		flex-shrink: 0;
		color: var(--color-lightgray);
		display: flex;
		align-items: center;
		padding: 0.15rem;
		border-radius: 4px;
	}

	.external:hover {
		color: var(--color-secondary);
		background: rgba(255, 255, 255, 0.06);
	}

	.description {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.4;
		color: var(--color-lightgray);
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		flex: 1;
	}

	.meta {
		font-size: 0.78rem;
		letter-spacing: 0.02em;
		color: var(--color-lightgray);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem;
		margin-top: 0.15rem;
	}

	.dot {
		opacity: 0.5;
	}

	.case-link {
		margin-top: 0.35rem;
		font-size: 0.85rem;
		color: var(--color-secondary);
		text-decoration: none;
		width: fit-content;
	}

	.case-link:hover {
		text-decoration: underline;
	}

	.card.featured .body {
		padding: 1.1rem 1.15rem 1.2rem;
	}

	.card.featured .title {
		font-size: 1.15rem;
	}

	.card.featured .description {
		line-clamp: 3;
		-webkit-line-clamp: 3;
	}
</style>
