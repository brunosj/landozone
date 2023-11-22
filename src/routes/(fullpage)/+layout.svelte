<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/fredoka';

	import '../../reset.css';
	import '../../globals.css';

	import Header from '$components/v2/Header/Header.svelte';
</script>

<Header />
<slot />

<style>
	:global(body) {
		height: 100vh;
		margin: 0;
	}

	:global(.fullpage-container) {
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
</style>
