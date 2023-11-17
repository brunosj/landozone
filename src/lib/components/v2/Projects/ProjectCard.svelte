<script lang="ts">
	export let item: Project;

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	import { getLogoComponent, getImageComponent } from '$lib/utils/getProjectVisuals';

	let { name, year, url, color, repo, type, image, description, technologies, features } = item;
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
		<!-- <h1>{name}</h1> -->
		{#if ImageComponent}
			<img src={ImageComponent} alt={name} />
		{/if}
	</li>
{/if}

<style>
	li {
		position: relative;
		list-style: none;
		width: 40%;
		/* background-color: var(--color-gray); */
		/* padding: 1rem; */
		border-radius: 0.4rem;
		z-index: 100;
		z-index: auto;
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
		border-radius: 0.4rem;
		border: 2px solid var(--border-color);
		opacity: 0.5;
		transform: translate(0.7rem, -0.7rem);
		box-sizing: border-box;
	} */

	img {
		border-radius: 0.5rem;
	}
</style>
