<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Button from '$components/UI/Button.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import Tag from '$components/UI/Tag.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	let item: Project = data.meta;

	let {
		name,
		date,
		url,
		color,
		image,
		colorRGB,
		keepTextLight,
		repo,
		type,
		description,
		technologies,
		features
	} = item;

	let textColor = keepTextLight ? '#fff' : '#202129';

	let element;
	let intersecting = false;
</script>

<Seo title={`landozone | ${name}`} {description} />

<article>
	<section style={`background-color:${color};`} bind:this={element}>
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			{#if intersecting}
				<div class="header" style={`color:${textColor}`}>
					<div class="title" transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>
						<p id="type">{type}</p>
						<h2>{name}</h2>
						<p class="description">
							{description}
						</p>
					</div>
					<div class="details" transition:fade={{ duration: 500, delay: 250, easing: cubicInOut }}>
						{#if features.length > 0}
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
						{/if}
						{#if technologies.length > 0}
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
						{/if}
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</section>

	<div class="page-container">
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
		<div class="markdown">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		background-color: var(--color-black);
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
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		height: 100%;
		margin: 3rem auto;
		width: 100%;
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
		.links {
			width: 75%;
		}

		.link {
			width: 40%;
		}
	}

	@media (min-width: 60em) {
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

		.links {
			width: 60%;
		}

		.link {
			width: 30%;
		}
	}
</style>
