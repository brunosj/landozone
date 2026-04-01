import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_TELEGRAM_USERNAME
} from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';
import * as m from '$lib/paraglide/messages';

const localeMap = {
	en: { ogLanguage: 'en_US', siteLanguage: 'en-US' },
	de: { ogLanguage: 'de_DE', siteLanguage: 'de-DE' },
	fr: { ogLanguage: 'fr_FR', siteLanguage: 'fr-FR' }
};

export const getWebsiteConfig = () => {
	const locale = getLocale();
	const { ogLanguage, siteLanguage } = localeMap[locale] ?? localeMap.en;
	const siteName = m.site_name();
	const siteTagline = m.site_tagline();
	const siteTitle = `${siteName} - ${siteTagline}`;

	return {
		author: 'bruno sj',
		ogLanguage,
		siteLanguage,
		siteTitle,
		siteShortTitle: siteTitle,
		siteDescription: siteTitle,
		siteImage: 'https://www.landozone.net/lz_logo_seo.jpg',
		twitter: '@brunosj',
		backgroundColor: '#14151d',
		themeColor: '#8786df',
		siteUrl: PUBLIC_SITE_URL,
		contactEmail: PUBLIC_CONTACT_EMAIL,
		githubPage: PUBLIC_GITHUB_PAGE,
		linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
		telegramUsername: PUBLIC_TELEGRAM_USERNAME
	};
};
