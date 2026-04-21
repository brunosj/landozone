<script lang="ts">
	import type { TeamMember } from '$lib/types/types';
	import { getLocale } from '$lib/paraglide/runtime';
	import { getTeamPhoto } from '$lib/utils/getTeamPhoto';
	import Tag from '$components/UI/Tag.svelte';
	import type { Component } from 'svelte';

	interface Props {
		member: TeamMember;
	}

	let { member }: Props = $props();

	/** Two-line stack only when it helps: 3+ words always split at last space; 2 words split only if long enough to likely wrap. */
	const TWO_WORD_SPLIT_MIN_LEN = 15;

	const nameLines = $derived.by(() => {
		const t = member.name.trim();
		const i = t.lastIndexOf(' ');
		if (i === -1) return { given: t, family: null as string | null };

		const words = t.split(/\s+/).filter(Boolean);
		const given = t.slice(0, i);
		const family = t.slice(i + 1);

		if (words.length >= 3) {
			return { given, family };
		}
		if (words.length === 2 && t.length < TWO_WORD_SPLIT_MIN_LEN) {
			return { given: t, family: null };
		}
		return { given, family };
	});

	let Bio = $state<Component | null>(null);

	const teamModules = import.meta.glob('/src/lib/data/team/**/*.md');

	$effect(() => {
		const locale = getLocale();
		const key = `/src/lib/data/team/${locale}/${member.slug}.md`;
		const loader = teamModules[key];
		Bio = null;
		if (!loader) return;
		let cancelled = false;
		loader().then((mod) => {
			const m = mod as { default: Component };
			if (!cancelled) Bio = m.default;
		});
		return () => {
			cancelled = true;
		};
	});
</script>

<article class="card">
	<div class="header">
		<div class="photo-wrap">
			<img src={getTeamPhoto(member.slug)} alt={member.name} width="80" height="80" class="photo" />
		</div>
		<div class="titles">
			<h3>
				{#if nameLines.family}
					<span class="name-given">{nameLines.given}</span>
					<span class="name-family">{nameLines.family}</span>
				{:else}
					{nameLines.given}
				{/if}
			</h3>
			<p class="title">{member.title}</p>
		</div>
	</div>
	<div class="section-skills">
		{#if member.skills?.length}
			<ul class="skills">
				{#each member.skills as skill}
					<Tag keepTextLight={true}>{skill}</Tag>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="section-bio markdown bio">
		{#if Bio}
			<Bio />
		{/if}
	</div>
</article>

<style>
	.card {
		background-color: var(--color-gray);
		border-radius: 12px;
		padding: 1.5rem 1.75rem;
		color: var(--color-white);
		position: relative;
		height: 100%;
		box-sizing: border-box;
	}

	.card::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 12px;
		border: 2px solid var(--color-secondary);
		transform: translate(0.35rem, -0.35rem);
		box-sizing: border-box;
		pointer-events: none;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		position: relative;
		z-index: 1;
	}

	.photo-wrap {
		width: 4.5rem;
		height: 4.5rem;
		flex-shrink: 0;
		border-radius: 50%;
		overflow: hidden;
	}

	.photo {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		filter: grayscale(100%);
	}

	h3 {
		color: var(--color-secondary);
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 1.25;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.1em;
	}

	h3 .name-given,
	h3 .name-family {
		display: block;
		line-height: 1.2;
	}

	.title {
		margin: 0.35rem 0 0;
		font-size: 0.9rem;
		line-height: 1.35;
		color: var(--color-lightgray);
	}

	.section-skills {
		position: relative;
		z-index: 1;
		min-height: 0;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0 0 1rem;
		padding: 0;
	}

	.section-bio {
		position: relative;
		z-index: 1;
		font-size: 1rem;
		line-height: 1.45;
		min-height: 0;
	}

	article.card :global(.section-bio p) {
		font-size: 1rem;
		line-height: 1.45;
		font-weight: 300;
		margin: 0 0 0.65rem;
	}

	article.card :global(.section-bio p:last-child) {
		margin-bottom: 0;
	}

	@media (min-width: 55em) {
		.card {
			padding: 1.5rem 2.25rem 2rem 2.25rem;
		}

		.card::before {
			transform: translate(0.6rem, -0.6rem);
		}

		h3 {
			font-size: 1.2rem;
		}

		.title {
			font-size: 0.9rem;
		}

		.photo-wrap {
			width: 5.5rem;
			height: 5.5rem;
		}
	}
</style>
