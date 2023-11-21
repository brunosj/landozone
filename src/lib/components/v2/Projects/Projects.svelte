<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import { fade, fly } from 'svelte/transition';
	import { projects } from '$lib/data/projectsV2';
	import ProjectCard from '$components/v2/Projects/ProjectCard.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import IconArrow from '$lib/assets/svg/icons/HeroiconsArrowLongRight.svelte';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightArrowCircleDownRounded.svelte';
</script>

<section id="projects">
	<div class="container">
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
						<!-- <div class="logo" style="width:50%">
							<Logo />
						</div> -->
						{#each projects.slice(0, 6) as item}
							<ProjectCard {item} />
						{/each}
						<!-- <div class="link">
							<Button to={'/projects'} text="View projects">
								<IconArrow width="1.3rem" />
							</Button>
						</div> -->
					</div>
				</div>
			{/if}
		</div>
	</div>
	<!-- <div class="helper">
		Learn more about each project
		<IconArrowDown width="1.5rem" />
	</div> -->
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
		gap: 3rem;
		z-index: 1;
		justify-content: center;
		margin: auto;
		margin: 1rem 0rem;
	}

	.logo {
		position: absolute;
		top: 50%;
		right: 0%;
		transform: translateY(-50%) translateX(-50%);
		z-index: -1;
		opacity: 0.1;
	}

	.link {
		display: flex;
		width: 45%;
		margin-left: auto;
	}

	@media (max-width: 768px) {
		.projects {
			gap: 2rem;
		}
	}
</style>
