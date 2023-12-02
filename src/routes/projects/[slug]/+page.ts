import { projects } from '$lib/data/projectsV2';

export async function load({ params }) {
	const { slug } = params;

	try {
		const entries = projects;
		const item = entries.find((p) => p.slug === slug);

		if (item) {
			return { item };
		} else {
			throw new Error('Entry not found');
		}
	} catch (error) {
		console.error('Error fetching entry data:', error);
		throw error;
	}
}
