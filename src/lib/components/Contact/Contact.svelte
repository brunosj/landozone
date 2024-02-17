<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { background, font } from '$lib/stores/store';
	import ArrowLink from '$components/UI/ArrowLink.svelte';
	import Form from './Form.svelte';
	import Figures from '$components/Figures/Figures.svelte';

	let element;
	let intersecting = false;
</script>

<section id="contact" class="page-section" bind:this={element}>
	<div class="page-container">
		<div class="content">
			<IntersectionObserver {element} bind:intersecting once threshold={0}>
				{#if intersecting}
					<div class="grid">
						<div class="description">
							<h2>get in touch!</h2>
							<p>Have an exciting project you would like to collaborate on?</p>
							<p>
								Use the contact form or send me a message and I will be happy to further discuss
								your ideas with you.
							</p>
							<p>
								<a id="underline" href="mailto:contact [at] landozone.net"
									>contact [at] landozone.net</a>
							</p>
						</div>
						<Figures />
					</div>
					<Form />
					<span class="imprint-link">
						<ArrowLink path="/imprint">imprint + privacy policy</ArrowLink>
					</span>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
</section>

<style>
	section {
		color: var(--color-white);
		position: relative;
		transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
	}

	h2 {
		margin-bottom: 2rem;
	}

	.imprint-link {
		margin-left: auto;
		margin-bottom: 2rem;
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

	.description > * + * {
		margin-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.description {
		margin: auto 0;
	}

	@media (min-width: 55em) {
		h2 {
			margin-bottom: 3rem;
		}

		#underline {
			font-size: 1.2rem;
		}

		.imprint-link {
			margin-bottom: 4rem;
		}
		.grid {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			margin-top: 2rem;
		}
	}
</style>
