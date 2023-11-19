<script>
	import { fade, fly } from 'svelte/transition';
	import LogoMultiple from '$lib/assets/svg/logo-multiple.svelte';
	import { activePage } from '$lib/stores/activeSection';
	import { onMount } from 'svelte';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<section id="landing">
	<div class="container">
		<div class="content">
			{#if $activePage === 0}
				<div class="hero" transition:fly={{ y: -500, duration: 2000 }}>
					<h1 class:fade-in={animate}>imaginative web development</h1>

					<p class:fade-in={animate}>
						Hello! I'm <span class="name">Bruno</span>, a freelance web developer based in Berlin -
						with roots in political science and climate policy. I am passionate about crafting
						innovative applications and experiences on the web.
					</p>
				</div>
			{/if}
		</div>
	</div>
	<!-- <div class="logoAnimation">
			<LogoMultiple />
		</div> -->
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
		transition: 2s ease all;
	}

	h1 {
		color: var(--color-primary);
		opacity: 0;
		transition: 2s ease all;
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

	@media screen and (max-width: 768px) {
		.hero {
			width: 100%;
		}
	}
</style>
