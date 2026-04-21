import type { Project, TeamMember } from '$lib/types/types';
import { getLocale } from '$lib/paraglide/runtime';

export async function load({ fetch }) {
	const locale = getLocale();
	const [projectsRes, teamRes] = await Promise.all([
		fetch(`api/projects?lang=${locale}`),
		fetch(`api/team?lang=${locale}`)
	]);
	const projects: Project[] = await projectsRes.json();
	const team: TeamMember[] = await teamRes.json();
	return { projects, team };
}
