<script lang="ts">
	import Logo from '$lib/assets/svg/logos/logo.svelte';
	import { menu } from '$lib/data/menu';
</script>

<header>
	<nav class="">
		<div class="logo">
			<a href="/">
				<div class="logo-shape">
					<Logo />
				</div>
			</a>
		</div>
		<div class="menu">
			{#each menu as { name, slug }}
				<li>
					<a href={slug} class="active-page">
						<span>{name}</span>
					</a>
				</li>
			{/each}
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		z-index: 50;
		top: 0.5rem;
		background-color: rgb(var(--color-blackRGB), 1);
	}

	nav {
		right: 0;
		display: flex;
		align-items: center;
		margin: 0.6rem auto;
		flex-direction: row;
		justify-content: space-between;
		max-width: 95%;
	}

	.active-page {
		text-align: right;
	}

	.logo-shape {
		width: 1.5rem;
	}

	.menu {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
	}

	li {
		list-style: none;
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: rgb(var(--color-blackRGB), 0);
		display: inline-block;
		transition: border 0.2s linear;
	}

	li:hover {
		border-bottom-color: #d7d2d2;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 0.7rem;
		font-family: 'Sora Variable', sans-serif;
	}

	@media (min-width: 50em) {
		span {
			font-size: 0.9rem;
		}

		.logo-shape {
			width: 1.7rem;
		}
	}
</style>
