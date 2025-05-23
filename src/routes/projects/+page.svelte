<script lang="ts">

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	let { data } = $props();

	// SEO
	let title = 'projects';
	let metadescription = 'explore my recent works and the technologies I used to build them';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Projects',
			slug: 'projects'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact'
	};

	// Logic
	let projects: Project[] = data.projects;

	let projectsByDate: Project[] = projects.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	let element = $state();
	let intersecting = $state(false);
</script>

<SEO {...seoProps} />
<section bind:this={element}>
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container">
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			{#if intersecting}
				<div class="content">
					<div class="description">
						<h2 transition:fade={{ duration: 350, delay: 0, easing: cubicInOut }}>projects</h2>
						<p transition:fade={{ duration: 350, delay: 250, easing: cubicInOut }}>
							explore my recent works and the technologies I used to build them
						</p>
					</div>
					<div
						class="projects"
						transition:fly={{ y: 75, duration: 500, delay: 250, easing: cubicInOut }}>
						{#each projectsByDate as item}
							<ProjectCardMobile {item} />
							<ProjectCard {item} showDetails={true} />
						{/each}
						<div></div>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		color: white;
		position: relative;
		margin-top: 4rem;
	}

	h2 {
		color: var(--color-secondary);
	}

	.svg-bg {
		position: fixed;
		top: -2%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.15;
	}

	.description {
		margin-bottom: 3rem;
		/* text-align: center; */
	}

	.description > * + * {
		margin-top: 0.5rem;
	}

	.projects {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		width: 100%;
	}

	@media (min-width: 55em) {
		section {
			margin-top: 7rem;
		}

		.svg-bg {
			width: 100%;
			top: -35%;
		}

		.projects {
			gap: 2rem;
		}

		.description {
			margin-bottom: 4rem;
		}

		.description > * + * {
			margin-top: 1rem;
		}
	}
</style>
