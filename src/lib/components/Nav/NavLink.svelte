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

<a {href} class:active={$page.url.pathname === href}>
	{title}
</a>

<style>
	a.active {
		background-color: #9795f0;
		transition: all 300ms;
		font-weight: 700;
		/* padding: 0.2rem 0.5rem; */
	}

	a {
		font-weight: 400;
		font-size: 1.15rem;
		text-decoration: none;
		padding: 0.2rem 0.5rem;
		position: relative;
		border-radius: 0.375rem;
		text-transform: lowercase;
		overflow: hidden;
	}

	a:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: #adabdd;
		z-index: -1;
		transform: rotateX(90deg);
		transition: all 300ms;
		border-radius: 0.375rem;
	}

	a:hover:before {
		transform: rotateX(0);
	}

	/* a:hover {
		color: #adabdd;
	} */
</style>
