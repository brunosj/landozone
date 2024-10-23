<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let width: string = '24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} viewBox="0 0 24 24" {...$$props}
	><path
		fill="currentColor"
		d="M17.187 19.181L24 4.755L0 12.386l9.196 1.963l.043 4.896l2.759-2.617l-2.147-2.076l7.336 4.63z" /></svg>
