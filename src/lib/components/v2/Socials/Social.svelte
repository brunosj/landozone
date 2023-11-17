<script lang="ts">
	export let name: string = '';
	export let url: string;
</script>

<div>
	<a href={url} target="_blank" rel="noreferrer">
		<div class="socials">
			<div class="socialLogo">
				<slot />
			</div>

			{#if name}
				<!-- content here -->
				<p>
					{name}
				</p>
			{/if}
		</div>
	</a>
</div>

<style>
	p {
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
		font-family: 'IBM Plex Mono', sans-serif;
	}

	/* .socials {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem;
		transition: background-color 300ms ease-in-out;
		background-color: transparent;
	}

	.socials:hover {
		background-color: #8786df;
	} */

	/* .socialLogo {
		width: 1.25rem;
		height: 1.25rem;
	} */
</style>
