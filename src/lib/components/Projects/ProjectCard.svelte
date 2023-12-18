<script lang="ts">
	export let item: Project;
	export let showDetails = false;

	import type { Project } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Button from '$components/UI/Button.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';

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

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<li style="--border-color: {color}; width:{`${showDetails ? '100%' : '46%'}`}">
		<div
			class="project"
			style="width:{`${showDetails ? '80%' : '100%'}`}; padding:{`${
				showDetails ? '2rem' : '1rem'
			}`}">
			<a href={url} target="_blank">
				<img src={`./${image}`} alt={name} />
			</a>
			<div class="info">
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
				<div class="links" style="width:{`${showDetails ? '60%' : '100%'}`}">
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
	</li>
{/if}

<style>
	@media (min-width: 50em) {
		li {
			position: relative;
			list-style: none;
			width: 40%;
			border-radius: 12px;
			display: flex;
			justify-content: center;
		}

		a {
			width: 50%;
		}

		img {
			border-radius: 4px;
		}

		h4 {
			font-size: 1.5rem;
		}

		p {
			font-size: 0.9rem;
			color: var(--color-lightgray);
		}

		ul span {
			font-size: 0.9rem;
			color: var(--color-lightgray);
		}

		.project {
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: var(--color-gray);
			border-radius: 12px;
			gap: 2rem;
			/* height: 100%; */
			width: 80%;
		}

		.info {
			display: block;
			width: 100%;
		}

		.category {
			color: var(--color-white);
		}

		.details {
			margin: 1rem 0;
		}

		.details > * + * {
			margin-top: 1rem;
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

		.description {
			line-height: 1.2rem;
			margin-top: 0.5rem;
		}

		.description {
			display: flex;
		}
	}

	@media (max-width: 50em) {
		li,
		img {
			display: none;
		}
	}
</style>
