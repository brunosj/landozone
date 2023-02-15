<script>
	import { menu } from '$data/menu';
	import NavLink from './NavLink.svelte';
</script>

<aside>
	<nav class="">
		<ul class="space-y-2">
			{#each menu as item}
				<h4>
					<NavLink href={item.slug} title={item.name} />
				</h4>
			{/each}
		</ul>
	</nav>
</aside>
