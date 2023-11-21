<script>
	import { activePage } from '$lib/stores/activeSection';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import BSJ3 from '$lib/assets/images/bsj_3.jpg';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconLinkedIn from '$lib/assets/svg/icons/SimpleIconsLinkedin.svelte';
	import IconMail from '$lib/assets/svg/icons/MaterialSymbolsLightMailRounded.svelte';
	import IconTelegram from '$lib/assets/svg/icons/SimpleIconsTelegram.svelte';
	import Button from '$components/v2/UI/Button.svelte';
</script>

<section>
	<div class="container">
		<div class="content">
			{#if $activePage === 3}
				<div class="grid">
					<div class="description">
						<h2 transition:fly={{ y: 50, duration: 750, delay: 500 }}>get in touch!</h2>

						<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
							Have an exciting project you would like to collaborate on? <br /> Send me a message and
							I would be happy to further discuss your ideas with you.
						</p>
						<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
							<a id="mail" href="mailto:contact@landozone.net">contact@landozone.net</a>
						</p>
					</div>
					<div class="info grid" transition:fly={{ y: 50, duration: 750, delay: 750 }}>
						<div class="grid-item">
							<div class="picture">
								<img src={BSJ3} alt="BSJ" />
								<div>
									<h3>Bruno SJ</h3>
									<p>Web Developer/Designer</p>
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
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--color-primary);
		width: 100%;
		height: 100%;
		color: var(--color-black);
	}

	h2 {
		color: var(--color-black);
	}

	h3 {
		color: var(--color-secondary);
		margin-bottom: 0.2rem;
	}

	img {
		width: 5.5rem;
		border-radius: 100%;
		margin-bottom: 1.5rem;
	}

	#mail {
		font-size: 1.3rem;
		position: relative;
		z-index: 20;
	}

	#mail:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 10%;
		z-index: -1;
		height: 30%;
		width: 104%;
		left: -1%;
		opacity: 0.5;
		border-radius: 2px;
		background: linear-gradient(
			65deg,
			var(--color-secondary) 0%,
			var(--color-secondary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	#mail:hover:after {
		height: 80%;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.mobile {
		display: none;
	}

	.desktop {
		display: flex;
	}

	.icon:hover {
		cursor: pointer;
		color: var(--color-secondary);
		transition: all 0.3s ease-in-out;
	}

	.info {
		background-color: var(--color-black);
		color: var(--color-white);
		padding: 4rem;
		border-radius: 12px;
		width: 75%;
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
		transform: translate(1rem, -1rem);
		box-sizing: border-box;
		pointer-events: none;
	}

	.info p {
		font-size: 1rem;
	}

	.description > * + * {
		margin-top: 1.5rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.grid-item {
		margin: auto;
	}

	.description {
		margin: auto 0;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.picture p {
			font-size: 0.8rem;
		}

		.info {
			width: 80%;
			padding: 1.5rem 2rem;
		}

		.info::before {
			transform: translate(0.5rem, -0.5rem);
		}

		.picture {
			display: flex;
			flex-direction: row;
			align-items: center;
			column-gap: 1rem;
		}

		img {
			margin-bottom: 0;
		}

		.mobile {
			display: flex;
		}

		.desktop {
			display: none;
		}

		#mail {
			font-size: 1.1rem;
		}
	}
</style>
