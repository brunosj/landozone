<script lang="ts">
	export let rel = 'nofollow noopener noreferrer';
	export let target = '_blank';
	export let href: string;
	export let ariaLabel: string;
	export let image: string;

	// Handle both static and $lib paths
	const imagePath = image.startsWith('$lib') ? image.replace('$lib', '') : image;
</script>

<a aria-label={ariaLabel} {href} {rel} {target}>
	<img src={imagePath} alt={ariaLabel} class="" />
</a>

<style>
	img {
		width: 100%;
		height: auto;
	}
</style>
