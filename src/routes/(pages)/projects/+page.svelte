<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projectsV2';
	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	let items: Project[] = projects;

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<Seo title="landozone | projects" />
{#if animate}
	<section>
		<div class="page-container">
			<div class="description">
				<h2 transition:fly={{ y: 50, duration: 750, delay: 500 }}>projects</h2>
				<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
					Here are projects I've recently worked on
				</p>
			</div>
			<div class="projects" transition:fly={{ y: 50, duration: 750, delay: 750 }}>
				{#each items as item}
					<ProjectCardMobile {item} />
					<ProjectCard {item} showDetails={true} />
				{/each}
				<div></div>
			</div>
		</div>
	</section>
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

	h2 {
		color: var(--color-secondary);
	}

	.description {
		margin-bottom: 2rem;
	}

	.description > * + * {
		margin-top: 0.5rem;
	}

	.projects {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		z-index: 1;
		margin: auto;
	}

	@media (min-width: 50em) {
		.projects {
			gap: 4rem;
		}

		.description {
			margin-bottom: 3rem;
		}

		.description > * + * {
			margin-top: 1rem;
		}
	}
</style>
