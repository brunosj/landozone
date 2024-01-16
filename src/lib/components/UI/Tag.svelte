<script lang="ts">
	export let keepTextLight = false;

	let textColor = keepTextLight ? '#fff' : '#202129';
</script>

<li style="--color: {textColor};  ">
	<span>
		<slot />
	</span>
</li>

<style>
	li {
		display: inline;
	}

	span {
		position: relative;
		width: 100%;
		height: 1.5rem;
		padding: 0.2rem 0.4rem;
		border-radius: 8px;
		border: solid 1px var(--color);
		font-size: 0.8rem;
		color: var(--color);
		z-index: 20;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 55em) {
		span {
			padding: 0.2rem 0.6rem;
		}
	}
</style>
