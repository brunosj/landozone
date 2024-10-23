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


	const defaultAlt =
		'logo of the website, a stylized paranthesis and the beginning of a closing tag (less than sign)';

	/**
	 * @typedef {Object} Props
	 * @property {any} [entityMeta]
	 * @property {string} [metadescription]
	 * @property {any} slug
	 * @property {any} title
	 * @property {any} [entity]
	 * @property {any} [featuredImage]
	 * @property {any} [ogImage]
	 * @property {any} [ogSquareImage]
	 */

	/** @type {Props} */
	let {
		entityMeta = null,
		metadescription = '',
		slug,
		title,
		entity = {},
		featuredImage = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	},
		ogImage = {
		url: ogImageSrc,
		alt: defaultAlt
	},
		ogSquareImage = {
		url: ogSquareImageSrc,
		alt: defaultAlt
	}
	} = $props();

	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${title ? `${title} | landozone` : 'landozone'}`;
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
		entity,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title,
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
