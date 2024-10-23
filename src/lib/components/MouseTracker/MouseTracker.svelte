<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script lang="ts">
	import { spring } from 'svelte/motion';
	import { afterUpdate } from 'svelte';
	import { onMount } from 'svelte';
	import throttle from 'lodash.throttle';

	let coords = spring(
		{ x: -100, y: -100 },
		{
			stiffness: 0.15,
			damping: 0.7
		}
	);

	let size = spring(7);
	let mouseX = 0;
	let mouseY = 0;
	let isFirstMouseMove = true;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.pageX;
		mouseY = event.pageY;
		coords.set({ x: mouseX, y: mouseY });
		isFirstMouseMove = false;
	}

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});

	$: {
		afterUpdate(
			throttle(() => {
				if (isFirstMouseMove) return;

				let elements = document.elementsFromPoint(mouseX, mouseY);
				let links = elements.filter((el) => el.tagName === 'a');

				if (links.length) {
					document.body.style.cursor = 'pointer';
				} else {
					document.body.style.cursor = 'default';
				}
			}, 100)
		);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	on:mousedown={() => {
		size.set(15);
	}}
	on:mouseup={() => {
		size.set(10);
	}}>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		z-index: 100;
		pointer-events: none;
	}

	circle {
		fill: var(--color-primary);
	}
</style>
