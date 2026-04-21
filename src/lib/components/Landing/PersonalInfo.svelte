<script lang="ts">
	import ArrowLink from '$components/UI/ArrowLink.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<div class="info">
	<div class="cta">
		<ArrowLink path="#contact">{m.get_in_touch()}</ArrowLink>
	</div>
	<div class="details">
		<div class="value-wrap">
			<p>{m.hero_focus_value()}</p>
		</div>
		<span class="category">{m.favorite_stack()}</span>
	</div>
	<div class="details">
		<div class="value-wrap">
			<p>{m.languages_list()}</p>
		</div>
		<span class="category">{m.languages()}</span>
	</div>
	<div class="details">
		<div class="value-wrap">
			<p>Berlin</p>
		</div>
		<span class="category">{m.location()}</span>
	</div>
</div>

<style>
	p {
		font-size: 1rem;
		line-height: 1.2;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		width: 100%;
	}

	.cta {
		flex-shrink: 0;
	}

	.details {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.value-wrap {
		display: block;
	}

	.details span {
		color: var(--color-lightgray);
	}

	.category {
		font-size: 0.85rem;
	}

	@media (min-width: 55em) {
		.info {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: stretch;
			justify-content: space-between;
			gap: clamp(0.75rem, 2vw, 1.5rem);
			width: 100%;
		}

		.cta {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex: 0 0 auto;
			min-width: 0;
		}

		.details {
			display: flex;
			flex-direction: column;
			flex: 0 1 auto;
			min-width: 0;
			min-height: 0;
			max-width: fit-content;
		}

		.value-wrap {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			min-height: 0;
		}

		.value-wrap p {
			margin: 0;
		}

		.category {
			flex-shrink: 0;
			margin-top: 0.4rem;
			font-size: 1rem;
		}
	}
</style>
