<script lang="ts">
	import type { Project } from '$lib/types/types';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectIndexCard from '$components/Projects/ProjectIndexCard.svelte';
	import ProjectsIndexToolbar from '$components/Projects/ProjectsIndexToolbar.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import {
		filterProjects,
		filtersAreDefault,
		uniqueTypesForFilter,
		uniqueYearsDescending
	} from '$lib/utils/projectIndexFilters';
	import * as m from '$lib/paraglide/messages';

	/** Same as Team section: one fade on `.content` (450ms, cubicInOut). */
	const SECTION_FADE = { duration: 450, easing: cubicInOut };

	let { data } = $props();

	let title = m.projects();
	let metadescription = m.projects_meta();
	const breadcrumbs = [
		{ name: m.home(), slug: '' },
		{ name: m.projects(), slug: 'projects' }
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'projects'
	};

	let projects: Project[] = $derived(data.projects);

	let projectsSorted: Project[] = $derived(
		[...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	);

	let searchInput = $state('');
	let searchDebounced = $state('');
	$effect(() => {
		const v = searchInput;
		const id = setTimeout(() => {
			searchDebounced = v;
		}, 250);
		return () => clearTimeout(id);
	});

	let selectedTypeKey = $state<string | null>(null);
	let selectedYear = $state<number | null>(null);

	let typeOptions = $derived(uniqueTypesForFilter(projectsSorted));
	let yearOptions = $derived(uniqueYearsDescending(projectsSorted));

	let filtered = $derived(
		filterProjects(projectsSorted, {
			search: searchDebounced,
			typeKey: selectedTypeKey,
			year: selectedYear
		})
	);

	let hasActiveFilters = $derived(
		!filtersAreDefault({
			search: searchDebounced,
			typeKey: selectedTypeKey,
			year: selectedYear
		})
	);

	let element: HTMLElement | null | undefined = $state();
	let intersecting = $state(false);
</script>

<SEO {...seoProps} />
<section bind:this={element}>
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container">
		<IntersectionObserver {element} bind:intersecting once threshold={0}>
			{#if intersecting}
				<div class="content" transition:fade={SECTION_FADE}>
					<div class="description">
						<h2>{m.projects()}</h2>
						<p>
							{m.projects_meta()}
						</p>
					</div>

					<div class="toolbar-wrap">
						<ProjectsIndexToolbar
							bind:searchInput
							bind:selectedTypeKey
							bind:selectedYear
							{typeOptions}
							years={yearOptions}
							filteredCount={filtered.length}
							totalCount={projectsSorted.length}
							{hasActiveFilters} />
					</div>

					{#if filtered.length === 0}
						<div class="results-wrap">
							<div class="empty">
								<p>{m.projects_no_results()}</p>
								<button
									type="button"
									class="empty-clear"
									onclick={() => {
										searchInput = '';
										selectedTypeKey = null;
										selectedYear = null;
									}}>
									{m.projects_clear_filters()}
								</button>
							</div>
						</div>
					{:else}
						<div class="results-wrap">
							<ul class="grid">
								{#each filtered as item (item.slug)}
									<li>
										<ProjectIndexCard {item} variant="compact" />
									</li>
								{/each}
							</ul>
						</div>
					{/if}
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
		margin-bottom: 2rem;
	}

	.description > * + * {
		margin-top: 0.5rem;
	}

	.toolbar-wrap,
	.results-wrap {
		width: 100%;
	}

	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.15rem;
		width: 100%;
	}

	.grid > li {
		min-width: 0;
	}

	.empty {
		padding: 2rem 0;
		text-align: center;
		color: var(--color-lightgray);
	}

	.empty p {
		margin: 0 0 1rem;
	}

	.empty-clear {
		font: inherit;
		font-size: 0.9rem;
		padding: 0.45rem 0.85rem;
		border-radius: 6px;
		border: 1px solid var(--color-secondary);
		background: transparent;
		color: var(--color-secondary);
		cursor: pointer;
	}

	.empty-clear:hover {
		background: color-mix(in srgb, var(--color-secondary) 15%, transparent);
	}

	@media (min-width: 55em) {
		section {
			margin-top: 7rem;
		}

		.svg-bg {
			width: 100%;
			top: -35%;
		}

		.description {
			margin-bottom: 2.5rem;
		}

		.description > * + * {
			margin-top: 1rem;
		}
	}
</style>
