<script lang="ts">
	import { projects } from '$data/projects';
	import Heading from '$components/Nav/Heading.svelte';
</script>

<section class="layout">
	<Heading title="recent projects" />
	<ul>
		{#each projects as project}
			<li>
				<h3>
					{project.name}
				</h3>
				<p>
					{project.description}
				</p>
				<a href={project.url} target="_blank" rel="noreferrer">
					<p class="link">
						{project.url.slice(8, -1)}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	li {
		padding-bottom: 1.5rem;
	}

	h3 {
		color: #00ffcd;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	a {
		font-family: IBMPlexMono;
		background-color: #c1bff6;
		transition: all 300ms ease-in-out;
	}

	a:hover {
		background-color: #9795f0;
	}

	.link {
		display: inline;
		font-size: 1rem;
		line-height: 1.5rem;
	}

	@media (min-width: 768px) {
		p {
			font-size: 1.125rem /* 18px */;
			line-height: 1.75rem /* 28px */;
		}
	}

	@media (min-width: 1024px) {
		li {
			width: 50%;
		}
	}
</style>
