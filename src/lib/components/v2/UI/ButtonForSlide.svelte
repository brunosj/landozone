<script lang="ts">
	export let to: string;
	export let text: string;
	export let color = '#8786df';
	export let keepTextLight = false;

	import { createEventDispatcher } from 'svelte';

	export let index = 1;
	const dispatch = createEventDispatcher();
	const goto = () => {
		dispatch('goto', index);
		console.log(index);
	};

	let textHoverColor = keepTextLight ? '#fff' : '#202129';
</script>

<button style="--border-color: {color}; --text-hover-color: {textHoverColor}" on:click={goto}>
	<span class="content">
		{text}
		<slot />
	</span>
</button>

<style>
	button {
		position: relative;
		width: 100%;
		height: 1.7rem;
		padding: 0.4rem 0.6rem;
		border-radius: 0.1rem;
		background-color: transparent;
		border: solid 0.5px var(--color-white);
		border-bottom: transparent;
		color: var(--color-white);
		z-index: 20;
		transition: all 0.2s ease-in-out;
	}

	button:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 0;
		z-index: -1;
		height: 10%;
		width: 100%;
		left: 0%;
		right: 0;
		opacity: 1;
		border-radius: 0rem 0rem 0.1rem 0.1rem;
		background: linear-gradient(
			65deg,
			var(--border-color) 0%,
			var(--border-color) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	button:hover:after {
		height: 100%;
		border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
	}

	button:hover {
		color: var(--text-hover-color);
		border: none;
		transition: all 0.2s ease-in-out;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.content {
			font-size: 0.6rem;
		}
	}
</style>
