<script lang="ts">
	import About from '$components/About/About.svelte';
	import Contact from '$components/Contact/Contact.svelte';
	import Projects from '$components/Projects/Projects.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Logo from '$lib/assets/svg/logo.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<Seo title="landozone" />

{#if animate}
	<section class="layout">
		<div class="block md:hidden h-8 w-8 mb-3">
			<Logo />
		</div>
		<h1 class="font-bold text-pri-500 leading-none" in:fly={{ y: 100, duration: 600 }}>
			landozone
		</h1>
		<h2 in:fly={{ delay: 300, y: 100, duration: 600 }}>imaginative web development</h2>

		<h3 class="pt-6 md:pt-12 font-light" in:fade={{ delay: 500, duration: 600 }}>
			hi! my name is <span class="font-bold">bruno sj</span> and I am a freelance full stack developer
			based in Berlin. I enjoy working on creative projects where I can bring my expertise to develop
			meaningful and innovative websites and applications.
		</h3>
	</section>
{/if}

{#if animate}
	<div class="lg:hidden" in:fade={{ delay: 500, duration: 600 }}>
		<About />
	</div>

	<div class="lg:hidden" in:fade={{ delay: 500, duration: 600 }}>
		<Projects />
	</div>

	<div class="lg:hidden" in:fade={{ delay: 500, duration: 600 }}>
		<Contact />
	</div>
{/if}
