<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang='ts'>
	export let width:string = '24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} viewBox="0 0 24 24" {...$$props}
	><path
		fill="currentColor"
		d="M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938a6.375 6.375 0 1 1 0 12.75H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375zM24 7.563A6.938 6.938 0 0 0 17.062.625h-8a13.415 13.415 0 0 1 4.686 5h3.314a1.94 1.94 0 0 1 0 3.876h-1.938a13.43 13.43 0 0 1 0 5h1.938a1.94 1.94 0 0 1 0 3.876h-3.314a13.415 13.415 0 0 1-4.686 5h8a6.939 6.939 0 0 0 5.333-11.375A6.946 6.946 0 0 0 24 7.563z" /></svg>
