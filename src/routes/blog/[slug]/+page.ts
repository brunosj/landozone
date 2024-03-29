export async function load({ params }) {
	try {
		const item = await import(`../../../lib/data/blog/${params.slug}.md`);
		return {
			content: item.default,
			meta: item.metadata
		};
	} catch (postError) {
		return { content: null, meta: null };
	}
}
