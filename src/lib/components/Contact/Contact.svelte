<script lang="ts">
	import ArrowLink from '$components/UI/ArrowLink.svelte';
	import Form from './Form.svelte';
</script>

<section id="contact" class="page-section">
	<div class="page-container">
		<div class="content">
			<div class="description">
				<h2>get in touch</h2>
				<p>
					Use the contact form or send me a message and I will be happy to further discuss your
					ideas with you.
				</p>
				<p>
					<a id="underline" href="mailto:contact [at] landozone.net">contact [at] landozone.net</a>
				</p>
			</div>
			<Form />
			<span class="imprint-link">
				<ArrowLink path="/imprint">imprint + privacy policy</ArrowLink>
			</span>
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

	.description {
		width: 100%;
	}

	.description > * + * {
		margin-top: 1rem;
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

	@media (min-width: 55em) {
		h2 {
			margin-bottom: 3rem;
		}

		#underline {
			font-size: 1.2rem;
		}

		.description {
			margin-top: 2rem;
			width: 66%;
		}

		.imprint-link {
			margin-bottom: 4rem;
		}
	}
</style>
