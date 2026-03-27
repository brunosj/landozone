import { json } from '@sveltejs/kit';
import type { Blog } from '$lib/types/types';
import { isLocale } from '$lib/paraglide/runtime';

async function getBlogs(lang: string) {
	const blogs: Blog[] = [];
	const locale = isLocale(lang) ? lang : 'en';

	const paths = import.meta.glob('/src/lib/data/blog/**/*.md', { eager: true });

	for (const path in paths) {
		if (!path.includes(`/blog/${locale}/`)) continue;
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Blog, 'slug'>;
			const post = { ...metadata, slug } as Blog;
			blogs.push(post);
		}
	}

	return blogs;
}

export async function GET({ url }) {
	const lang = url.searchParams.get('lang') ?? 'en';
	const blogs = await getBlogs(lang);
	return json(blogs);
}
