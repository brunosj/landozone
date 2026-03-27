<script lang="ts">
	import ArrowLink from '$components/UI/ArrowLink.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<div class="info">
	<div>
		<ArrowLink path="#contact">{m.get_in_touch()}</ArrowLink>
	</div>
	<div class="details">
		<p>Svelte & Node.js</p>
		<span class="category">{m.favorite_stack()}</span>
	</div>
	<div class="details">
		<p>English, German, French & Spanish</p>
		<span class="category">{m.languages()}</span>
	</div>
	<div class="details">
		<p>Berlin</p>
		<span class="category">{m.location()}</span>
	</div>
</div>

<style>
	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}

	.details {
		display: flex;
		flex-direction: column;
	}

	.details span {
		color: var(--color-lightgray);
	}

	.category {
		order: 2;
		font-size: 0.85rem;
	}

	@media (min-width: 55em) {
		.info {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.category {
			order: 1;
			font-size: 1rem;
		}
	}
</style>
