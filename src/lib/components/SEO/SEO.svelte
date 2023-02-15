<script lang="ts">
	import { website } from '$data/config';

	const { siteLanguage, siteTitle } = website;

	export let description: string;
	export let title: string;

	const pageTitle = `${siteTitle} ${title}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<html lang={siteLanguage} />
</svelte:head>
