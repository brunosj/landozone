<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let width: string = '24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} viewBox="0 0 24 24" {...$$props}
	><path
		fill="currentColor"
		d="M4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615ZM12 11.96q.125 0 .234-.038t.214-.093l7.229-4.733q.142-.086.185-.235q.042-.15-.016-.298q-.038-.192-.252-.278q-.213-.087-.413.034L12 11L4.82 6.32q-.2-.122-.405-.052q-.203.07-.261.276q-.058.154-.016.313q.043.158.185.24l7.229 4.732q.106.056.214.093t.234.038Z" /></svg>
