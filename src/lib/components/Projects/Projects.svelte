<script lang="ts">
	import { projects } from '$data/projects';
	import Heading from '$components/Nav/Heading.svelte';
</script>

<section class="layout">
	<Heading title="recent projects" />
	<ul class="flex flex-wrap">
		{#each projects as project}
			<li class="lg:w-1/2 pb-6">
				<h3 class="text-pri-500 font-bold mb-1 ">
					{project.name}
				</h3>
				<p class="text-base md:text-lg">
					{project.description}
				</p>
				<a href={project.url} target="_blank" rel="noreferrer">
					<p class="inline text-base font-mono  duration-300 hover:bg-sec ease-in-out">
						{project.url.slice(8, -1)}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
