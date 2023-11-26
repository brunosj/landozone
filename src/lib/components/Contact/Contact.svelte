<script lang="ts">
	import { activePage } from '$lib/stores/activeSection';
	import { fade, fly } from 'svelte/transition';
	import BSJ3 from '$lib/assets/images/bsj_3.jpg';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconLinkedIn from '$lib/assets/svg/icons/SimpleIconsLinkedin.svelte';
	import IconMail from '$lib/assets/svg/icons/MaterialSymbolsLightMailRounded.svelte';
	import IconTelegram from '$lib/assets/svg/icons/SimpleIconsTelegram.svelte';
	import Button from '$components/UI/Button.svelte';
	import Waveform from '$lib/assets/svg/waveform.svelte';
</script>

<section id="contact">
	<div class="svg-bg">
		<Waveform />
	</div>
	{#if $activePage === 3}
		<div class="fullpage-container">
			<div class="content">
				<div class="grid">
					<div class="description">
						<!-- <h3 transition:fly={{ y: 50, duration: 750, delay: 500 }}>get in touch!</h3> -->

						<p transition:fly={{ y: 50, duration: 750, delay: 500 }}>
							Have an exciting project you would like to collaborate on?
						</p>
						<p transition:fly={{ y: 50, duration: 750, delay: 500 }}>
							Send me a message and I would be happy to further discuss your ideas with you.
						</p>
						<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
							<a id="underline" href="mailto:contact@landozone.net">contact@landozone.net</a>
						</p>
					</div>
					<div class="info grid" transition:fly={{ y: 50, duration: 750, delay: 500 }}>
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
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		/* background-color: var(--color-black); */
		width: 100%;
		height: 100%;
		color: var(--color-white);
		position: relative;
	}

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

	.svg-bg {
		position: absolute;
		top: 25%;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.5;
	}

	.picture {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 1rem;
	}

	.picture span {
		font-size: 0.7rem;
	}

	#underline {
		font-size: 1.1rem;
		position: relative;
		z-index: 20;
	}

	#underline:after {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		bottom: 10%;
		z-index: -1;
		height: 30%;
		width: 102%;
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

	#underline:hover:after {
		height: 80%;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.info {
		background-color: var(--color-gray);
		width: 80%;
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

	.description > * + * {
		margin-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.grid-item {
		margin: auto;
	}

	.description {
		margin: auto 0;
	}

	.mobile {
		display: flex;
	}

	.desktop {
		display: none;
	}

	@media (min-width: 50em) {
		img {
			width: 5.5rem;
			border-radius: 100%;
			margin-bottom: 1.5rem;
		}

		#underline {
			font-size: 1.2rem;
		}

		.svg-bg {
			width: 100%;
			top: -37%;
		}

		.grid {
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
			width: 75%;
		}

		.info::before {
			transform: translate(1rem, -1rem);
		}

		.icons {
			width: 80%;
		}
		.desktop {
			display: flex;
		}

		.mobile {
			display: none;
		}
	}
</style>
