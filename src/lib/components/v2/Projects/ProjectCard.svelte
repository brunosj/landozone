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
		<a href={url} target="_blank" class="project">
			{#if ImageComponent}
				<img src={ImageComponent} alt={name} />
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
		</a>
	</li>
{/if}

<style>
	li {
		position: relative;
		list-style: none;
		width: 45%;
		/* background-color: var(--color-gray); */
		/* padding: 1rem; */
		border-radius: 6px;
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

	/* li::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		left: 0;
		top: 0;
		border-radius: 6px;
		border: 2px solid var(--border-color);
		opacity: 0.5;
		transform: translate(0.7rem, -0.7rem);
		box-sizing: border-box;
	} */

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

	img {
		border-radius: 4px;
		width: 50%;
	}

	@media (max-width: 768px) {
		.info {
			display: none;
		}

		img {
			border-radius: 4px;
			width: 100%;
		}

		li {
			width: 45%;
		}
	}

	@media (max-width: 1200px) {
		.description {
			display: none;
		}
	}
</style>
