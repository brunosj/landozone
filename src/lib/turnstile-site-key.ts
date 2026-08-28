import { dev } from '$app/environment';
import { env } from '$env/dynamic/public';

/** Cloudflare always-pass test sitekey. Safe in source; do not use in production. */
const DUMMY_SITE_KEY = '1x00000000000000000000AA';

export const turnstileSiteKey = env.PUBLIC_TURNSTILE_SITE_KEY ?? (dev ? DUMMY_SITE_KEY : '');
