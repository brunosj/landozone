<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import { fade, fly } from 'svelte/transition';
	import { projects } from '$lib/data/projectsV2';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';
	import OscillatePurple from '$lib/assets/svg/oscillate-purple.svelte';

	const featuredProjects = projects.filter((project) => project.featured === true);
</script>

<section id="projects">
	<div class="svg-element">
		<OscillatePurple />
	</div>
	<div class="fullpage-container">
		<div class="content">
			{#if $activePage === 2}
				<div class="grid">
					<!-- <div class="description">
						<h2 transition:fly={{ y: 50, duration: 750, delay: 500 }}>selected works</h2>
						<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
							Here are a few of my recent works
						</p>
					</div> -->
					<div class="projects" transition:fly={{ y: 50, duration: 750, delay: 500 }}>
						{#each featuredProjects as item}
							<ProjectCard {item} />
							<ProjectCardMobile {item} />
						{/each}
					</div>
					<a class="link" href="/projects" transition:fly={{ y: 50, duration: 750, delay: 750 }}>
						<span id="underline"> see all projects </span>
						<span class="icon">
							<IconArrow width="1.3rem" />
						</span>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
		position: relative;
	}

	h2 {
		color: #00cfa1;
		line-height: 2rem;
	}

	.svg-element {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		opacity: 0.1;
	}

	.svg-bg {
		background: radial-gradient(ellipse at left, #1e1f27 10%, #14151d 90%);
		height: 100%;
		width: 100%;
		position: absolute;
	}

	.svg-bg:before,
	.svg-bg:after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: radial-gradient(ellipse at left, #1e1f27 25%, #14151d 100%),
			radial-gradient(ellipse at left, #1e1f27 0%, #14151d 75%);
		filter: blur(22px);
	}

	.svg-bg:before {
		transform: rotate(293deg);
	}

	.svg-bg:after {
		transform: rotate(251deg);
	}

	.grid {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		height: 90%;
		margin-top: 1rem;
	}

	.description {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		height: 100%;
		gap: 1.5rem;
	}

	.projects {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		gap: 1.5rem;
		z-index: 1;
		margin: auto;
	}

	.link {
		display: flex;
		margin-left: auto;
		gap: 0.2rem;
		margin-top: 1rem;
	}

	.link .icon {
		transform: translateY(0.1rem);
	}

	.link:hover .icon {
		transform: translateY(-0.1rem);
		transform: translateX(0.1rem);
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	#underline {
		font-size: 0.9rem;
		position: relative;
		z-index: 20;
	}

	#underline:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 10%;
		z-index: -1;
		height: 30%;
		width: 102%;
		left: -1%;
		opacity: 0.5;
		border-radius: 2px;
		background: linear-gradient(
			65deg,
			var(--color-secondary) 0%,
			var(--color-secondary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	#underline:hover:after {
		height: 80%;
	}

	@media (min-width: 50em) {
		.projects {
			gap: 3rem;
		}

		.link {
			margin-top: 3rem;
		}

		#underline {
			font-size: 1.1rem;
		}
	}
</style>
