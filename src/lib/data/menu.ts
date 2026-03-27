import * as m from '$lib/paraglide/messages';

export const getMenu = () => [
	{
		name: m.menu_about(),
		slug: '/#about'
	},
	{
		name: m.menu_projects(),
		slug: '/projects'
	},
	{
		name: m.menu_blog(),
		slug: '/blog'
	},
	{
		name: m.menu_contact(),
		slug: '/#contact'
	}
];
