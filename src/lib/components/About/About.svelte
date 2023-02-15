<script lang="ts">
	import Heading from '$components/Nav/Heading.svelte';
	import LinkedIn from '$lib/assets/svg/linkedIn.svelte';
	import Social from '$components/Socials/Social.svelte';
	import Github from '$lib/assets/svg/github.svelte';
</script>

<section class="layout">
	<Heading title="about me" />
	<p>
		Combining technical aptitude with a deep understanding of climate policy to create innovative
		web solutions that make a difference. <br /><br />
		Dedicated to leveraging technology to address environmental and social issues and drive meaningful
		change My previous experience as a researcher and communications officer in the climate policy field
		have provided me with a thorough understanding of many of the most pressing issues our world is facing.
		I am now looking forward to pair this knowledge with my programming skills to work on useful applications.
	</p>
	<div class="mt-6 flex gap-12">
		<Social name="Github" url="https://github.com/brunosj">
			<Github />
		</Social>
		<Social name="LinkedIn" url="https://www.linkedin.com/in/brunosj/">
			<LinkedIn />
		</Social>
	</div>
</section>
