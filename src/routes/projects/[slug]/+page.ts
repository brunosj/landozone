import { projects } from '$lib/data/projectsV2';

export async function load({ params }) {
	const { slug } = params;

	try {
		const entries = projects;
		const item = entries.find((p) => p.slug === slug);

		if (!item) {
			throw new Error('Entry not found');
		}

		try {
			const post = await import(`../../../lib/data/markdown/${slug}.md`);
			return { item, content: post.default, meta: post.metadata };
		} catch (postError) {
			// console.error('Error fetching post content:', postError);
			return { item, content: null, meta: null };
		}
	} catch (error) {
		console.error('Error fetching entry data:', error);
		throw error;
	}
}
