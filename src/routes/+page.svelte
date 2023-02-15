<script lang="ts">
	import About from '$components/About/About.svelte';
	import Contact from '$components/Contact/Contact.svelte';
	import Projects from '$components/Projects/Projects.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<section class="layout">
		<h1 class="font-bold text-pri-500 leading-none" in:fly={{ y: 100, duration: 600 }}>
			landozone
		</h1>
		<h2 in:fly={{ delay: 300, y: 100, duration: 600 }}>imaginative web development</h2>

		<h3 class="pt-12 font-light" in:fade={{ delay: 500, duration: 600 }}>
			hi! my name is <span class="font-bold">bruno sj</span> and I am a freelance full stack developer
			based in Berlin. I enjoy working on creative projects where I can bring my expertise to develop
			meaningful and innovative websites and applications.
		</h3>
	</section>
{/if}

<div class="lg:hidden">
	<About />
</div>

<div class="lg:hidden">
	<Projects />
</div>

<div class="lg:hidden">
	<Contact />
</div>
