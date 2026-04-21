<script lang="ts">
	import type { TeamMember } from '$lib/types/types';
	import TeamMemberCard from './TeamMemberCard.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { background, font } from '$lib/stores/store';
	import * as m from '$lib/paraglide/messages';

	interface Props {
		team: TeamMember[];
	}

	let { team }: Props = $props();

	let element: HTMLElement | null | undefined = $state();
	let intersecting = $state(false);
</script>

<section
	id="team"
	style:background-color={$background}
	style:color={$font}
	class="page-section"
	bind:this={element}>
	<div class="page-container">
		<IntersectionObserver {element} bind:intersecting once threshold={0}>
			{#if intersecting}
				<div class="content" transition:fade={{ duration: 450, easing: cubicInOut }}>
					<div class="grid">
						<div class="description">
							<h2>{m.team_title()}</h2>
						</div>
						<div class="team-cards">
							{#each team as member (member.slug)}
								<TeamMemberCard {member} />
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		width: 100%;
		color: var(--color-white);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
		padding-bottom: 2rem;
	}

	h2 {
		margin-bottom: 1rem;
		color: var(--color-primary);
	}

	.grid {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}

	.description {
		display: flex;
		align-items: center;
	}

	.team-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		align-items: stretch;
	}

	@media (min-width: 55em) {
		h2 {
			margin-bottom: 3rem;
		}

		/* Shared row heights so name/skills/bio bands line up across cards (subgrid). */
		.team-cards {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: auto auto auto;
			gap: 1rem 2rem;
			align-items: start;
		}

		.team-cards > :global(.card) {
			display: grid;
			grid-template-rows: subgrid;
			grid-row: span 3;
		}

		.team-cards > :global(.card .header) {
			margin-bottom: 0;
		}

		.team-cards > :global(.card .skills) {
			margin-bottom: 0;
		}
	}

	@media (min-width: 55em) and (max-width: 85em) {
		.team-cards {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto auto auto auto auto auto;
		}

		.team-cards > :global(.card:nth-child(1)) {
			grid-column: 1;
			grid-row: 1 / span 3;
		}

		.team-cards > :global(.card:nth-child(2)) {
			grid-column: 2;
			grid-row: 1 / span 3;
		}

		.team-cards > :global(.card:nth-child(3)) {
			grid-column: 1 / -1;
			grid-row: 4 / span 3;
		}
	}

	@media (min-width: 85em) {
		.team-cards {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: auto auto auto;
		}

		.team-cards > :global(.card:nth-child(1)),
		.team-cards > :global(.card:nth-child(2)),
		.team-cards > :global(.card:nth-child(3)) {
			grid-column: auto;
			grid-row: span 3;
		}
	}
</style>
