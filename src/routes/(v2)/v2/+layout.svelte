<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/fredoka';

	import '../../../reset.css';
	import '../../../globals.css';

	import { get } from 'svelte/store';
	import Header from '$components/v2/Header/Header.svelte';
</script>

<Header />
<slot />
