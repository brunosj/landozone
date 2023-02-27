<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<div>
	<a href={url} target="_blank" rel="noreferrer">
		<div class="socials">
			<div class="socialLogo">
				<slot />
			</div>
			<p>
				{name}
			</p>
		</div>
	</a>
</div>

<style>
	p {
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
		font-family: IBMPlexMono;
	}

	.socials {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem;
		border-width: 1px;
		transition: background-color 300ms ease-in-out;
		border-radius: 0.375rem;
		border-color: #fbc8d4;
		background-color: transparent;
	}

	.socials:hover {
		background-color: #9795f0;
	}

	.socialLogo {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
