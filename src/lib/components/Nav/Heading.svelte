<script lang="ts">
	export let title: string;
</script>

<h2>
	{title}
</h2>

<style>
	h2 {
		padding-top: 4rem;
		margin-bottom: 1.5rem;
		font-weight: 700;
		line-height: 1;
		margin-top: -0.25rem;
	}

	@media (min-width: 1024px) {
		h2 {
			padding-top: 0px;
			margin-bottom: 2.5rem;
		}
	}
</style>
