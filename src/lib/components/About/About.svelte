<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Chart from '$lib/assets/svg/chart.svelte';
	import Website from '$lib/assets/svg/website.svelte';
	import IconD3 from '$lib/assets/svg/icons/SimpleIconsD3dotjs.svelte';
	import IconJS from '$lib/assets/svg/icons/SimpleIconsJavascript.svelte';
	import IconTS from '$lib/assets/svg/icons/SimpleIconsTypescript.svelte';
	import IconR from '$lib/assets/svg/icons/SimpleIconsR.svelte';
	import IconReact from '$lib/assets/svg/icons/SimpleIconsReact.svelte';
	import IconSvelte from '$lib/assets/svg/icons/SimpleIconsSvelte.svelte';
	import { background, font } from '$lib/stores/store';

	let element;
	let intersecting = false;
</script>

<section
	id="about"
	style:background-color={$background}
	style:color={$font}
	class="fullpage-section">
	<div class="page-container" bind:this={element}>
		<IntersectionObserver {element} bind:intersecting once threshold={0.5}>
			{#if intersecting}
				<div class="content grid">
					<div class="description">
						<h2 transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>about</h2>
						<div transition:fade={{ duration: 500, delay: 250, easing: cubicInOut }}>
							<p>
								My expertise lies in <span>front-end development</span> (with some back-end here and
								there) and <span>data visualization</span>. I am based in Berlin and have roots in
								political science and climate policy.
							</p>
							<p>
								I enhance workflows and build applications using the latest web technologies, being
								well-versed in
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
							<p>
								These tools enable me to create elegant and performant websites and produce
								compelling data stories.
							</p>
						</div>

						<div class="icons">
							<IconJS width="1.5rem" />
							<IconTS width="1.5rem" />
							<IconSvelte width="1.5rem" />
							<IconReact width="1.5rem" />
							<IconD3 width="1.5rem" />
							<IconR width="1.5rem" />
						</div>
					</div>
					<!-- <div>
				services: Branding / Visual Identity Art Direction Web Design & Development E-commerce
				Consulting & Development Animation / Motion Graphics Design Consulting
			</div> -->
					<div class="figures">
						<div class="website">
							<Website />
						</div>
						<div class="chart">
							<Chart />
						</div>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		/* background-color: var(--color-secondary); */
		width: 100%;
		height: 100%;
		color: var(--color-black);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
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
		width: 102%;
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

	.grid p {
		margin-bottom: 1rem;
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

		/* .svg-element {
			opacity: 0.15;
		}

		.svg-bg {
			width: 100%;
			top: 0%;
		} */

		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 6rem;
		}

		.grid p {
			margin-bottom: 1.5rem;
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
