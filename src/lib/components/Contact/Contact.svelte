<script lang="ts">
	import Heading from '$components/Nav/Heading.svelte';
	import LinkedIn from '$lib/assets/svg/linkedIn.svelte';
	import Social from '$components/Socials/Social.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<section class="layout" in:fly={{ y: 100, duration: 600 }}>
		<Heading title="contact" />
		<p>Curious about collaborating on projects?</p>
		<p class="paragraph">Get in touch at:</p>
		<p>
			<span class="contactMail">
				<span>contact </span>
				<span class="contactMailGreen ">[at]</span>
				<span>landozone</span>
				<span class="contactMailGreen ">[dot]</span>
				<span>net</span>
			</span>
		</p>
		<div class="socials" in:fade={{ delay: 300, duration: 600 }}>
			<Social name="LinkedIn" url="https://www.linkedin.com/in/brunosj/">
				<LinkedIn />
			</Social>
		</div>
	</section>
{/if}

<style>
	.paragraph {
		padding-top: 0.75rem;
	}

	.contactMail {
		letter-spacing: -0.05rem;
		font-weight: 700;
	}

	.contactMailGreen {
		color: #00ffcd;
	}
</style>
