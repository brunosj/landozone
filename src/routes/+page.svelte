<script lang="ts">
	import Landing from '$components/Landing/Landing.svelte';
	import About from '$components/About/About.svelte';
	import Work from '$components/Projects/Projects.svelte';
	import Contact from '$components/Contact/Contact.svelte';
	import { projects } from '$lib/data/projectsV2';
	import type { Project } from '$lib/types/types';
	import Seo from '$components/SEO/SEO.svelte';

	let projectPairs: Project[][] = [];

	for (let i = 0; i < projects.length; i += 2) {
		projectPairs.push(projects.slice(i, i + 2));
	}
</script>

<Seo title="landozone" description="imaginative web development, based in Berlin" />

<Landing />
<About />
<Work />
<Contact />
