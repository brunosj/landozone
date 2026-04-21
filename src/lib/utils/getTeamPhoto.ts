import brunoPhoto from '$lib/assets/images/bsj_4.jpg';
import bernardoPhoto from '$lib/assets/images/team/bernardo.jpg';
import mattPhoto from '$lib/assets/images/team/Portrait_MattBeer_C.jpg';
import placeholderUrl from '$lib/assets/images/team/placeholder.svg?url';

const photoMap: Record<string, string> = {
	'bruno-st-jacques': brunoPhoto,
	'bernardo-aviles-busch': bernardoPhoto,
	'matt-beer': mattPhoto
};

export function getTeamPhoto(slug: string): string {
	return photoMap[slug] ?? placeholderUrl;
}
