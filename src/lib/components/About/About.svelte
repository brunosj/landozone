<script lang="ts">
	import Heading from '$components/Nav/Heading.svelte';
	import LinkedIn from '$lib/assets/svg/linkedIn.svelte';
	import Social from '$components/Socials/Social.svelte';
	import Github from '$lib/assets/svg/github.svelte';
</script>

<section class="layout">
	<Heading title="about me" />
	<p>
		I'm a freelance developer passionate about transposing ideas and visions onto their little space
		on the web. Coming from a political science background, my experience in the climate policy
		field has equipped me with an understanding of (some of the) ways we can support the lengthy
		road towards a more sustainable and inclusive world. I would love to pair this knowledge with my
		programming skills to leverage technology to address environmental and social issues.
	</p>
	<p class="pt-3">
		In terms of technologies, my tools of choice are <a
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
		>. I am also particularly interested about dynamic/interactive data visualization, building up
		on my previous data science experience using traditional statistical software.
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
