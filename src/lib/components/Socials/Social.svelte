<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<div class="flex">
	<a
		href={url}
		target="_blank"
		rel="noreferrer"
		class="border border-ter hover:bg-sec-500 duration-300 ease-in-out rounded-md">
		<div class="flex gap-3 p-3">
			<div class="w-5 h-5">
				<slot />
			</div>
			<p class="text-sm font-mono">
				{name}
			</p>
		</div>
	</a>
</div>
