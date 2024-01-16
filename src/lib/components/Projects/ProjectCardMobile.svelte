<script lang="ts">
	export let item: Project;
	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$components/UI/Button.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import Tag from '$components/UI/Tag.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsLightArrowCircleDownRounded.svelte';

	import { getImageComponent } from '$lib/utils/getProjectVisuals';

	let {
		name,
		date,
		url,
		color,
		keepTextLight,
		slug,
		repo,
		type,
		image,
		description,
		technologies,
		features
	} = item;
	let animate = false;

	let LogoComponent: any;
	let ImageComponent: string;

	onMount(() => {
		animate = true;
		ImageComponent = getImageComponent(slug);
	});
</script>

{#if animate}
	<li style="--border-color: {color}; ">
		<a href={`/projects/${slug}`}>
			<div class="project">
				{#if ImageComponent}
					<img src={ImageComponent} alt={name} />
				{/if}
				<div class="info">
					<div class="title">
						<h4>
							{name}
						</h4>
						<p class="description">{description}</p>
					</div>
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
		z-index: 100;
		z-index: auto;
		margin-bottom: 1rem;
	}

	li:last-child {
		margin-bottom: 0;
	}

	h4 {
		font-size: 1.2rem;
		line-height: 1.2rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.8rem;
		line-height: 1rem;
		color: var(--color-lightgray);
	}

	a {
		width: 100%;
	}

	img {
		border-radius: 4px;
	}

	.project {
		display: grid;
		grid-template-columns: 1fr 2fr;
		/* flex-direction: row; */
		align-items: center;
		background-color: var(--color-gray);
		border-radius: 12px;
		gap: 1rem;
		height: 100%;
		padding: 1rem 0.5rem 1rem 0.5rem;
	}

	@media (min-width: 50em) {
		li,
		img {
			display: none;
		}
	}
</style>
