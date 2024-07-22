<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import IconArrowDown from '$lib/assets/svg/icons/MaterialSymbolsLightKeyboardDoubleArrowDownRounded.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';
	import { background, font } from '$lib/stores/store';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { cubicInOut } from 'svelte/easing';
	import PersonalInfo from './PersonalInfo.svelte';

	let element;
	let intersecting = false;
</script>

<section id="landing" class="page-section">
	<div class="svg-bg">
		<Waveform />
	</div>
	<div class="page-container" bind:this={element}>
		<div class="content">
			<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
				{#if intersecting}
					<div class="hero">
						<h1 transition:fade={{ duration: 750, delay: 0, easing: cubicInOut }}>
							imaginative web design
						</h1>
						<h4 transition:fade={{ duration: 500, delay: 250, easing: cubicInOut }}>
							hi! my name is Bruno and I am passionate about crafting innovative applications and
							experiences on the web.
						</h4>
						<div transition:fade={{ duration: 500, delay: 350, easing: cubicInOut }}>
							<PersonalInfo />
						</div>
					</div>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		color: white;
		position: relative;
		transition: background-color 1s ease;
		margin-top: 5rem;
	}

	h1 {
		color: var(--color-primary);
		opacity: 1;
		font-size: 2em;
		line-height: 1.2em;
		font-weight: 700;
		text-decoration: none;
		background: rgba(0, 0, 0, 0) -webkit-gradient(
				linear,
				left top,
				right top,
				from(var(--color-secondary)),
				color-stop(var(--color-primary))
			) repeat scroll 0% 0%/200% 200%;
		background: rgba(0, 0, 0, 0)
			linear-gradient(125deg, var(--color-secondary), var(--color-primary)) repeat scroll 0% 0%/200%
			200%;
		background-clip: border-box;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-animation: GradientAnimation 3s ease infinite;
		animation: GradientAnimation 3s ease infinite;
	}

	@keyframes GradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	h4 {
		line-height: 1.5rem;
	}

	@keyframes GradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.svg-bg {
		position: absolute;
		top: -25%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.4;
		transition: 750ms ease all;
	}

	.hero > * + * {
		margin-top: 1.5rem;
	}

	.hero {
		width: 100%;
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

	@media screen and (min-width: 55em) {
		h1 {
			font-size: 5em;
		}
		h4 {
			line-height: 2.5rem;
		}

		.hero {
			width: 100%;
			margin: auto;
		}

		.hero > * + * {
			margin-top: 2.5rem;
		}

		.svg-bg {
			width: 100%;
			top: -50%;
		}
	}

	@media screen and (min-width: 75em) {
		.hero {
			width: 80%;
			margin: auto;
		}

		.svg-bg {
			top: -70%;
		}
	}

	@media (min-width: 100em) {
		.svg-bg {
			top: -85%;
		}
	}
</style>
