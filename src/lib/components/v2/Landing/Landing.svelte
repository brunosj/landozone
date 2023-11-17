<script>
	import Header from '$components/v2/Header/Header.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let animate = false;
	import LogoMultiple from '$lib/assets/svg/logo-multiple.svelte';

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<Header sectionTitle="Landing" />
	<section id="landing">
		<div class="container">
			<div class="content">
				<div class="hero">
					<h1 in:fly={{ delay: 300, y: 100, duration: 600 }}>imaginative web development</h1>

					<p in:fade={{ delay: 500, duration: 600 }}>
						Hello! I'm <span class="name">Bruno</span>, a freelance web developer based in Berlin -
						with roots in political science and climate policy. I am passionate about crafting
						innovative applications and experiences on the web.
					</p>
				</div>
			</div>
		</div>
		<!-- <div class="logoAnimation">
			<LogoMultiple />
		</div> -->
	</section>
{/if}

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		height: 100%;
		color: white;
	}

	h1 {
		color: var(--color-primary);
	}

	.hero > * + * {
		margin-top: 1.5rem;
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
