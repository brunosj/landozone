<script lang="ts">
	import Header from '$components/v2/Header/Header.svelte';

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projectsV2';
	import ProjectCard from '$components/v2/Projects/ProjectCard.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<Header sectionTitle="Work" />
	<section>
		<div class="container">
			<div class="content">
				<div class="grid">
					<div class="description">
						<h1 in:fly={{ delay: 300, y: 100, duration: 600 }}>latest stuff</h1>

						<p in:fade={{ delay: 500, duration: 600 }}>
							Check out my most recent creations questions
						</p>
					</div>
					<div class="projects">
						<div class="logo" style="width:50%">
							<Logo />
						</div>
						{#each projects as item}
							<ProjectCard {item} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
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
	}

	.logo {
		position: absolute;
		top: 50%;
		right: 10%;
		transform: translateY(-50%) translateX(-50%);
		z-index: -1;
		opacity: 0.1;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}
</style>
