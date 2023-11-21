<script lang="ts">
	import { projects } from '$lib/data/projectsV2';

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Header from '$components/v2/Header/Header.svelte';
	import Button from '$components/v2/UI/Button.svelte';
	import ProjectListing from '$components/v2/Projects/ProjectListing.svelte';

	let items: Project[] = projects;

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<section>
		<div class="container">
			<div class="content">
				<div class="grid">
					{#each items as item}
						<div class="grid-item">
							<ProjectListing {item} />
						</div>
					{/each}
					<div></div>
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
		position: relative;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
	}

	.grid-item {
		margin: auto;
		position: relative;
		height: 100%;
	}

	@media (max-width: 768px) {
		.grid {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 3rem;
		}
	}
</style>
