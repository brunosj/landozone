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

<section>
	<div class="container">
		<div class="content">
			{#if $activePage === 2}
				<div class="grid">
					<div class="description" transition:fade={{ duration: 2000 }}>
						<h1>projects</h1>

						<p>Check out some of my recent projects</p>
					</div>
					<div class="projects">
						<div class="logo" style="width:50%">
							<Logo />
						</div>
						{#each projects as item}
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
	<div class="helper">
		Use dots to browse projects
		<IconArrowDown width="1.5rem" />
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

	h1 {
		color: #00cfa1;
	}

	.description > * + * {
		margin-top: 1.5rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
	}

	.description {
		margin: auto 0;
	}

	.projects {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
		z-index: 1;
		justify-content: space-between;
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

	.helper {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 600;
		gap: 1rem;
		color: var(--color-secondary);
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.projects {
			gap: 2rem;
		}

		.helper {
			bottom: 7%;
		}
	}
</style>
