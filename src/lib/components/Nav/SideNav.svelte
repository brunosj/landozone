<script>
	import { menu } from '$data/menu';
	import NavLink from './NavLink.svelte';
</script>

<aside>
	<nav>
		<ul>
			{#each menu as item}
				<li>
					<NavLink href={item.slug} title={item.name} />
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	li {
		display: flex;
		margin-bottom: 0.5rem;
	}

	li:last-child {
		margin-bottom: 0;
	}
</style>
