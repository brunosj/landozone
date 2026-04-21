<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	interface TypeOption {
		key: string;
		label: string;
	}

	interface Props {
		searchInput: string;
		typeOptions: TypeOption[];
		years: number[];
		selectedTypeKey: string | null;
		selectedYear: number | null;
		filteredCount: number;
		totalCount: number;
		hasActiveFilters: boolean;
	}

	let {
		searchInput = $bindable(''),
		typeOptions,
		years,
		selectedTypeKey = $bindable(null),
		selectedYear = $bindable(null),
		filteredCount,
		totalCount,
		hasActiveFilters
	}: Props = $props();

	function clearType() {
		selectedTypeKey = null;
	}

	function clearYear() {
		selectedYear = null;
	}

	function selectType(key: string) {
		selectedTypeKey = selectedTypeKey === key ? null : key;
	}

	function selectYear(y: number) {
		selectedYear = selectedYear === y ? null : y;
	}

	function clearAll() {
		searchInput = '';
		selectedTypeKey = null;
		selectedYear = null;
	}
</script>

<div class="toolbar" role="region" aria-label={m.projects_toolbar_aria()}>
	<div class="row search-row">
		<label class="sr-only" for="projects-search">{m.projects_search_placeholder()}</label>
		<input
			id="projects-search"
			type="search"
			autocomplete="off"
			placeholder={m.projects_search_placeholder()}
			bind:value={searchInput} />
	</div>

	<div class="row chips-row">
		<span class="label">{m.projects_filter_type()}</span>
		<div class="chips" role="group" aria-label={m.projects_filter_type()}>
			<button
				type="button"
				class="chip"
				aria-pressed={selectedTypeKey === null}
				onclick={clearType}>
				{m.projects_filter_all()}
			</button>
			{#each typeOptions as opt (opt.key)}
				<button
					type="button"
					class="chip"
					aria-pressed={selectedTypeKey === opt.key}
					onclick={() => selectType(opt.key)}>
					{opt.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="row chips-row">
		<span class="label">{m.projects_filter_year()}</span>
		<div class="chips" role="group" aria-label={m.projects_filter_year()}>
			<button type="button" class="chip" aria-pressed={selectedYear === null} onclick={clearYear}>
				{m.projects_filter_all()}
			</button>
			{#each years as y (y)}
				<button
					type="button"
					class="chip"
					aria-pressed={selectedYear === y}
					onclick={() => selectYear(y)}>
					{y}
				</button>
			{/each}
		</div>
	</div>

	<div class="row meta-row" aria-live="polite">
		<p class="count">
			{m.projects_result_count({ count: String(filteredCount), total: String(totalCount) })}
		</p>
		{#if hasActiveFilters}
			<button type="button" class="clear" onclick={clearAll}>{m.projects_clear_filters()}</button>
		{/if}
	</div>
</div>

<style>
	.toolbar {
		/* position: sticky; */
		top: 3.5rem;
		z-index: 40;
		margin: 0 -0.5rem 1.5rem;
		padding: 1rem 0.75rem 1.1rem;
		background: color-mix(in srgb, var(--color-black) 92%, transparent);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 8px;
	}

	.row + .row {
		margin-top: 0.85rem;
	}

	.search-row input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.55rem 0.75rem;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: var(--color-gray);
		color: var(--color-white);
		font-family: inherit;
		font-size: 0.95rem;
	}

	.search-row input::placeholder {
		color: var(--color-lightgray);
		opacity: 0.8;
	}

	.search-row input:focus {
		outline: 2px solid var(--color-secondary);
		outline-offset: 1px;
	}

	.chips-row {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.label {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-lightgray);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.chip {
		font: inherit;
		font-size: 0.82rem;
		padding: 0.35rem 0.65rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: transparent;
		color: var(--color-lightgray);
		cursor: pointer;
		transition:
			background 0.15s ease,
			color 0.15s ease,
			border-color 0.15s ease;
	}

	.chip[aria-pressed='true'] {
		background: color-mix(in srgb, var(--color-secondary) 35%, transparent);
		border-color: var(--color-secondary);
		color: var(--color-white);
	}

	.chip:hover {
		border-color: var(--color-secondary);
		color: var(--color-white);
	}

	.meta-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.count {
		margin: 0;
		font-size: 0.88rem;
		color: var(--color-lightgray);
	}

	.clear {
		font: inherit;
		font-size: 0.85rem;
		padding: 0.35rem 0.65rem;
		border-radius: 6px;
		border: 1px solid var(--color-secondary);
		background: transparent;
		color: var(--color-secondary);
		cursor: pointer;
	}

	.clear:hover {
		background: color-mix(in srgb, var(--color-secondary) 15%, transparent);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (min-width: 55em) {
		.toolbar {
			margin: 0 0 2rem;
			padding: 1.1rem 1rem 1.2rem;
		}

		.chips-row {
			flex-direction: row;
			align-items: flex-start;
			gap: 1rem;
		}

		.chips-row .label {
			min-width: 4rem;
			padding-top: 0.35rem;
		}

		.chips {
			flex: 1;
		}
	}
</style>
