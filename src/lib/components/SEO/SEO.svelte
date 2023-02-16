<script lang="ts">
	import { website } from '$data/config';

	const { siteLanguage, siteTitle, siteDescription, siteImage, siteUrl, twitter } = website;

	export let description = siteDescription;
	export let title = siteTitle;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description || siteDescription} />
	<link rel="icon" href="/favicon.png" />
	<meta name="description" content={description || siteDescription} />
	<meta name="image" content={siteImage} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:description" content={description || siteDescription} />
	<meta property="og:image" content={siteImage} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:description" content={description || siteDescription} />
	<meta name="twitter:image" content={siteImage} />
	<meta name="twitter:creator" content={twitter} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<html lang={siteLanguage} />
</svelte:head>
