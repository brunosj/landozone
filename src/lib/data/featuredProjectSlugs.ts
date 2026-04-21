/**
 * Slugs shown in the landing “recent projects” section. Edit this list only — not per-locale markdown.
 */
const FEATURED_SLUGS = [
	'birmingham-now',
	// 'dataviz-work',
	// 'dfc-studios',
	'flare',
	// 'net-zero-land-rights',
	'powerkonnekt',
	'steelwatch-corporate-scorecard',
	'tegh'
] as const;

const featuredSet = new Set<string>(FEATURED_SLUGS);

export function isFeaturedProjectSlug(slug: string): boolean {
	return featuredSet.has(slug);
}
