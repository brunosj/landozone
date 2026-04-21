<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';

	import type { Project } from '$lib/types/types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Button from '$components/UI/Button.svelte';
	import IconGithub from '$lib/assets/svg/icons/SimpleIconsGithub.svelte';
	import IconInternet from '$lib/assets/svg/icons/IconoirInternet.svelte';
	import Tag from '$components/UI/Tag.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	import * as m from '$lib/paraglide/messages';
	let { data } = $props();

	let item: Project = $derived(data.meta);
	let name = $derived(item.name);
	let url = $derived(item.url);
	let color = $derived(item.color);
	let image = $derived(item.image);
	let keepTextLight = $derived(item.keepTextLight);
	let repo = $derived(item.repo);
	let type = $derived(item.type);
	let description = $derived(item.description);
	let technologies = $derived(item.technologies);
	let features = $derived(item.features);
	let client = $derived(item.client);
	let team = $derived(item.team);

	let textColor = $derived(keepTextLight ? '#fff' : '#202129');

	let element: HTMLElement | null = $state() as HTMLElement | null;
	let intersecting = $state(false);
</script>

<Seo title={`${name} | landozone`} {description} image={`${PUBLIC_SITE_URL}/${image}`} />

<article bind:this={element}>
	<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
		{#if intersecting}
			<section style={`background-color:${color};`}>
				<div class="header" style={`color:${textColor}`}>
					<div class="title" transition:fade={{ duration: 350, delay: 0, easing: cubicInOut }}>
						<p id="type">{type}</p>
						<h2>{name}</h2>
						<p class="description">
							{description}
						</p>
					</div>
					<div class="details" transition:fade={{ duration: 350, delay: 250, easing: cubicInOut }}>
						<div class="client-block">
							<p class="category">{m.project_client()}</p>
							<p class="client-value">{client}</p>
						</div>
						<!-- {#if team.length > 0}
							<div class="team-block">
								<p class="category">{m.project_team()}</p>
								<ul class="feature">
									{#each team as member}
										<span>{member}</span>
										{#if member !== team[team.length - 1]}
											<span>{' - '}</span>
										{/if}
									{/each}
								</ul>
							</div>
						{/if} -->
						{#if features.length > 0}
							<div class="features">
								<p class="category">{m.features()}</p>
								<ul class="feature">
									{#each features as item}
										<span>
											{item}
										</span>
										{#if item !== features[features.length - 1]}
											<span>
												{' - '}
											</span>
										{/if}
									{/each}
								</ul>
							</div>
						{/if}
						{#if technologies.length > 0}
							<div class="technologies">
								<p class="category">{m.technologies()}</p>
								<ul class="technology">
									{#each technologies as item}
										<Tag {keepTextLight}>
											{item}
										</Tag>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</section>

			<section class="page-container">
				<div class="links" transition:fade={{ duration: 350, delay: 500, easing: cubicInOut }}>
					{#if url}
						<div class="link">
							<Button to={url} text={m.visit_site()} {color} {keepTextLight}>
								<IconInternet width="1.3rem" />
							</Button>
						</div>
					{/if}

					{#if repo}
						<div class="link">
							<Button to={repo} text={m.view_code()} {color} {keepTextLight}>
								<IconGithub width="1.3rem" />
							</Button>
						</div>
					{/if}
				</div>
				<div class="markdown" transition:fade={{ duration: 350, delay: 500, easing: cubicInOut }}>
					<data.content />
				</div>
			</section>
		{/if}
	</IntersectionObserver>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		background-color: var(--color-black);
		color: white;
		position: relative;
		margin-top: 3rem;
		margin-bottom: 2rem;
	}

	section {
		margin: auto;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.7rem;
		column-gap: 0.7rem;
		margin: 0.5rem 0;
	}

	#type {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.7px;
		font-family: 'IBM Plex Mono', sans-serif;
	}

	.header {
		max-width: 85%;
		height: 100%;
		margin: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1.5rem 0;
	}

	.header > * + * {
		margin-top: 1rem;
	}

	.title > * + * {
		margin-top: 0.5rem;
	}

	.description {
		font-size: 0.9rem;
		line-height: 1.1rem;
	}

	.features {
		display: none;
	}

	.client-block,
	.team-block {
		display: none;
	}

	.client-value {
		font-size: 0.9rem;
		line-height: 1.2rem;
		margin: 0;
	}

	.category {
		display: none;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		height: 100%;
		margin: 3rem auto;
		width: 100%;
	}

	.link {
		display: flex;
		width: 50%;
	}

	.details > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 55em) {
		.links {
			width: 75%;
		}

		.link {
			width: 40%;
		}

		.markdown {
			width: 75%;
			margin: auto;
		}
	}

	@media (min-width: 60em) {
		ul {
			row-gap: 0.5rem;
			column-gap: 0.7rem;
		}

		.markdown {
			width: 60%;
			margin: auto;
		}

		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			padding: 2rem;
			width: 75%;
		}

		.title {
			margin: auto 0;
		}

		.description {
			font-size: 1.1rem;
			line-height: 1.8rem;
		}

		.category {
			display: inline;
			text-transform: uppercase;
			letter-spacing: 0.7px;
			font-family: 'IBM Plex Mono', sans-serif;
			font-size: 1rem;
			/* font-weight: 600; */
		}

		.features {
			display: block;
		}

		.client-block,
		.team-block {
			display: block;
		}

		.client-value {
			font-size: 1rem;
			line-height: 1.35;
			margin: 0;
		}

		.details ul.feature span {
			font-size: 1rem;
			line-height: 1.35;
		}

		.details {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.details > * + * {
			margin-top: 0;
		}

		.details .category {
			display: block;
			margin: 0 0 0.25rem;
		}

		.details :is(ul) {
			margin: 0;
		}

		.links {
			width: 60%;
		}

		.link {
			width: 30%;
		}
	}
</style>
