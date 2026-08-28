<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Attachment } from 'svelte/attachments';

	let { siteKey, reset = $bindable(() => {}) }: { siteKey: string; reset?: () => void } = $props();

	const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

	function loadTurnstile(): Promise<NonNullable<Window['turnstile']>> {
		if (window.turnstile) {
			return Promise.resolve(window.turnstile);
		}

		return new Promise((resolve, reject) => {
			const onReady = () => {
				if (window.turnstile) {
					resolve(window.turnstile);
				} else {
					reject(new Error('Turnstile failed to load'));
				}
			};

			const onError = () => reject(new Error('Turnstile failed to load'));

			const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
			if (existing) {
				if (window.turnstile) {
					onReady();
				} else {
					existing.addEventListener('load', onReady, { once: true });
					existing.addEventListener('error', onError, { once: true });
				}
				return;
			}

			const script = document.createElement('script');
			script.src = SCRIPT_SRC;
			script.async = true;
			script.addEventListener('load', onReady, { once: true });
			script.addEventListener('error', onError, { once: true });
			document.head.appendChild(script);
		});
	}

	const widget = (key: string): Attachment<HTMLDivElement> => (element) => {
		let widgetId: string | undefined;
		let cancelled = false;

		loadTurnstile()
			.then((turnstile) => {
				if (cancelled || !key) return;

				widgetId = turnstile.render(element, {
					sitekey: key,
					theme: 'dark',
					language: getLocale()
				});

				reset = () => {
					if (widgetId) turnstile.reset(widgetId);
				};
			})
			.catch((error) => {
				if (!cancelled) console.error(error);
			});

		return () => {
			cancelled = true;
			if (widgetId) window.turnstile?.remove(widgetId);
		};
	};
</script>

<div class="turnstile" {@attach siteKey ? widget(siteKey) : undefined}></div>

<style>
	.turnstile {
		margin: 0.75rem 0 1rem;
	}
</style>
