<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import LogoFull from '$lib/assets/svg/logos/lz-logo.svelte';

	import Logo from '$lib/assets/svg/logo.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<header>
	<nav class="container">
		<div class="logo">
			{#if $activePage === 0}
				<div in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<LogoFull />
				</div>
			{:else if $activePage === 1}
				<div style="width:2rem;" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo color2="#00cfa1" />
				</div>
			{:else if $activePage === 2}
				<div style="width:2rem;" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo />
				</div>
			{:else if $activePage === 3}
				<div style="width:2rem;" in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<Logo color1="#8786df" />
				</div>
			{:else}
				<div in:fly={{ delay: 700 }} out:fly={{ delay: 300 }}>
					<LogoFull />
				</div>
			{/if}
		</div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
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

	.logo {
		width: 10rem;
	}
</style>
