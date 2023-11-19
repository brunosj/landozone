<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
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
	<div class="container">
		{#if $activePage === 1}
			<div class="content">
				<div class="description" transition:fly={{ x: -500, duration: 1500 }}>
					<h1>what I do</h1>
					<p>
						My expertise lies in front-end development (with some back-end here and there) and data
						visualization. I enhance workflows and build applications using the latest web
						technologies, being well-versed in <a
							href="https://www.typescriptlang.org/"
							target="_blank"
							rel="noreferrer">JavaScript/TypeScript</a>
						tools including frameworks like
						<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
						and
						<a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, the
						<a href="https://nodejs.org/en" target="_blank" rel="noreferrer">node.js</a>
						environment and the
						<a href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js</a> library.
					</p>
					<p>
						These tools enable me to create elegant and performant websites and produce compelling
						data stories.
					</p>
					<div class="icons">
						<IconJS width="1.5rem" />
						<IconTS width="1.5rem" />
						<IconSvelte width="1.5rem" />
						<IconReact width="1.5rem" />
						<IconD3 width="1.5rem" />
						<IconR width="1.5rem" />
					</div>
				</div>
				<div class="figures">
					<div class="website" transition:fly={{ x: 500, duration: 1750 }}>
						<Website />
					</div>
					<div class="chart" transition:fly={{ x: 500, duration: 1750 }}>
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

	a {
		position: relative;
		/* font-family: 'IBM Plex Mono', sans-serif; */
		font-size: 1.2rem;
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
		border-radius: 0.3rem;
		background: linear-gradient(
			65deg,
			var(--color-primary) 0%,
			var(--color-primary) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	a:hover:after {
		height: 80%; /* Expand the underline on hover */
	}

	h1 {
		color: var(--color-black);
	}

	.description > * + * {
		margin-top: 1.5rem;
	}

	.description {
		width: 40%;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.website {
		position: absolute;
		right: 20rem;
		bottom: 8rem;
		width: 20%;
		background-color: var(--color-gray);
		padding: 2rem;
		border-radius: 1.5rem;
		z-index: auto;
	}

	.chart {
		position: absolute;
		right: 0;
		top: 12rem;
		width: 20%;
		background-color: var(--color-gray);
		padding: 2rem;
		z-index: auto;
		border-radius: 1.5rem;
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
		border-radius: 1.5rem;
		border: 2px solid var(--color-primary);
		transform: translate(1rem, -1rem);
		box-sizing: border-box;
	}

	@media (max-width: 768px) and (max-height: 667px) {
		.description {
			width: 100%;
		}

		.website {
			position: absolute;
			left: 0;
			bottom: 10%;
			width: 30%;
			padding: 1rem;
		}

		.chart {
			position: absolute;
			right: 0;
			top: 0rem;
			width: 30%;
			padding: 1rem;
		}

		.icons {
			display: none;
		}

		.chart::before {
			transform: translate(0.5rem, -0.5rem);
		}

		.website::before {
			transform: translate(0.5rem, -0.5rem);
		}
	}

	@media (max-width: 768px) and (max-height: 926px) {
		.description {
			width: 100%;
		}

		.website {
			position: absolute;
			left: 0;
			bottom: 10%;
			width: 40%;
			padding: 1rem;
		}

		.chart {
			position: absolute;
			right: 0;
			top: 0rem;
			width: 40%;
			padding: 1rem;
		}

		.chart::before {
			transform: translate(0.5rem, -0.5rem);
		}

		.website::before {
			transform: translate(0.5rem, -0.5rem);
		}
	}
</style>
