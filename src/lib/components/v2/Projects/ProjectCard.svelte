<script lang="ts">
	export let item: Project;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
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
	<li style="--border-color: {color}">
		<div class="project">
			{#if ImageComponent}
				<a href={url} target="_blank">
					<img src={ImageComponent} alt={name} />
				</a>
			{/if}
			<div class="info">
				<h4>
					{name}
				</h4>
				<p class="description">{description}</p>

				<div class="links">
					<div class="link">
						<Button to={url} text="Visit site" {color} {keepTextLight}>
							<IconInternet width="1.3rem" />
						</Button>
					</div>
					<div class="link">
						<Button to={`/work/${slug}`} text="Learn more" {color} {keepTextLight}>
							<IconArrow width="1.3rem" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</li>
{/if}

<style>
	li {
		position: relative;
		list-style: none;
		width: 45%;
		border-radius: 12px;
		z-index: 100;
		z-index: auto;
	}

	h4 {
		font-size: 1.2rem;
	}
	p {
		font-size: 0.9rem;
		color: var(--color-lightgray);
	}

	.project {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* justify-content: space-between; */
		padding: 0.7rem 1.2rem;
		background-color: var(--color-gray);
		border-radius: 12px;
		gap: 2rem;
		height: 100%;
		/* border: 2px yellow solid; */
	}

	.info {
		width: 100%;
	}

	.info > * {
		margin-top: 0.5rem;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.7rem;
		gap: 2rem;
	}

	.link {
		display: flex;
		width: 100%;
	}

	a {
		border-radius: 4px;
		width: 50%;
	}

	@media (max-width: 768px) {
		.info {
			display: none;
		}

		a {
			border-radius: 4px;
			width: 100%;
		}

		li {
			width: 40%;
		}

		.project {
			padding: 0.3rem 0.7rem;
		}
	}

	@media (max-width: 1200px) {
		.description {
			display: none;
		}
	}
</style>
