<script lang="ts">
	import { website } from '$data/config';
	const { siteLanguage, siteTitle, siteDescription, siteImage, twitter } = website;
	interface Props {
		description: string;
		title: string;
		image?: any;
	}

	let { description, title, image = siteImage }: Props = $props();
</script>

<svelte:head>
	<title>{title || siteTitle}</title>
	<meta name="title" content={title || siteTitle} />
	<meta name="description" content={description || siteDescription} />
	<meta name="image" content={siteImage} />
	<meta property="og:title" content={title || siteTitle} />
	<meta property="og:description" content={description || siteDescription} />
	<meta property="og:image" content={image || siteImage} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description || siteDescription} />
	<meta name="twitter:image" content={siteImage} />
	<meta name="twitter:creator" content={twitter} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</svelte:head>
