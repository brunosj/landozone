<script lang="ts">
	import Heading from '$components/Nav/Heading.svelte';
	import LinkedIn from '$lib/assets/svg/linkedIn.svelte';
	import Github from '$lib/assets/svg/github.svelte';
	import Social from '$components/Socials/Social.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<section class="layout" in:fly={{ y: 100, duration: 600 }}>
		<Heading title="about me" />
		<p>
			I'm a developer who enjoys bringing ideas to life on the web. My expertise extends to both
			front-end and back-end development. I strive to enhance workflows and craft applications using
			the latest web technologies, being well-versed in <a
				href="https://www.typescriptlang.org/"
				target="_blank"
				rel="noreferrer">JavaScript/TypeScript</a>
			tools including frameworks like
			<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
			and
			<a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, the
			<a href="https://nodejs.org/en" target="_blank" rel="noreferrer">node.js</a> environment and
			the
			<a href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js</a> library.
		</p>
		<p class="paragraph">
			Prior to diving into computer science, I studied political science and worked within civil
			society organizations focused on climate policy. Now, I'm excited to merge my programming
			skills with this experience to make meaningful contributions to various initiatives and
			projects. I'm particularly interested in creating engaging and interactive data
			visualizations, which align with my
			<a href="https://github.com/brunosj/dna-copyright/" target="_blank" rel="noreferrer"
				>previous experience</a> in working with statistical software.
		</p>
		<p class="paragraph">
			Next to my professional activities, I also aim to contribute to community-driven and open
			source projects. One such example is <a
				href="https://thfradio.de"
				target="_blank"
				rel="noreferrer">THF Radio</a
			>, a Berlin-based online radio.
		</p>

		<div class="socials" in:fade={{ delay: 300, duration: 600 }}>
			<Social name="Github" url="https://github.com/brunosj">
				<Github />
			</Social>
			<Social name="LinkedIn" url="https://www.linkedin.com/in/brunosj/">
				<LinkedIn />
			</Social>
		</div>
	</section>
{/if}

<style>
	a {
		font-family: IBMPlexMono;
		background-color: #8786df;
		transition: all 300ms;
	}

	a:hover {
		background-color: #adabdd;
	}

	.paragraph {
		padding-top: 0.75rem;
	}
</style>
