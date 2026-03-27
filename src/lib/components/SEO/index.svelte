<script>
	import ogSquareImageSrc from '$lib/assets/images/lz_logo_500px.png';
	import ogImageSrc from '$lib/assets/images/lz_logo_seo.jpg';
	import featuredImageSrc from '$lib/assets/images/lz_logo_seo.jpg';
	import { getWebsiteConfig } from '$lib/data/config';
	import * as m from '$lib/paraglide/messages';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';

	const website = $derived(getWebsiteConfig());


	const defaultAlt = $derived(m.seo_default_alt());

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
		caption: m.seo_home_page()
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

	const url = $derived(`${website.siteUrl}/${slug}`);
	const pageTitle = $derived(`${title ? `${title} | ${m.site_name()}` : m.site_name()}`);
	const openGraphProps = $derived({
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage: website.ogLanguage,
		pageTitle,
		siteTitle: website.siteTitle,
		url
	});
	const schemaOrgProps = $derived({
		author: website.author,
		breadcrumbs: [
			{
				name: m.home(),
				slug: ''
			}
		],
		entity,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage: website.siteLanguage,
		siteTitle: website.siteTitle,
		siteTitleAlt: website.siteShortTitle,
		siteUrl: website.siteUrl,
		title,
		url,
		githubPage: website.githubPage,
		linkedinProfile: website.linkedinProfile,
		telegramUsername: website.telegramUsername
	});
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
