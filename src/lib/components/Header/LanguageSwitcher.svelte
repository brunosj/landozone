<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	const currentLocale = $derived(getLocale());
</script>

<div class="switcher">
	<a
		href={localizeHref(page.url.pathname + page.url.search, { locale: 'en' })}
		aria-current={currentLocale === 'en'}
		data-sveltekit-reload>
		{m.lang_switch_en()}
	</a>
	<span>/</span>
	<a
		href={localizeHref(page.url.pathname + page.url.search, { locale: 'de' })}
		aria-current={currentLocale === 'de'}
		data-sveltekit-reload>
		{m.lang_switch_de()}
	</a>
	<span>/</span>
	<a
		href={localizeHref(page.url.pathname + page.url.search, { locale: 'fr' })}
		aria-current={currentLocale === 'fr'}
		data-sveltekit-reload>
		{m.lang_switch_fr()}
	</a>
</div>

<style>
	.switcher {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.75rem;
		font-family: 'IBM Plex Mono', sans-serif;
	}

	a[aria-current='true'] {
		color: var(--color-primary);
	}
	@media (min-width: 55em) {
		.switcher {
			font-size: 0.85rem;
		}
	}
</style>
