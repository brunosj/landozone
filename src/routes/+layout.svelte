<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/fredoka';
	import '../styles/reset.css';
	import '../styles/one-dark-theme.css';
	import '../styles/globals.css';

	import Header from '$components/Header/Header.svelte';
	import MouseTracker from '$components/MouseTracker/MouseTracker.svelte';
</script>

<!-- <MouseTracker /> -->
<main class="content">
	<Header />
	<slot />
</main>

<style>
	.content {
		width: 100%;
		order: -9999;
		z-index: 10;
		position: relative;
	}

	:global(body) {
		min-height: 100vh;
	}

	:global(.page-section) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0rem 0;
	}

	:global(.page-container) {
		max-width: 85%;
		height: 100%;
		margin: 2rem auto;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	:global(.content) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0rem auto;
	}

	@media (min-width: 55em) {
		:global(.content) {
			height: 100%;
			width: 90%;
		}

		:global(.page-section) {
			min-height: 75vh;
		}

		:global(.page-container) {
			margin: 2rem auto;
		}
	}

	@media (min-width: 100em) {
		:global(.page-section) {
			min-height: 60vh;
		}
	}
</style>
