<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import IconArrow from '$lib/assets/svg/icons/HeroiconsArrowLongRight.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import Tag from '$components/v2/UI/Tag.svelte';
	import { getLogoComponent, getImageComponent } from '$lib/utils/getProjectVisuals';

	let item: Project = data.item;

	let {
		name,
		year,
		url,
		color,
		colorRGB,
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

{#if animate}
	<article>
		<section style={`background-color:${color};`}>
			<div class="header" style={`color:${textColor}`}>
				<div class="title">
					<p id="type">{type}</p>
					<h2>{name}</h2>
					<p>
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
						<Button to={url} text="View code" {color} {keepTextLight}>
							<IconGithub width="1.3rem" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</article>
{/if}

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		margin-top: 3rem;
		color: white;
		position: relative;
	}

	img {
		border-radius: 12px;
		width: 100%;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
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
		display: block;
	}

	.header > * + * {
		margin-top: 1rem;
	}

	.title > * + * {
		margin-top: 0.5rem;
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
		margin-top: 2rem;
	}

	@media (min-width: 50em) {
		.grid {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 3rem;
		}

		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 2rem;
		}

		.title {
			margin: auto 0;
		}

		.category {
			display: inline;
			text-transform: uppercase;
			letter-spacing: 0.7px;
			font-family: 'IBM Plex Mono', sans-serif;
			font-size: 1rem;
			font-weight: 600;
		}

		.features {
			display: block;
		}
	}
</style>
