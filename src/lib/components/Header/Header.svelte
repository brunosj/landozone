<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import LogoFull from '$lib/assets/svg/logos/lz-logo.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	$: page = $activePage;

	onMount(() => {
		$activePage = 0;
	});

	onDestroy(() => {
		$activePage = 0;
	});
</script>

<header>
	<nav class="fullpage-container">
		<div class="logo">
			{#if page === 0}
				<div class="logo-full" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<LogoFull />
				</div>
			{:else if page === 1}
				<div class="logo-shape" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo color1="#00cfa1" color2="#202129" />
				</div>
			{:else if page === 2}
				<div class="logo-shape" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo />
				</div>
			{:else if page === 3}
				<div class="logo-shape" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo color1="#8786df" color2="#202129" />
				</div>
			{:else}
				<div class="logo-shape" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo />
				</div>
			{/if}
		</div>
		<div class="active-page">
			{#if page === 0}
				<div style="width:100%" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}></div>
			{:else if page === 1}
				<div
					style="width:100%; color:var(--color-black)"
					in:fly={{ delay: 700 }}
					out:fly={{ delay: 300 }}>
					<span>about</span>
				</div>
			{:else if page === 2}
				<div
					style="width:100%; color:var(--color-secondary)"
					in:fly={{ delay: 700 }}
					out:fly={{ delay: 300 }}>
					<span>featured projects</span>
				</div>
			{:else if page === 3}
				<div
					style="width:100%; color:var(--color-black)"
					in:fly={{ delay: 700 }}
					out:fly={{ delay: 300 }}>
					<span>contact</span>
				</div>
			{:else}
				<div in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<span>about</span>
				</div>
			{/if}
		</div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		/* height: 3rem; */
		z-index: 50;
		width: 100%;
		/* padding: 1rem 0rem; */
		/* background-color: rgba(var(--color-blackRGB), 0.9);
		backdrop-filter: blur(5px); */
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.active-page {
		text-align: right;
	}

	.logo-full {
		width: 8rem;
	}

	.logo-shape {
		width: 1.5rem;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 1rem;
		font-weight: 700;
		font-family: 'Sora Variable', sans-serif;
	}

	@media (min-width: 50em) {
		span {
			font-size: 1.7rem;
		}

		.logo-full {
			width: 11rem;
		}

		.logo-shape {
			width: 2rem;
		}
	}
</style>
