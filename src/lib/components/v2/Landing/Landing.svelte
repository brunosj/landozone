<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import LogoMultiple from '$lib/assets/svg/logo-multiple.svelte';
	import { activePage } from '$lib/stores/activeSection';
	import { onMount } from 'svelte';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightKeyboardDoubleArrowDownRounded.svelte';
	import { FullpageExternalController } from '../Fullpage/stores';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<section id="landing">
	<div class="container">
		<div class="content">
			{#if $activePage === 0}
				<div class="hero" transition:fly={{ y: -50, duration: 750 }}>
					<h1 class:fade-in={animate}>imaginative web development</h1>

					<p class:fade-in={animate}>
						Hello! I'm <a href="https://www.linkedin.com/in/brunosj/" target="_blank" id="link"
							>Bruno</a
						>, a freelance web developer based in Berlin - with roots in political science and
						climate policy. I am passionate about crafting innovative applications and experiences
						on the web.
					</p>
				</div>
			{/if}
			<div class="helper">
				Scroll down
				<IconArrowDown width="1.5rem" />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
	}

	p {
		opacity: 0;
		transition: 750ms ease all;
		transition-delay: 200ms;
	}

	h1 {
		color: var(--color-primary);
		opacity: 0;
		transition: 750ms ease all;
	}

	.hero > * + * {
		margin-top: 1.5rem;
	}

	.fade-in {
		opacity: 1;
	}

	.hero {
		width: 50%;
	}

	.name {
		color: var(--color-secondary);
	}

	.logoAnimation {
		position: absolute;
		top: 0;
		right: 0;
		width: 45dvh;
		overflow: hidden;
		opacity: 10%;
		margin-right: 10rem;
	}

	#link {
		/* font-size: 1.5rem; */
		position: relative;
		z-index: 20;
		font-weight: 600;
		color: var(--color-secondary);
		transition: all 0.2s ease-in-out;
	}

	#link:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 10%;
		z-index: -1;
		height: 0%;
		width: 104%;
		left: -1%;
		opacity: 0.5;
		border-radius: 2px;
		background: linear-gradient(
			65deg,
			var(--color-secondary) 0%,
			var(--color-secondary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	#link:hover:after {
		height: 80%;
		opacity: 0.8;
	}

	#link:hover {
		color: var(--color-white);
	}

	.helper {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 600;
		gap: 0.2rem;
		color: var(--color-secondary);
		animation: 1.5s wiggle ease infinite;
	}

	@keyframes wiggle {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(4px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@media screen and (max-width: 768px) {
		.hero {
			width: 100%;
		}
	}
</style>
