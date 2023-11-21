<script lang="ts">
	import { onMount } from 'svelte';
	import Fullpage from '$components/v2/Fullpage/Fullpage.svelte';
	import FullpageSection from '$components/v2/Fullpage/FullpageSection.svelte';
	import FullpageSlide from '$components/v2/Fullpage/FullpageSlide.svelte';
	import type { FullpageActivityStore } from '$components/v2/Fullpage/types.d.ts';
	import Landing from '$components/v2/Landing/Landing.svelte';
	import About from '$components/v2/About/About.svelte';
	import Work from '$components/v2/Projects/Projects.svelte';
	import Contact from '$components/v2/Contact/Contact.svelte';
	import { projects } from '$lib/data/projectsV2';
	import ProjectTemplate from '$components/v2/Projects/ProjectTemplate.svelte';
	import type { Project } from '$lib/types/types';

	let projectPairs: Project[][] = [];

	for (let i = 0; i < projects.length; i += 2) {
		projectPairs.push(projects.slice(i, i + 2));
	}
</script>

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

<!-- <Landing />
<About />
<Work />
<Contact /> -->

<style global>
	:global(body) {
		height: 100vh;
		margin: 0;
	}

	:global(.container) {
		max-width: 85%;
		height: 100%;
		margin: 3rem auto;
		position: relative;
	}

	/* :global(*) {
		border: solid white 1px;
	} */

	:global(.content) {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.mobile {
		display: hidden;
	}

	@media screen and (max-width: 768px) {
		.mobile {
			position: relative;
			height: 100%;
		}
	}
</style>
