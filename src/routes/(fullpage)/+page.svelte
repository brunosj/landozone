<script lang="ts">
	import Fullpage from '$components/v2/Fullpage/Fullpage.svelte';
	import FullpageSection from '$components/v2/Fullpage/FullpageSection.svelte';
	import Landing from '$components/v2/Landing/Landing.svelte';
	import About from '$components/v2/About/About.svelte';
	import Work from '$components/v2/Projects/Projects.svelte';
	import Contact from '$components/v2/Contact/Contact.svelte';
	import { projects } from '$lib/data/projectsV2';
	import type { Project } from '$lib/types/types';
	import Seo from '$components/v2/SEO/SEO.svelte';

	let projectPairs: Project[][] = [];

	for (let i = 0; i < projects.length; i += 2) {
		projectPairs.push(projects.slice(i, i + 2));
	}
</script>

<Seo title="landozone" />
<Fullpage>
	<FullpageSection title="Landing">
		<Landing />
	</FullpageSection>
	<FullpageSection title="About">
		<About />
	</FullpageSection>

	<FullpageSection title="Project">
		<Work />
	</FullpageSection>
	<FullpageSection title="Contact">
		<Contact />
	</FullpageSection>
</Fullpage>
