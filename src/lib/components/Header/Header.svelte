<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import LogoFull from '$lib/assets/svg/logos/lz-logo.svelte';
	import Logo from '$lib/assets/svg/logos/logo.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
</script>

<header>
	<nav class="page-container">
		<div class="logo">
			<a href="/">
				<div class="logo-shape">
					<Logo />
				</div>
			</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: relative;
		z-index: 50;
	}

	nav {
		display: flex;
		margin: 2rem auto;
	}

	.active-page {
		text-align: right;
	}

	.logo-full {
		width: 8rem;
	}

	.logo-shape {
		width: 1.5rem;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 1rem;
		font-weight: 700;
		font-family: 'Sora Variable', sans-serif;
	}

	@media (min-width: 50em) {
		span {
			font-size: 1.7rem;
		}

		.logo-full {
			width: 11rem;
		}

		.logo-shape {
			width: 2rem;
		}
	}
</style>
