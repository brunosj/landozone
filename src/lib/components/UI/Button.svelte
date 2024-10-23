<script lang="ts">
	interface Props {
		to: string;
		text: string;
		color?: string;
		keepTextLight?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		to,
		text,
		color = '#8786df',
		keepTextLight = false,
		children
	}: Props = $props();

	let textHoverColor = keepTextLight ? '#fff' : '#202129';

	const isExternal = to.slice(0, 4) === 'http';
</script>

<a
	href={to}
	target={isExternal ? '_blank' : ''}
	style="--border-color: {color}; --text-hover-color: {textHoverColor}">
	<span class="button-content">
		{text}
		{@render children?.()}
	</span>
</a>

<style>
	a {
		position: relative;
		width: 100%;
		height: 1.5rem;
		padding: 0.4rem 0.4rem;
		border-radius: 2px;
		background-color: var(--color-black);
		border: solid 0.5px var(--color-white);
		border-bottom: transparent;
		color: var(--color-white);
		z-index: 20;
		transition: all 0.3s ease-in-out;
	}

	a:after {
		transition: all 0.3s ease-in-out;
		content: '';
		position: absolute;
		bottom: 0;
		z-index: -1;
		height: 10%;
		width: 100%;
		left: 0%;
		right: 0;
		opacity: 1;
		border-radius: 0px 0px 2px 2px;
		background: linear-gradient(
			65deg,
			var(--border-color) 0%,
			var(--border-color) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	a:hover:after {
		height: 100%;
		border-radius: 2px;
	}

	a:hover {
		color: var(--text-hover-color);
		border: none;
		transition: all 0.3s ease-in-out;
	}

	.button-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.6px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 500;
	}

	@media (min-width: 55em) {
		.button-content {
			font-size: 0.7rem;
		}
	}
</style>
