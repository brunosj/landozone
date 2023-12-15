<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/fredoka';
	import '../reset.css';
	import '../globals.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { background, font } from '$lib/stores/store';
	import Header from '$components/Header/Header.svelte';
	import MouseTracker from '$components/MouseTracker/MouseTracker.svelte';

	if (browser) {
		const handleScroll = () => {
			const landingSection = document.getElementById('landing');
			const aboutSection = document.getElementById('about');
			const workSection = document.getElementById('projects');
			const contactSection = document.getElementById('contact');

			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;

			const offset = 25;

			const isFullyVisible = (element: HTMLElement, offset = 0) => {
				const elementRect = element.getBoundingClientRect();
				const elementTop = elementRect.top + offset;
				const elementBottom = elementRect.bottom - offset;
				return elementTop >= 0 && elementBottom <= windowHeight;
			};

			if (landingSection && isFullyVisible(landingSection, offset)) {
				background.set('var(--color-black)');
				font.set('var(--color-white)');
			} else if (aboutSection && isFullyVisible(aboutSection, offset)) {
				background.set('var(--color-secondary)');
				font.set('var(--color-black)');
			} else if (workSection && isFullyVisible(workSection, offset)) {
				background.set('var(--color-black)');
				font.set('var(--color-white)');
			} else if (contactSection && isFullyVisible(contactSection, offset)) {
				background.set('var(--color-black)');
				font.set('var(--color-white)');
			}
		};

		onMount(() => {
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		});
	}
</script>

<!-- <MouseTracker /> -->
<Header />
<main class="content">
	<slot />
</main>

<style>
	.content {
		width: 100%;
		order: -9999;
		z-index: 10;
	}

	:global(body) {
		min-height: 100vh;
	}

	:global(.fullpage-section) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	:global(.page-container) {
		max-width: 85%;
		height: 100%;
		margin: 0rem auto;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	:global(.content) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2rem auto;
	}

	@media (min-width: 50em) {
		:global(.content) {
			height: 100%;
		}

		:global(.fullpage-section) {
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	@media (min-width: 100em) {
		:global(.fullpage-section) {
			min-height: 85vh;
		}

		:global(.content) {
			margin: 3rem auto;
		}
	}
</style>
