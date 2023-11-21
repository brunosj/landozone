<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Header from '$components/v2/Header/Header.svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import IconArrow from '$lib/assets/svg/icons/HeroiconsArrowLongRight.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import { getLogoComponent, getImageComponent } from '$lib/utils/getProjectVisuals';

	let item: Project = data.item;

	let {
		name,
		year,
		url,
		color,
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
</script>

{#if animate}
	<section>
		<div class="page">
			<div class="info">
				<div>
					<p id="type">{type}</p>
					<h4 style={`color:${color}`}>{name}</h4>
				</div>
				<div class="description">
					<p>
						{description}
					</p>
					<p>
						<span class="category"> Technologies: </span>
						{#each technologies as item}
							<span>
								{item}{#if item !== technologies[technologies.length - 1]},
								{/if}
							</span>
						{/each}
					</p>
					<p class="desktop">
						<span class="category"> Features: </span>
						{#each features as item}
							<span>
								{item}{#if item !== features[features.length - 1]},
								{/if}
							</span>
						{/each}
					</p>
				</div>

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
		</div>
	</section>
{/if}

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
		position: relative;
	}

	.page {
		max-width: 85%;
		height: 100%;
		margin: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h4 {
		font-weight: 500;
	}

	p {
		font-size: 1rem;
	}

	img {
		border-radius: 12px;
		width: 100%;
	}

	#type {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
		margin-bottom: 0.3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 3rem;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.info > * + * {
		margin-top: 1.2rem;
	}

	.description > * + * {
		margin-top: 0.2rem;
	}

	.description {
		margin: auto 0;
	}

	.category {
		font-weight: 500;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		margin: auto 0;
		gap: 2rem;
	}

	.link {
		display: flex;
		width: 100%;
	}

	.images {
		display: flex;
		/* justify-content: center; */
		width: 100%;
	}

	.desktop {
		display: block;
	}

	@media (max-width: 768px) and (max-height: 667px) {
		section {
			padding: 1rem 1.5rem;
			height: 90%;
		}

		h4 {
			font-size: 1.5rem;
		}

		p {
			font-size: 0.8rem;
		}

		#type {
			display: none;
		}

		.grid {
			display: block;
		}

		.description {
			margin: auto 0;
		}

		.info {
			height: 100%;
		}

		.links {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
			margin: auto 0;
			gap: 1rem;
		}

		.link {
			width: 100%;
		}

		.images {
			display: none;
		}

		.desktop {
			display: none;
		}
	}

	@media (max-width: 768px) and (max-height: 926px) {
		section {
			padding: 1rem 1.5rem;
			height: 100%;
		}

		.desktop {
			display: none;
		}
	}
</style>
