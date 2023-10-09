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
		<div class="logoWrapper">
			<Logo />
		</div>
		<h1 in:fly={{ y: 100, duration: 600 }}>landozone</h1>
		<h2 in:fly={{ delay: 300, y: 100, duration: 600 }}>imaginative web development</h2>

		<p in:fade={{ delay: 500, duration: 600 }}>
			hi! my name is <span class="name">bruno sj</span> and I am a freelance web developer based in Berlin.
			I enjoy working on creative projects where I can bring my expertise to develop meaningful and innovative
			websites and applications.
		</p>
	</section>
{/if}

{#if animate}
	<div class="mobileSection" in:fade={{ delay: 500, duration: 600 }}>
		<About />
	</div>

	<div class="mobileSection" in:fade={{ delay: 500, duration: 600 }}>
		<Projects />
	</div>

	<div class="mobileSection" in:fade={{ delay: 500, duration: 600 }}>
		<Contact />
	</div>
{/if}

<style>
	h1 {
		font-weight: 700;
		color: #00ffcd;
		line-height: 1;
	}

	p {
		padding-top: 3rem /* 48px */;
	}

	.name {
		font-weight: 700;
	}

	.mobileSection {
		display: block;
	}

	.logoWrapper {
		display: block;
		height: 2rem;
		width: 2rem;
		margin-bottom: 0.75rem;
	}

	@media (min-width: 768px) {
		.logoWrapper {
			display: none;
		}
	}
	@media (min-width: 1024px) {
		.mobileSection {
			display: none;
		}
	}
</style>
