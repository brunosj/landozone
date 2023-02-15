<script lang="ts">
	import { spring } from 'svelte/motion';
	import { afterUpdate } from 'svelte';
	import { onMount } from 'svelte';

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
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});

	$: coords.set({ x: mouseX, y: mouseY });

	$: {
		afterUpdate(() => {
			let elements = document.elementsFromPoint(mouseX, mouseY);
			let links = elements.filter((el) => el.tagName === 'A');

			if (links.length) {
				document.body.style.cursor = 'pointer';
			} else {
				document.body.style.cursor = 'default';
			}
		});
	}
</script>

<svg
	class="absolute w-full h-full left-0 right-0"
	on:mousedown={() => {
		size.set(30);
	}}
	on:mouseup={() => {
		size.set(10);
	}}>
	<circle class=" fill-pri-500" cx={$coords.x} cy={$coords.y} r={$size} />
	<rect class="absolute top-0 left-0 w-full h-full  bg-transparent fill-transparent" />
</svg>
