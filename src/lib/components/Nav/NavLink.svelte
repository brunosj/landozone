<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let currentPath: string;

	onMount(() => {
		currentPath = window.location.pathname;
	});

	export let title: string;
	export let href: string;
</script>

<a {href} class:active={$page.url.pathname === href} class="p-2 lowercase">
	{title}
</a>

<style>
	a.active {
		@apply bg-pri-500 font-bold  rounded-md;
	}
</style>
