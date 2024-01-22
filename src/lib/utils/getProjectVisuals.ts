// import THFImage from '$lib/assets/images/thf-bg.jpg';
import THFImage from '$lib/assets/images/thf-devices.png';
// import ECLabImage from '$lib/assets/images/eclab-bg.jpg';
import ECLabImage from '$lib/assets/images/eclab-devices.png';
// import BCPCImage from '$lib/assets/images/bcpc-bg.png';
import BCPCImage from '$lib/assets/images/bcpc-devices.png';
// import PWXImage from '$lib/assets/images/pwx-bg.jpg';
import PWXImage from '$lib/assets/images/pinewax-devices.png';
// import RigoImage from '$lib/assets/images/rigo-bg.jpg';
import RigoImage from '$lib/assets/images/rigo-devices.png';
// import TMGImage from '$lib/assets/images/tmg-bg.jpg';
import TMGImage from '$lib/assets/images/tmg-devices.png';
import DNAImage from '$lib/assets/images/dna-bg.jpg';
// import DeremetzImage from '$lib/assets/images/deremetz-bg.jpg';
import DeremetzImage from '$lib/assets/images/deremetz-devices.png';
// import ZebiImage from '$lib/assets/images/zebi-bg.jpg';
import ZebiImage from '$lib/assets/images/sdiaz-devices.png';
// import SIPLABImage from '$lib/assets/images/siplab-bg.png';
import SIPLABImage from '$lib/assets/images/siplab-devices.png';
// import aconiumImage from '$lib/assets/images/aconium-bg.jpg';
import aconiumImage from '$lib/assets/images/aconium-devices.png';
import entlebuchImage from '$lib/assets/images/entlebuch-devices.png';

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
		entlebuch: entlebuchImage
	};

	return imageMap[name] || '';
}
