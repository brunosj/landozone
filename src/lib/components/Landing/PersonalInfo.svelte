<script lang="ts">
	import ArrowLink from '$components/UI/ArrowLink.svelte';
</script>

<div class="info">
	<div>
		<ArrowLink path="#contact">Get in touch</ArrowLink>
	</div>
	<div class="details">
		<p>Svelte & Node.js</p>
		<span class="category">Favorite Stack</span>
	</div>
	<div class="details">
		<p>English, German, French & Spanish</p>
		<span class="category">Languages</span>
	</div>
	<div class="details">
		<p>Berlin</p>
		<span class="category">Location</span>
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

	@media (min-width: 50em) {
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
