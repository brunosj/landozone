import type { Project } from '$lib/types/types';

/** Collapse locale-specific duplicate spellings (e.g. Data visualization vs Data Visualization). */
export function typeFilterKey(type: string): string {
	return type.trim().toLowerCase();
}

export function uniqueTypesForFilter(projects: Project[]): { key: string; label: string }[] {
	const map = new Map<string, string>();
	for (const p of projects) {
		const k = typeFilterKey(p.type);
		if (!map.has(k)) map.set(k, p.type.trim());
	}
	return [...map.entries()]
		.sort((a, b) => a[1].localeCompare(b[1]))
		.map(([key, label]) => ({ key, label }));
}

export function uniqueYearsDescending(projects: Project[]): number[] {
	const years = new Set<number>();
	for (const p of projects) {
		const y = new Date(p.date).getFullYear();
		if (!Number.isNaN(y)) years.add(y);
	}
	return [...years].sort((a, b) => b - a);
}

export function matchesSearch(project: Project, q: string): boolean {
	const s = q.trim().toLowerCase();
	if (!s) return true;
	const hay = [project.name, project.description, project.client, ...project.technologies]
		.join(' ')
		.toLowerCase();
	return hay.includes(s);
}

export function filterProjects(
	projects: Project[],
	opts: {
		search: string;
		typeKey: string | null;
		year: number | null;
	}
): Project[] {
	let list = [...projects];
	if (opts.typeKey) {
		list = list.filter((p) => typeFilterKey(p.type) === opts.typeKey);
	}
	if (opts.year !== null) {
		list = list.filter((p) => new Date(p.date).getFullYear() === opts.year);
	}
	list = list.filter((p) => matchesSearch(p, opts.search));
	list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return list;
}

export function filtersAreDefault(opts: {
	search: string;
	typeKey: string | null;
	year: number | null;
}): boolean {
	return opts.search.trim() === '' && opts.typeKey === null && opts.year === null;
}
