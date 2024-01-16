<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import BSJ3 from '$lib/assets/images/bsj_3.jpg';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconLinkedIn from '$lib/assets/svg/icons/SimpleIconsLinkedin.svelte';
	import IconMail from '$lib/assets/svg/icons/MaterialSymbolsLightMailRounded.svelte';
	import IconTelegram from '$lib/assets/svg/icons/SimpleIconsTelegram.svelte';
	import Button from '$components/UI/Button.svelte';
</script>

<div
	class="info info-grid"
	transition:fly={{ x: 100, duration: 500, delay: 250, easing: cubicInOut }}>
	<div class="grid-item">
		<div class="picture">
			<img src={BSJ3} alt="BSJ" />
			<div>
				<h3>Bruno SJ</h3>
				<span>Web Developer/Designer</span>
			</div>
		</div>
	</div>
	<div class="icons grid-item desktop">
		<Button to="mailto:contact@landozone.net" text="Email">
			<IconMail width="1.3rem" />
		</Button>

		<Button to="https://t.me/bruno_sj" text="Telegram">
			<IconTelegram width="1.3rem" />
		</Button>
		<Button to="https://www.linkedin.com/in/brunosj/" text="LinkedIn">
			<IconLinkedIn width="1.3rem" />
		</Button>

		<Button to="https://github.com/brunosj" text="GitHub">
			<IconGithub width="1.3rem" />
		</Button>
	</div>
	<div class="icons grid-item mobile">
		<a href="mailto:contact@landozone.net" target="_blank">
			<IconMail width="1.3rem" />
		</a>
		<a href="https://t.me/bruno_sj" target="_blank">
			<IconTelegram width="1.3rem" />
		</a>
		<a href="https://www.linkedin.com/in/brunosj/" target="_blank">
			<IconLinkedIn width="1.3rem" />
		</a>
		<a href="https://github.com/brunosj" target="_blank">
			<IconGithub width="1.3rem" />
		</a>
	</div>
</div>

<style>
	h3 {
		color: var(--color-secondary);
		font-weight: 500;
		margin-bottom: 0.2rem;
	}

	img {
		width: 4rem;
		margin-bottom: 0rem;
		border-radius: 100%;
	}

	.picture {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 1rem;
	}

	.picture span {
		font-size: 0.9rem;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.info {
		background-color: var(--color-gray);
		width: 100%;
		box-sizing: border-box;
		padding: 1.5rem 2rem;
		color: var(--color-white);
		border-radius: 12px;
		position: relative;
		z-index: auto;
	}

	.info::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		/* z-index: -1; */
		border-radius: 12px;
		border: 2px solid var(--color-secondary);
		transform: translate(0.5rem, -0.5rem);
		box-sizing: border-box;
		pointer-events: none;
	}

	.info-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.grid-item {
		margin: auto;
		position: relative;
	}

	.mobile {
		display: flex;
	}

	.desktop {
		display: none;
	}

	@media (min-width: 50em) {
		h3 {
			margin-bottom: 0.5rem;
		}
		img {
			width: 5.5rem;
			border-radius: 100%;
			margin-bottom: 1.5rem;
		}

		.info-grid {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}

		.picture {
			flex-direction: column;
			align-items: flex-start;
		}

		.picture span {
			font-size: 1rem;
		}

		.info {
			padding: 4rem;
		}

		.info::before {
			transform: translate(1rem, -1rem);
		}

		.icons {
			width: 100%;
		}
		.desktop {
			display: flex;
		}

		.mobile {
			display: none;
		}
	}
</style>
