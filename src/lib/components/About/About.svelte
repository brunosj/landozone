<script lang="ts">
	import Heading from '$components/Nav/Heading.svelte';
	import LinkedIn from '$lib/assets/svg/linkedIn.svelte';
	import Social from '$components/Socials/Social.svelte';
	import Github from '$lib/assets/svg/github.svelte';
</script>

<section class="layout">
	<Heading title="about me" />
	<p>
		I'm a developer who enjoys bringing ideas to life on the web. In terms of technologies, my tools
		of choice are <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"
			>JavaScript/TypeScript</a>
		and frameworks such as
		<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
		and
		<a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>. I'm particularly
		interested in dynamic and interactive data visualization, which builds on my
		<a href="https://github.com/brunosj/dna-copyright/" target="_blank" rel="noreferrer"
			>previous experience</a> with statistical software.
	</p>
	<p class="paragraph">
		My background is in political science and civil society organizations. My experience in the
		climate policy field has given me (some) insights into ways to support a more sustainable and
		inclusive world, and I'm excited to combine this knowledge with my programming skills to tackle
		environmental and social issues.
	</p>
	<div class="socials">
		<Social name="Github" url="https://github.com/brunosj">
			<Github />
		</Social>
		<Social name="LinkedIn" url="https://www.linkedin.com/in/brunosj/">
			<LinkedIn />
		</Social>
	</div>
</section>

<style>
	a {
		font-family: IBMPlexMono;
		background-color: #c1bff6;
		transition: all 300ms;
	}

	a:hover {
		background-color: #9795f0;
	}

	.paragraph {
		padding-top: 0.75rem;
	}

	.socials {
		margin-top: 2.5rem;
		display: flex;
		gap: 3rem;
	}
</style>
