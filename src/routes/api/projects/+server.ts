import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types/types';
import { isLocale } from '$lib/paraglide/runtime';

async function getProjects(lang: string) {
	const projects: Project[] = [];

	const locale = isLocale(lang) ? lang : 'en';
	const paths = import.meta.glob('/src/lib/data/projects/**/*.md', { eager: true });

	for (const path in paths) {
		if (!path.includes(`/projects/${locale}/`)) continue;
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const post = { ...metadata, slug } as Project;
			projects.push(post);
		}
	}

	return projects;
}

export async function GET({ url }) {
	const lang = url.searchParams.get('lang') ?? 'en';
	const projects = await getProjects(lang);
	return json(projects);
}
