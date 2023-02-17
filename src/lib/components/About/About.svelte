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
		of choice are <a
			href="https://www.typescriptlang.org/"
			target="_blank"
			rel="noreferrer"
			class="bg-sec-300 text-md font-mono duration-300 hover:bg-sec-500">JavaScript/Typescript</a>
		and frameworks such as
		<a
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noreferrer"
			class="bg-sec-300 text-md font-mono duration-300 hover:bg-sec-500">SvelteKit</a>
		and
		<a
			href="https://nextjs.org/"
			target="_blank"
			rel="noreferrer"
			class="bg-sec-300 text-md font-mono duration-300 hover:bg-sec-500">Next.js</a
		>. I'm particularly interested in dynamic and interactive data visualization, which builds on my
		<a
			href="https://github.com/brunosj/dna-copyright/"
			target="_blank"
			rel="noreferrer"
			class="bg-sec-300 text-md font-mono duration-300 hover:bg-sec-500">previous experience</a> with
		statistical software.
	</p>
	<p class="pt-3">
		My background is in political science and civil society organizations. My experience in the
		climate policy field has given me (some) insights into ways to support a more sustainable and
		inclusive world, and I'm excited to combine this knowledge with my programming skills to tackle
		environmental and social issues.
	</p>
	<div class="mt-10 flex gap-12">
		<Social name="Github" url="https://github.com/brunosj">
			<Github />
		</Social>
		<Social name="LinkedIn" url="https://www.linkedin.com/in/brunosj/">
			<LinkedIn />
		</Social>
	</div>
</section>
