import { dev } from '$app/environment';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { env } from '$env/dynamic/private';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
/** Cloudflare always-pass test secret. Safe in source; do not use in production. */
const DUMMY_SECRET_KEY = '1x0000000000000000000000000000000AA';

function getSecret(): string {
	const secret =
		env.TURNSTILE_SECRET_KEY?.trim() || TURNSTILE_SECRET_KEY?.trim() || (dev ? DUMMY_SECRET_KEY : '');
	if (!secret) {
		throw new Error('Missing TURNSTILE_SECRET_KEY');
	}
	return secret;
}

type SiteverifyResponse = {
	success: boolean;
	'error-codes'?: string[];
};

export async function verifyTurnstileToken(token: string, remoteip?: string): Promise<boolean> {
	if (!token) return false;

	const body = new URLSearchParams({
		secret: getSecret(),
		response: token
	});

	if (remoteip) {
		body.set('remoteip', remoteip);
	}

	try {
		const response = await fetch(SITEVERIFY_URL, {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			body
		});

		const outcome = (await response.json()) as SiteverifyResponse;
		return outcome.success === true;
	} catch (error) {
		console.error('Turnstile verification failed:', error);
		return false;
	}
}
