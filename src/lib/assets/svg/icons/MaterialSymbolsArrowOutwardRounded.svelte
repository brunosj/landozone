<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let width: string = '24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} viewBox="0 0 24 24" {...$$props}
	><path
		fill="currentColor"
		d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7L14.6 7H7q-.425 0-.713-.288T6 6q0-.425.288-.713T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17q-.425 0-.713-.288T16 16V8.4Z" /></svg>
