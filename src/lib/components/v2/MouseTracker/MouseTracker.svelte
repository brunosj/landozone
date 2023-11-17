<script lang="ts">
	import { spring } from 'svelte/motion';
	import { afterUpdate } from 'svelte';
	import { onMount } from 'svelte';
	import throttle from 'lodash.throttle';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.15,
			damping: 0.7
		}
	);

	let size = spring(10);
	let mouseX = 0;
	let mouseY = 0;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.pageX;
		mouseY = event.pageY;
	}

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});

	$: coords.set({ x: mouseX, y: mouseY });

	$: {
		afterUpdate(
			throttle(() => {
				let elements = document.elementsFromPoint(mouseX, mouseY);
				let links = elements.filter((el) => el.tagName === 'A');

				if (links.length) {
					document.body.style.cursor = 'pointer';
				} else {
					document.body.style.cursor = 'default';
				}
			}, 100)
		);
	}
</script>

<svg
	on:mousedown={() => {
		size.set(30);
	}}
	on:mouseup={() => {
		size.set(10);
	}}>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
	<rect />
</svg>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		z-index: 100;
	}

	circle {
		fill: #00cfa1;
	}

	rect {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		fill: transparent;
	}
</style>
