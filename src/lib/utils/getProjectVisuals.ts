import THFImage from '$lib/assets/images/thf-devices.png';
import ECLabImage from '$lib/assets/images/eclab-devices.png';
import BCPCImage from '$lib/assets/images/bcpc-devices.png';
import PWXImage from '$lib/assets/images/pinewax-devices.png';
import RigoImage from '$lib/assets/images/rigo-devices.png';
import TMGImage from '$lib/assets/images/tmg-devices.png';
import DNAImage from '$lib/assets/images/dna-bg.jpg';
import DeremetzImage from '$lib/assets/images/deremetz-devices.png';
import ZebiImage from '$lib/assets/images/sdiaz-devices.png';
import SIPLABImage from '$lib/assets/images/siplab-devices.png';
import aconiumImage from '$lib/assets/images/aconium-devices.png';
import entlebuchImage from '$lib/assets/images/entlebuch-devices.png';
import glewarkImage from '$lib/assets/images/glewark-devices.png';
import originalFoodImage from '$lib/assets/images/original-food-devices.png';
import e30Image from '$lib/assets/images/e30-devices.png';
import datavizImage from '$lib/assets/images/dataviz-devices.png';
import bnowImage from '$lib/assets/images/bnow-devices.png';
import shushImage from '$lib/assets/images/shush-devices.png';
import dfcImage from '$lib/assets/images/dfc-devices.png';
import nzlrImage from '$lib/assets/images/nzlr-devices.png';

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
		siplab: SIPLABImage,
		'aconium-akademie': aconiumImage,
		entlebuch: entlebuchImage,
		'georg-lewark': glewarkImage,
		'original-food': originalFoodImage,
		'e30-gallery': e30Image,
		'dataviz-work': datavizImage,
		'birmingham-now': bnowImage,
		shush: shushImage,
		'dfc-studios': dfcImage,
		'net-zero-land-rights': nzlrImage
	};

	return imageMap[name] || '';
}
