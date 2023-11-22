<script lang="ts">
	export let item: Project;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import Tag from '$components/v2/UI/Tag.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsLightArrowCircleDownRounded.svelte';

	import { getLogoComponent, getImageComponent } from '$lib/utils/getProjectVisuals';

	let {
		name,
		year,
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
		LogoComponent = getLogoComponent(name);
		ImageComponent = getImageComponent(name);
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

					<!-- <div class="links">
					<div class="link">
						<Button to={url} text="Visit site" {color} {keepTextLight}>
							<IconInternet width="1.3rem" />
						</Button>
					</div>
					<div class="link">
						<Button to={`/projects/${slug}`} text="Learn more" {color} {keepTextLight}>
							<IconArrow width="1.3rem" />
						</Button>
					</div>
				</div> -->
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
		border-radius: 4px;
		width: 100%;
	}

	/* 
	img {
		width: 30%;
	} */

	.project {
		display: grid;
		grid-template-columns: 1fr 2fr;
		/* flex-direction: row; */
		align-items: center;
		background-color: var(--color-gray);
		border-radius: 12px;
		padding: 0.5rem;
		gap: 1rem;
		height: 100%;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;
		gap: 4rem;
	}

	.link {
		display: flex;
		width: 100%;
	}

	@media (min-width: 50em) {
		li,
		img {
			display: none;
		}
	}
</style>
