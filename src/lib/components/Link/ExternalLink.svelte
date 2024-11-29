<script lang="ts">
	export let rel = 'nofollow noopener noreferrer';
	export let href: string;
	export let ariaLabel: string;
</script>

<a aria-label={ariaLabel} {href} {rel} target="_blank">
	<slot />
</a>
