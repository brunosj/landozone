<script lang="ts">
	export let path: string;

	import IconArrow from '$lib/assets/svg/icons/MaterialSymbolsArrowOutwardRounded.svelte';
</script>

<a class="arrowLink" href={path}>
	<span id="arrowUnderline">
		<slot />
	</span>
	<span class="arrowIcon">
		<IconArrow width="1.3rem" />
	</span>
</a>

<style>
	.arrowLink {
		display: flex;
		margin-left: auto;
		gap: 0.2rem;
	}

	.arrowLink .arrowIcon {
		transform: translateY(0.1rem);
	}

	.arrowLink:hover .arrowIcon {
		transform: translateY(-0.1rem);
		transform: translateX(0.1rem);
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	#arrowUnderline {
		font-size: 1rem;
		position: relative;
		z-index: 20;
	}

	#arrowUnderline:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 10%;
		z-index: -1;
		height: 30%;
		width: 102%;
		left: -1%;
		opacity: 0.5;
		border-radius: 2px;
		background: linear-gradient(
			65deg,
			var(--color-secondary) 0%,
			var(--color-secondary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	#arrowUnderline:hover:after {
		height: 80%;
	}

	@media (min-width: 55em) {
		#arrowUnderline {
			font-size: 1.1rem;
		}
	}
</style>
