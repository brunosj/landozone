<script>
	import ogSquareImageSrc from '$lib/assets/images/lz_logo_500px.png';
	import ogImageSrc from '$lib/assets/images/lz_logo_seo.jpg';
	import featuredImageSrc from '$lib/assets/images/lz_logo_seo.jpg';
	import { website } from '$lib/data/config';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';

	const {
		author,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername
	} = website;

	export let entityMeta = null;
	export let lastUpdated;
	export let metadescription = '';
	export let slug;
	export let title;
	export let datePublished = '2023-12-05';
	export let entity = {};

	const defaultAlt =
		'logo of the website, a stylized paranthesis and the beginning of a closing tag (less than sign)';

	export let featuredImage = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: ogImageSrc,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: ogSquareImageSrc,
		alt: defaultAlt
	};

	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${title}`;
	const openGraphProps = {
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	};
	const schemaOrgProps = {
		author,
		breadcrumbs: [
			{
				name: 'Home',
				slug: ''
			}
		],
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		githubPage,
		linkedinProfile,
		telegramUsername
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
