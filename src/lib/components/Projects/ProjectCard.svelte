<script lang="ts">

	import type { Project } from '$lib/types/types';
	import Img from '@zerodevx/svelte-img';
	import { onMount } from 'svelte';
	import Button from '$components/UI/Button.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';
	import { getImageComponent } from '$lib/utils/getProjectVisuals';
	interface Props {
		item: Project;
		showDetails?: boolean;
	}

	let { item, showDetails = false }: Props = $props();

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

	let animate = $state(true);
	let ImageComponent: string = $state();

	onMount(() => {
		console.log('mounted');
		animate = true;
		ImageComponent = getImageComponent(slug);
	});
</script>

{#if animate}
	<li style="--border-color: {color}; width:{`${showDetails ? '100%' : '46%'}`}">
		<div
			class="project"
			style="width:{`${showDetails ? '100%' : '100%'}`}; padding:{`${
				showDetails ? '0rem' : '1rem'
			}`}">
			{#if ImageComponent}
				<div class="image-container">
					<div class="image">
						<a href={url} target="_blank">
							<img src={ImageComponent} alt={name} />
						</a>
					</div>
				</div>
			{/if}
			<div class="info">
				<div class="info-content">
					<div class="title">
						<h4>
							{name}
						</h4>
						<p class="description">{description}</p>
					</div>
					{#if showDetails}
						<div class="details">
							{#if features.length >= 1}
								<div>
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
							<div>
								<p class="category">Technologies</p>
								<ul class="feature">
									{#each technologies as item}
										<span>
											{item}
										</span>
										{#if item !== technologies[technologies.length - 1]}
											<span>
												{' - '}
											</span>
										{/if}
									{/each}
								</ul>
							</div>
						</div>
					{/if}
					<div class="links" style="width:{`${showDetails ? '100%' : '100%'}`}">
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
					</div>
				</div>
			</div>
		</div>
	</li>
{/if}

<style>
	@media (min-width: 55em) {
		li {
			position: relative;
			list-style: none;
			width: 40%;
			border-radius: 12px;
			display: flex;
			justify-content: center;
			/* margin-bottom: 3rem; */
		}

		img {
			border-radius: 4px;
			object-fit: cover;
		}

		h4 {
			font-size: 1.75rem;
		}

		p {
			font-size: 1.1rem;
			color: var(--color-lightgray);
		}

		ul span {
			font-size: 1rem;
			color: var(--color-lightgray);
		}

		.project {
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 12px;
			gap: 0.5rem;
			/* height: 100%; */
		}

		.image-container {
			background-color: var(--color-gray);
			padding: 2rem;
			border-radius: 12px;
			width: 40%;
			margin-bottom: auto;
			position: relative;
		}

		.image {
			width: 100%;
			display: flex;
			margin-left: auto;
			justify-content: center;
		}

		.info {
			width: 60%;
			padding: 2rem;
			border-radius: 12px;
			background-color: var(--color-gray);
			margin-top: 3rem;
			position: relative;
			margin-left: -2rem;
		}

		.image-container::before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 12px;
			border: 1px solid var(--border-color);
			opacity: 0.6;
			transform: translate(-0.5rem, -0.5rem);
			box-sizing: border-box;
			pointer-events: none;
		}

		.info::before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 12px;
			border: 1px solid var(--border-color);
			opacity: 0.6;
			transform: translate(-0.5rem, -0.5rem);
			box-sizing: border-box;
			pointer-events: none;
		}

		.info-content {
			width: 80%;
			margin: auto;
			position: relative;
		}

		.category {
			color: var(--color-white);
		}

		.details {
			margin: 1rem 0;
		}

		.details > * {
			margin: 2rem 0rem;
		}

		.links {
			display: flex;
			/* width: 100%; */
			flex-direction: row;
			justify-content: space-between;
			/* align-items: center; */
			gap: 4rem;
		}

		.link {
			display: flex;
			width: 30%;
		}

		.description {
			line-height: 1.2rem;
			margin-top: 0.5rem;
		}

		.description {
			display: flex;
		}
	}

	@media (max-width: 55em) {
		li,
		img {
			display: none;
		}
	}
</style>
