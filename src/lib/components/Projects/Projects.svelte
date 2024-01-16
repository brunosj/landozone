<script lang="ts">
	export let projects: Project[];

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import ArrowLink from '$components/UI/ArrowLink.svelte';

	let element;
	let intersecting = false;

	const featuredProjects = projects.filter((project) => project.featured === true);
</script>

<section id="projects" style:color={`var(--color-white)`} class="page-section" bind:this={element}>
	<div class="page-container">
		<div class="content">
			<IntersectionObserver {element} bind:intersecting once threshold={0}>
				{#if intersecting}
					<div class="grid">
						<div class="description">
							<h2 transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>
								recent projects
							</h2>
						</div>
						<ul
							class="projects"
							transition:fly={{ y: 75, duration: 500, delay: 250, easing: cubicInOut }}>
							{#each featuredProjects as item}
								<ProjectCard {item} showDetails={true} />
								<ProjectCardMobile {item} />
							{/each}
						</ul>
						<span class="projects-link">
							<ArrowLink path="/projects">see all projects</ArrowLink>
						</span>
					</div>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
</section>

<style>
	section {
		/* background-color: var(--color-black); */
		width: 100%;
		height: 100%;
		color: var(--color-white);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
	}

	h2 {
		margin-bottom: 1rem;
	}

	ul {
		margin: 0;
	}

	.projects-link {
		margin-left: auto;
	}

	.grid {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}

	.description {
		display: flex;
		align-items: center;
	}

	.projects {
		position: relative;
		gap: 1rem;
		z-index: 1;
		margin: auto;
	}

	@media (min-width: 55em) {
		h2 {
			margin-bottom: 3rem;
		}

		.projects {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
		}

		.projects {
			gap: 3rem;
		}

		.projects-link {
			margin-top: 1rem;
		}
	}
</style>
