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
	import IconVue from '$lib/assets/svg/icons/SimpleIconsVue.svelte';
	import IconECharts from '$lib/assets/svg/icons/SimpleIconsApacheecharts.svelte';
	import { background, font } from '$lib/stores/store';
	import Contact from '$components/Contact/Contact.svelte';
	import ContactCard from '$components/Contact/ContactCard.svelte';
	import Figures from '$components/Figures/Figures.svelte';

	let element;
	let intersecting = false;
</script>

<section
	id="about"
	style:background-color={$background}
	style:color={$font}
	class="page-section"
	bind:this={element}>
	<div class="page-container">
		<IntersectionObserver {element} bind:intersecting once threshold={0}>
			{#if intersecting}
				<div class="content grid">
					<div class="description">
						<!-- <h2 transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>about</h2> -->
						<div>
							<p>
								I'm a freelance web designer and developer whose expertise lies in
								<span>web design</span> and
								<span>front-end development</span>.
								<!-- and <span>data visualization</span>.  -->
								I am based in Berlin and have roots in political science and climate policy.
							</p>
							<p>
								My passion for aesthetic excellence shines through in every web design project,
								where I blend innovative design principles with cutting-edge technology to create
								visually stunning and user-friendly websites
							</p>
							<p>
								I enhance workflows and build applications using the latest web technologies, being
								well-versed in JavaScript/TypeScript tools (including <a
									href="https://svelte.dev/"
									target="_blank"
									rel="noreferrer">Svelte</a
								>/<a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>/<a
									href="https://vuejs.org/"
									target="_blank"
									rel="noreferrer">Vue</a
								>), the
								<a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node.js</a>
								environment as well as data viz librairies (<a
									href="https://d3js.org/"
									target="_blank"
									rel="noreferrer">D3.js</a
								>/<a href="https://echarts.apache.org/" target="_blank" rel="noreferrer">ECharts</a
								>)
							</p>
							<p>Check out my projects to discover more about my work!</p>
						</div>

						<div class="icons">
							<IconJS width="1.5rem" />
							<IconTS width="1.5rem" />
							<IconSvelte width="1.5rem" />
							<IconReact width="1.5rem" />
							<IconVue width="1.5rem" />
							<IconD3 width="1.5rem" />
							<IconECharts width="1.5rem" />
							<IconR width="1.5rem" />
						</div>
					</div>
					<ContactCard />
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		color: var(--color-black);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
		color: var(--color-white);
	}

	span {
		font-weight: 600;
	}

	a {
		position: relative;
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
			var(--color-secondary) 0%,
			var(--color-secondary) 100%,
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

	@media (min-width: 55em) {
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
			margin-top: 2rem;
		}

		.icons {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;
		}
	}
</style>
