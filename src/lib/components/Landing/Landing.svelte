<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { activePage } from '$lib/stores/activeSection';
	import { onMount } from 'svelte';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightKeyboardDoubleArrowDownRounded.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<section id="landing">
	{#if $activePage === 0}
		<div class="svg-bg" class:fade-in-svg={animate} transition:fade={{ duration: 750, delay: 500 }}>
			<Waveform />
		</div>
		<div class="fullpage-container">
			<div class="content">
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
				<div class="helper" transition:fly={{ y: -50, duration: 750 }}>
					<span class:fade-in={animate} class="scroll">Scroll down</span>
					<span class:fade-in={animate} class="inner">
						<IconArrowDown width="1.5rem" />
					</span>
					<!-- <span class:fade-in={animate} class="arrow">
							<span class:fade-in={animate} class="inner">
								<span class:fade-in={animate}>
									<IconArrowDown width="1.5rem" />
								</span>
								<span class:fade-in={animate} class="animated">
									<IconArrowDown width="1.5rem" />
								</span>
							</span>
						</span> -->
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
		position: relative;
	}

	h1 {
		color: var(--color-primary);
		opacity: 0;
		transition: 750ms ease all;
	}

	p {
		opacity: 0;
		transition: 750ms ease all;
		transition-delay: 200ms;
	}

	span {
		opacity: 0;
		transition: 750ms ease all;
	}

	.svg-bg {
		position: absolute;
		top: 0%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 160%;
		opacity: 0;
		transition: 750ms ease all;
	}

	.hero > * + * {
		margin-top: 1.5rem;
	}

	.fade-in {
		opacity: 1;
	}

	.fade-in-svg {
		opacity: 0.5;
	}

	.hero {
		width: 100%;
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
		width: 102%;
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
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 600;
		color: var(--color-secondary);
		gap: 0.5rem;
	}

	.arrow {
		display: inline-flex;
		/* align-items: center; */
		position: relative;
		/* overflow: hidden; */
	}

	.inner {
		display: flex;
		animation: wiggle 1.5s ease infinite;
	}

	.animated {
		position: absolute;
		top: 100%;
	}

	@keyframes wiggle {
		0% {
			transform: translateY(-10%);
		}

		50% {
			transform: translateY(25%);
		}

		100% {
			transform: translateY(-10%);
		}
	}

	@media screen and (min-width: 50em) {
		.hero {
			width: 50%;
		}

		.svg-bg {
			width: 100%;
			top: -37%;
		}

		.helper {
			font-size: 0.8rem;
		}
	}
</style>
