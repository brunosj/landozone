import { isFeaturedProjectSlug } from '$lib/data/featuredProjectSlugs';
import { getLocale } from '$lib/paraglide/runtime';

export async function load({ params }) {
	const locale = getLocale();
	try {
		const item = await import(`../../../lib/data/projects/${locale}/${params.slug}.md`);
		return {
			content: item.default,
			meta: {
				...item.metadata,
				featured: isFeaturedProjectSlug(params.slug)
			}
		};
	} catch (postError) {
		return { content: null, meta: null };
	}
}
