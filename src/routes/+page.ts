import type { Project, TeamMember } from '$lib/types/types';
import { dev } from '$app/environment';
import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';

const DUMMY_SITE_KEY = '1x00000000000000000000AA';

export async function load({ fetch }) {
	const locale = getLocale();
	const [projectsRes, teamRes] = await Promise.all([
		fetch(`api/projects?lang=${locale}`),
		fetch(`api/team?lang=${locale}`)
	]);
	const projects: Project[] = await projectsRes.json();
	const team: TeamMember[] = await teamRes.json();
	const turnstileSiteKey =
		PUBLIC_TURNSTILE_SITE_KEY?.trim() || (dev ? DUMMY_SITE_KEY : '');
	return { projects, team, turnstileSiteKey };
}
