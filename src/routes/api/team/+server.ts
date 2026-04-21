import { json } from '@sveltejs/kit';
import type { TeamMember } from '$lib/types/types';
import { isLocale } from '$lib/paraglide/runtime';

function getTeam(lang: string): TeamMember[] {
	const members: TeamMember[] = [];
	const locale = isLocale(lang) ? lang : 'en';
	const paths = import.meta.glob('/src/lib/data/team/**/*.md', { eager: true });

	for (const path in paths) {
		if (!path.includes(`/team/${locale}/`)) continue;
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<TeamMember, 'slug'>;
			members.push({ ...metadata, slug });
		}
	}

	return members.sort((a, b) => a.order - b.order);
}

export async function GET({ url }) {
	const lang = url.searchParams.get('lang') ?? 'en';
	return json(getTeam(lang));
}
