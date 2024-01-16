<script lang="ts">
	export let data;

	import { PUBLIC_SITE_URL } from '$env/static/public';

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
		slug,
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
	let ImageComponent: string;
</script>

<Seo title={`landozone | ${name}`} {description} image={`${PUBLIC_SITE_URL}/${image}`} />

<article bind:this={element}>
	<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
		{#if intersecting}
			<section style={`background-color:${color};`}>
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
			</section>

			<section class="page-container">
				<div class="links" transition:fade={{ duration: 500, delay: 500, easing: cubicInOut }}>
					<div class="link">
						<Button to={url} text="Visit site" {color} {keepTextLight}>
							<IconInternet width="1.3rem" />
						</Button>
					</div>

					{#if repo !== null}
						<div class="link">
							<Button to={repo} text="View code" {color} {keepTextLight}>
								<IconGithub width="1.3rem" />
							</Button>
						</div>
					{/if}
				</div>
				<div class="markdown" transition:fade={{ duration: 500, delay: 500, easing: cubicInOut }}>
					<svelte:component this={data.content} />
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
		margin-top: 3rem;
		margin-bottom: 2rem;
	}

	section {
		margin: auto;
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

	.details > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 55em) {
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

		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			padding: 2rem;
			width: 75%;
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
