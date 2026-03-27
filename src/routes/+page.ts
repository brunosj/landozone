import type { Project } from '$lib/types/types';
import { getLocale } from '$lib/paraglide/runtime';

export async function load({ fetch }) {
	const response = await fetch(`api/projects?lang=${getLocale()}`);
	const projects: Project[] = await response.json();
	return { projects };
}
