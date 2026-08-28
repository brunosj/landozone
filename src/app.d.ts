// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		turnstile?: {
			render: (
				container: string | HTMLElement,
				options: {
					sitekey: string;
					theme?: 'light' | 'dark' | 'auto';
					language?: string;
					callback?: (token: string) => void;
					'expired-callback'?: () => void;
					'error-callback'?: () => void;
				}
			) => string;
			reset: (widgetId?: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

declare module '@fontsource-variable/sora';
declare module '@fontsource-variable/rubik';
declare module '@fontsource/ibm-plex-mono';
declare module '@fontsource-variable/fredoka';
declare module 'async_hooks';

export {};
