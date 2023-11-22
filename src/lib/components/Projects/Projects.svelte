<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import { fade, fly } from 'svelte/transition';
	import { projects } from '$lib/data/projectsV2';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import ProjectCardMobile from '$components/Projects/ProjectCardMobile.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
	import Button from '$components/UI/Button.svelte';
	import IconArrow from '$lib/assets/svg/icons/HeroiconsArrowLongRight.svelte';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightArrowCircleDownRounded.svelte';
</script>

<section id="projects">
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
						{#each projects.slice(0, 4) as item}
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

	.grid {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		height: 90%;
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
		margin: 1rem 0rem;
	}

	.link {
		display: flex;
		margin-left: auto;
		gap: 0.2rem;
		margin-top: 1.5rem;
	}

	.link:hover .icon {
		transform: translateX(0.2rem);
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
		width: 104%;
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
