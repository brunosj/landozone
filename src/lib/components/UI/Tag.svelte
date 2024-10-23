<script lang="ts">
	interface Props {
		keepTextLight?: boolean;
		children?: import('svelte').Snippet;
	}

	let { keepTextLight = false, children }: Props = $props();
</script>

<li class:textLight={keepTextLight}>
	<span>
		{@render children?.()}
	</span>
</li>

<style>
	li {
		display: inline;
		transition: all 0.3s ease-in-out;
	}

	li:not(.textLight) span {
		border: solid 1px var(--color-black);
	}

	span {
		position: relative;
		width: 100%;
		height: 1.5rem;
		padding: 0.2rem 0.4rem;
		font-size: 0.8rem;
		border-radius: 8px;
		z-index: 20;
		transition: all 0.3s ease-in-out;
		/* font-family: 'IBM Plex Mono', sans-serif; */
	}

	.textLight {
		color: var(--color-white);
		border: solid 1px var(--color-white);
		border-radius: 8px;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 55em) {
		span {
			padding: 0.2rem 0.6rem;
		}
	}
</style>
