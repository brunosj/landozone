<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let width: string = '24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} viewBox="0 0 24 24" {...$$props}
	><path
		fill="currentColor"
		d="m12 16.848l4.246-4.24q.14-.14.342-.153t.366.153q.16.16.16.354q0 .194-.16.353l-4.389 4.389q-.13.13-.267.183q-.136.053-.298.053t-.298-.053q-.137-.052-.267-.183l-4.389-4.389q-.14-.14-.153-.34q-.012-.202.153-.367q.16-.16.354-.16t.354.16L12 16.848Zm0-5.961l4.246-4.24q.14-.141.342-.154t.366.153q.16.16.16.354t-.16.354l-4.389 4.388q-.13.131-.267.184q-.136.053-.298.053t-.298-.053q-.137-.053-.267-.184L7.046 7.354q-.14-.14-.153-.341t.153-.367q.16-.16.354-.16t.354.16L12 10.886Z" /></svg>
