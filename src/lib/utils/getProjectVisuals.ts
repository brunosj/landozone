import THFImage from '$lib/assets/images/thf-bg.jpg';
import ECLabImage from '$lib/assets/images/eclab-bg.jpg';
import BCPCImage from '$lib/assets/images/bcpc-bg.png';
import PWXImage from '$lib/assets/images/pwx-bg.jpg';
import RigoImage from '$lib/assets/images/rigo-bg.jpg';
import TMGImage from '$lib/assets/images/tmg-bg.jpg';
import DNAImage from '$lib/assets/images/dna-bg.jpg';
import DeremetzImage from '$lib/assets/images/deremetz-bg.jpg';
import ZebiImage from '$lib/assets/images/zebi-bg.jpg';
import SIPLABImage from '$lib/assets/images/siplab-bg.png';

type ImageComponent = string;

export function getImageComponent(name: string): ImageComponent {
	const imageMap: Record<string, ImageComponent> = {
		'thf-radio': THFImage,
		'econcrime-lab': ECLabImage,
		'berlin-carsharing': BCPCImage,
		'tmg-thinktank': TMGImage,
		'rigo-woodworks': RigoImage,
		'pinewax-records': PWXImage,
		'dna-copyright': DNAImage,
		'studio-deremetz': DeremetzImage,
		'sdiaz-de-leon': ZebiImage,
		siplab: SIPLABImage
	};

	return imageMap[name] || '';
}
