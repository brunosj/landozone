<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Chart from '$lib/assets/svg/chart.svelte';
	import Website from '$lib/assets/svg/website.svelte';
	import IconD3 from '$lib/assets/svg/icons/SimpleIconsD3dotjs.svelte';
	import IconJS from '$lib/assets/svg/icons/SimpleIconsJavascript.svelte';
	import IconTS from '$lib/assets/svg/icons/SimpleIconsTypescript.svelte';
	import IconR from '$lib/assets/svg/icons/SimpleIconsR.svelte';
	import IconReact from '$lib/assets/svg/icons/SimpleIconsReact.svelte';
	import IconSvelte from '$lib/assets/svg/icons/SimpleIconsSvelte.svelte';
	import { activePage } from '$lib/stores/activeSection';
</script>

<section id="about">
	<div class="fullpage-container">
		{#if $activePage === 1}
			<div class="content grid">
				<div class="description">
					<!-- <h2 transition:fly={{ y: 50, duration: 750, delay: 500 }}>about</h2> -->
					<p transition:fly={{ y: 50, duration: 750, delay: 500 }}>
						My expertise lies in <span>front-end development</span> (with some back-end here and
						there) and <span>data visualization</span>. I enhance workflows and build applications
						using the latest web technologies, being well-versed in
						<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"
							>JavaScript/TypeScript</a>
						tools including frameworks like
						<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
						and
						<a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, the
						<a href="https://nodejs.org/en" target="_blank" rel="noreferrer">node.js</a>
						environment and the
						<a href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js</a> library.
					</p>
					<p transition:fly={{ y: 50, duration: 750, delay: 750 }}>
						These tools enable me to create elegant and performant websites and produce compelling
						data stories.
					</p>
					<div class="icons" transition:fly={{ y: 50, duration: 750, delay: 750 }}>
						<IconJS width="1.5rem" />
						<IconTS width="1.5rem" />
						<IconSvelte width="1.5rem" />
						<IconReact width="1.5rem" />
						<IconD3 width="1.5rem" />
						<IconR width="1.5rem" />
					</div>
				</div>
				<div class="figures">
					<div class="website" transition:fly={{ y: 50, duration: 750, delay: 1000 }}>
						<Website />
					</div>
					<div class="chart" transition:fly={{ y: 50, duration: 750, delay: 1000 }}>
						<Chart />
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		background-color: var(--color-secondary);
		width: 100%;
		height: 100%;
		color: var(--color-black);
	}

	span {
		font-weight: 600;
	}

	a {
		position: relative;
		/* font-family: 'IBM Plex Mono', sans-serif; */
		font-size: 1rem;
		z-index: 20;
	}

	a:after {
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
			var(--color-primary) 0%,
			var(--color-primary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	a:hover:after {
		height: 80%;
	}

	.grid {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}

	.description {
		width: 100%;
	}

	.description > * + * {
		margin-top: 1rem;
	}
	.icons {
		display: none;
	}

	.figures {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		gap: 2rem;
	}

	.website {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-gray);
		border-radius: 12px;
		z-index: auto;
	}

	.chart {
		position: relative;
		width: 30%;
		padding: 0.5rem;
		height: auto;
		background-color: var(--color-gray);
		border-radius: 12px;
		z-index: auto;
	}

	.chart::before,
	.website::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0.5;
		/* z-index: -1; */
		border-radius: 12px;
		border: 2px solid var(--color-primary);
		transform: translate(0.5rem, -0.5rem);
		box-sizing: border-box;
	}

	@media (min-width: 50em) {
		a {
			font-size: 1.2rem;
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 6rem;
		}

		.description > * + * {
			margin-top: 1.5rem;
		}

		.icons {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;
		}

		.website {
			width: 30%;
			padding: 2rem;
			margin-top: 12rem;
		}

		.chart {
			width: 30%;
			padding: 2rem;
			margin-bottom: 12rem;
		}

		.chart::before,
		.website::before {
			transform: translate(1rem, -1rem);
		}
	}
</style>
