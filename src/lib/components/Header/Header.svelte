<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Logo from '$lib/assets/svg/logos/logo.svelte';
	import { menu } from '$lib/data/menu';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<header>
	{#if animate}
		<nav
			transition:fly={{
				y: -100,
				duration: 500,
				easing: cubicInOut,
				opacity: 1,
				delay: 500
			}}>
			<div class="logo">
				<a href="/" aria-label="landozone logo">
					<div class="logo-shape">
						<Logo />
					</div>
				</a>
			</div>
			<ul class="menu">
				{#each menu as { name, slug }}
					<li>
						<a href={slug} class="active-page">
							<span>{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 50;
		top: 0.5rem;
		background-color: rgb(var(--color-blackRGB), 1);
	}

	nav {
		right: 0;
		display: flex;
		align-items: center;
		margin: 0.6rem auto;
		flex-direction: row;
		justify-content: space-between;
		max-width: 95%;
	}

	.active-page {
		text-align: right;
	}

	.logo-shape {
		width: 1.5rem;
	}

	.menu {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
	}

	li {
		list-style: none;
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: rgb(var(--color-blackRGB), 0);
		display: inline-block;
		transition: border 0.2s linear;
	}

	li:hover {
		border-bottom-color: #d7d2d2;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 0.7rem;
		font-family: 'Sora Variable', sans-serif;
	}

	@media (min-width: 50em) {
		span {
			font-size: 0.9rem;
		}

		.logo-shape {
			width: 1.7rem;
		}
	}
</style>
