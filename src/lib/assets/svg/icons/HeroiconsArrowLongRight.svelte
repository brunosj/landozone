<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let width: string = '24';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	style="rotate:-45deg;"
	viewBox="0 0 24 24"
	{...$$props}
	><path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.5"
		d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
