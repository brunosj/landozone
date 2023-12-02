<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$components/UI/Button.svelte';
	import IconArrow from '$lib/assets/svg/icons/HeroiconsArrowLongRight.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import Tag from '$components/UI/Tag.svelte';
	import { getLogoComponent, getImageComponent } from '$lib/utils/getProjectVisuals';
	import Seo from '$components/SEO/SEO.svelte';

	let item: Project = data.item;

	let {
		name,
		date,
		url,
		color,
		colorRGB,
		longDescription,
		keepTextLight,
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

	let textColor = keepTextLight ? '#fff' : '#202129';
</script>

<Seo title={`landozone | ${name}`} {description} />

{#if animate}
	<article>
		<section style={`background-color:${color};`}>
			<div class="header" style={`color:${textColor}`}>
				<div class="title">
					<p id="type">{type}</p>
					<h2>{name}</h2>
					<p class="description">
						{description}
					</p>
				</div>
				<div class="details">
					<div class="features">
						<p class="category">Features</p>
						<ul class="feature">
							{#each features as item}
								<span>
									{item}
								</span>
								{#if item !== features[features.length - 1]}
									<span>
										{' - '}
									</span>
								{/if}
							{/each}
						</ul>
					</div>
					<div class="technologies">
						<p class="category">Technologies</p>
						<ul class="technology">
							{#each technologies as item}
								<Tag {keepTextLight}>
									{item}
								</Tag>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</section>

		<div class="page-container">
			<!-- <div class="html">
				{@html longDescription}
			</div> -->
			<div class="grid">
				<div class="images">
					{#if ImageComponent}
						<img src={ImageComponent} alt={name} />
					{/if}
				</div>
				<div class="links">
					<div class="link">
						<Button to={url} text="Visit site" {color} {keepTextLight}>
							<IconInternet width="1.3rem" />
						</Button>
					</div>
					<div class="link">
						<Button to={repo} text="View code" {color} {keepTextLight}>
							<IconGithub width="1.3rem" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</article>
{/if}

<style>
	article {
		width: 100%;
		height: 100%;
		background-color: var(--color-black);
		color: white;
		position: relative;
	}

	section {
		margin-bottom: 3rem;
	}

	img {
		border-radius: 12px;
		width: 100%;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.7rem;
		column-gap: 0.7rem;
		margin: 0.5rem 0;
	}

	#type {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
	}

	.header {
		max-width: 85%;
		height: 100%;
		margin: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1.5rem 0;
	}

	.grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.header > * + * {
		margin-top: 1rem;
	}

	.title > * + * {
		margin-top: 0.5rem;
	}

	.description {
		font-size: 0.9rem;
		line-height: 1.1rem;
	}

	.features {
		display: none;
	}

	.category {
		display: none;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 100%;
	}

	.link {
		display: flex;
		width: 50%;
	}

	.images {
		display: flex;
		/* justify-content: center; */
		width: 100%;
	}

	.details > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 50em) {
		ul {
			row-gap: 0.5rem;
			column-gap: 0.7rem;
		}

		.grid {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 3rem;
			margin-bottom: 3rem;
		}

		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			padding: 2rem;
		}

		.title {
			margin: auto 0;
		}

		.description {
			font-size: 1.1rem;
			line-height: 1.8rem;
		}

		.category {
			display: inline;
			text-transform: uppercase;
			letter-spacing: 0.7px;
			font-family: 'IBM Plex Mono', sans-serif;
			font-size: 1rem;
			/* font-weight: 600; */
		}

		.features {
			display: block;
		}

		.details > * + * {
			margin-top: 2rem;
		}
	}
</style>
