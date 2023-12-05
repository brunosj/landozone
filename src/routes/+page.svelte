<script lang="ts">
	import Landing from '$components/Landing/Landing.svelte';
	import About from '$components/About/About.svelte';
	import Work from '$components/Projects/Projects.svelte';
	import Contact from '$components/Contact/Contact.svelte';
	import { projects } from '$lib/data/projectsV2';
	import type { Project } from '$lib/types/types';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = '';
	let metadescription = 'landozone - crafting innovative applications and experiences on the web';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: '',
		datePublished: '2023-12-05T14:19:33.000+0100',
		lastUpdated: '2021-12-05T14:19:33.000+0100'
	};
</script>

<SEO {...seoProps} />
<Landing />
<About />
<Work />
<Contact />
