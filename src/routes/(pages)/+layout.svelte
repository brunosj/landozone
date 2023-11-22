<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/fredoka';

	import '../../reset.css';
	import '../../globals.css';

	import Logo from '$lib/assets/svg/logo.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<header>
	<nav class="page-container">
		<a class="logo" href="/">
			<div class="logo-shape">
				<Logo />
			</div>
		</a>
	</nav>
</header>
<slot />

<style>
	:global(body) {
		height: 100vh;
		margin: 0;
	}

	:global(.page-container) {
		max-width: 85%;
		height: 100%;
		margin: 3rem auto;
		position: relative;
	}

	:global(.content) {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	header {
		position: relative;
		z-index: 50;
		width: 100%;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-shape {
		width: 1.5rem;
	}

	@media (min-width: 50em) {
		.logo-shape {
			width: 2rem;
		}
	}
</style>
