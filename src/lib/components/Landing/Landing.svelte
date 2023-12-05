<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightKeyboardDoubleArrowDownRounded.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import { background, font } from '$lib/stores/store';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { cubicInOut } from 'svelte/easing';

	let element;
	let intersecting = false;
</script>

<section
	id="landing"
	class="fullpage-section"
	style:background-color={`var(--color-black)`}
	style:color={`var(--color-white)`}>
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container" bind:this={element}>
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			<div class="content">
				{#if intersecting}
					<div class="hero">
						<h1 transition:fade={{ duration: 750, delay: 0, easing: cubicInOut }}>
							imaginative web development
						</h1>
						<p transition:fade={{ duration: 750, delay: 250, easing: cubicInOut }}>
							hi! my name is bruno sj and <span id="landozone">landozone</span> is my independent development
							and design practice. I am passionate about crafting innovative applications and experiences
							on the web.
						</p>
					</div>
				{/if}
				<!-- <div class="helper">
					<span class:fade-in={animate} class="scroll">Scroll down</span>
					<span class:fade-in={animate} class="inner">
						<IconArrowDown width="1.5rem" />
					</span>
				</div> -->
			</div>
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		width: 100%;
		color: white;
		position: relative;
		transition: background-color 1s ease;
	}

	h1 {
		color: var(--color-primary);
		opacity: 1;
		/* transition: 750ms ease all; */
	}

	p {
		opacity: 1;
		transition: 750ms ease all;
		/* transition-delay: 200ms; */
	}

	span {
		opacity: 1;
		/* transition: 750ms ease all; */
	}

	.svg-bg {
		position: absolute;
		top: -25%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.5;
		transition: 750ms ease all;
	}

	.hero > * + * {
		margin-top: 1.5rem;
	}

	.fade-in {
		opacity: 1;
	}

	.hero {
		width: 100%;
	}

	#landozone {
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 600;
		color: var(--color-secondary);
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

	.inner {
		display: flex;
		animation: wiggle 1.5s ease infinite;
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
		section {
			margin-top: -3rem;
		}
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
