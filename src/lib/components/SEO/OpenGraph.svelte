<script lang="ts">
	interface Props {
		image: { url: string; alt: string };
		squareImage: { url: string; alt: string };
		metadescription: string;
		ogLanguage: string;
		pageTitle: string;
		siteTitle: string;
		url: string;
	}

	let {
		image,
		squareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	}: Props = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={'website'} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metadescription} />
	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:alt" content={image.alt} />
		<meta name="twitter:image" content={image.url} />
		<meta name="twitter:image:alt" content={image.alt} />
	{/if}
	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />
		<meta property="og:image:width" content="500" />
		<meta property="og:image:height" content="500" />
		<meta property="og:image:alt" content={squareImage.alt} />
		<meta name="twitter:image" content={squareImage.url} />
		<meta name="twitter:image:alt" content={squareImage.alt} />
	{/if}
</svelte:head>
