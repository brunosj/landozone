<script lang="ts">
	export let sectionTitle: string;
	import LogoFull from '$lib/assets/svg/logos/lz-logo.svelte';
	import LogoGreen from '$lib/assets/svg/logo-green.svelte';
	import LogoPurple from '$lib/assets/svg/logo-purple.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
</script>

<header>
	<nav class="container">
		<div class="logo">
			{#if sectionTitle === 'Landing'}
				<LogoFull />
			{:else if sectionTitle === 'About'}
				<div style="width:2rem;">
					<Logo color2="#00cfa1" />
				</div>
			{:else if sectionTitle === 'Work'}
				<div style="width:2rem;">
					<Logo />
				</div>
			{:else if sectionTitle === 'Contact'}
				<div style="width:2rem;">
					<Logo color1="#8786df" />
				</div>
			{:else}
				<LogoFull />
			{/if}
		</div>
	</nav>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		z-index: 50;
		width: 100%;
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
