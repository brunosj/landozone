<script>
	import '../globals.css';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import SideNav from '$components/Nav/SideNav.svelte';
	import MouseTracker from '$components/MouseTracker/MouseTracker.svelte';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<MouseTracker />
<main class="bg-gradient-to-t from-ter to-sec-500  min-h-screen py-12 md:py-0">
	<div class=" antialiased py-6 md:py-40 max-w-5xl flex flex-col md:flex-row lg:mx-auto">
		{#if animate}
			<div in:fly={{ x: -500, duration: 800 }} class="z-10 hidden lg:block">
				<SideNav />
			</div>
		{/if}
		<div class="w-full order-first md:order-last z-10">
			<slot />
		</div>
	</div>
</main>
