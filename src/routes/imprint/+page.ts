import { getLocale } from '$lib/paraglide/runtime';

export async function load() {
	const locale = getLocale();
	try {
		const item = await import(`../../lib/data/imprint/${locale}.md`);
		return {
			content: item.default,
			meta: item.metadata
		};
	} catch (postError) {
		return { content: null, meta: null };
	}
}
