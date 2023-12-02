<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { projects } from '$lib/data/projectsV2';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';
	import { background, font } from '$lib/stores/store';

	const featuredProjects = projects.filter((project) => project.featured === true);
</script>

<section
	id="projects"
	style:background-color={`var(--color-black)`}
	style:color={`var(--color-white)`}
	class="fullpage-section">
	<div class="page-container">
		<div class="content">
			<div class="grid">
				<div class="description">
					<h2>projects</h2>
					<p>Here are a few of my recent works</p>
				</div>
				<div class="projects">
					{#each featuredProjects as item}
						<ProjectCard {item} />
						<ProjectCardMobile {item} />
					{/each}
				</div>
				<a class="link" href="/projects">
					<span id="underline"> see all projects </span>
					<span class="icon">
						<IconArrow width="1.3rem" />
					</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		/* background-color: var(--color-black); */
		width: 100%;
		height: 100%;
		color: white;
		position: relative;
		transition: background-color 1s ease;
		margin-top: 1.5rem;
	}

	.grid {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}

	.description {
		margin-bottom: 1.5rem;
	}

	.description > * + * {
		margin-top: 1rem;
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
		section {
			margin-top: 3rem;
		}

		.description {
			margin-bottom: 3rem;
		}

		.description > * + * {
			margin-top: 1.5rem;
		}

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
