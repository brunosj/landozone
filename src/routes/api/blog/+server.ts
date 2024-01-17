import { json } from '@sveltejs/kit';
import type { Blog } from '$lib/types/types';

async function getBlogs() {
	const blogs: Blog[] = [];

	const paths = import.meta.glob('/src/lib/data/blog/*.md', { eager: true });

	for (const path in paths) {
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

export async function GET() {
	const blogs = await getBlogs();
	return json(blogs);
}
