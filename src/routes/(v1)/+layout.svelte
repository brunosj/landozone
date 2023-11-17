<script>
	import '../../reset.css';
	import '../../globals.css';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import SideNav from '$components/Nav/SideNav.svelte';
	import MouseTracker from '$components/MouseTracker/MouseTracker.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<MouseTracker />
<main>
	<div class="grid">
		{#if animate}
			<div in:fly={{ x: -500, duration: 800 }} class="sideBar">
				<div class="logoSideBar">
					<Logo />
				</div>
				<SideNav />
			</div>
		{/if}
		<div class="content">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		background-image: linear-gradient(#2e2e2e, #2e2e2e);
		min-height: 100vh;
		padding: 1.5rem 0rem;
	}
	.grid {
		padding: 1.5rem 0rem;
		display: flex;
	}
	.sideBar {
		z-index: 10;
		display: none;
	}
	.logoSideBar {
		width: 2.5rem;
		height: 2.5rem;
		margin-bottom: 1.5rem;
	}
	.content {
		width: 100%;
		order: -9999;
		z-index: 10;
		grid-column: span 7 / span 7;
	}

	@media (min-width: 768px) {
		main {
			padding: 0rem;
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(8, minmax(0, 1fr));
			padding: 10rem 0rem;
			margin-left: auto;
			margin-right: auto;
			max-width: 64rem;
		}
		.content {
			order: 9999;
		}
	}

	@media (min-width: 1024px) {
		.sideBar {
			display: block;
		}
	}
</style>
