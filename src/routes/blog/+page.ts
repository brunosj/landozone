import type { Blog } from '$lib/types/types';
import { getLocale } from '$lib/paraglide/runtime';

export async function load({ fetch }) {
	const response = await fetch(`api/blog?lang=${getLocale()}`);
	const blogs: Blog[] = await response.json();
	return { blogs };
}
