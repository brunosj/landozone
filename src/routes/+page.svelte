<script lang="ts">
	import Landing from '$components/Landing/Landing.svelte';
	import About from '$components/About/About.svelte';
	import Projects from '$components/Projects/Projects.svelte';
	import Contact from '$components/Contact/Contact.svelte';
	import type { Project } from '$lib/types/types';
	import SEO from '$lib/components/SEO/index.svelte';

	let { data } = $props();

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
		slug: ''
	};

	// Logic

	let projects: Project[] = data.projects;
</script>

<SEO {...seoProps} />
<div class="background">
	<div></div>
	<div></div>
</div>
<Landing />
<About />
<Projects {projects} />
<Contact />

<style>
	.background {
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to right, #14151d, #14151d);
		display: flex;
		flex-grow: 1;
		z-index: -1;
	}

	.background div {
		position: absolute;
		border-radius: 100%;
		height: 0;
		filter: blur(240vw);
		opacity: 0.04;
	}

	.background div:nth-child(1) {
		background: linear-gradient(132deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		width: 50%;
		padding-top: 47%;
		left: 10%;
		top: 40%;
		transform: translateX(-50%) translateY(-50%);
	}

	.background div:nth-child(2) {
		background: linear-gradient(45deg, var(--color-secondary) 0%, var(--color-secondary) 100%);
		width: 57%;
		padding-top: 57%;
		left: 88%;
		top: 90%;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
