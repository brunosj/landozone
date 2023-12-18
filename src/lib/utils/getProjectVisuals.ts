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

import LZLogo from '$lib/assets/svg/logos/lz-logo.svelte';
import THFLogo from '$lib/assets/svg/logos/thf-logo.svelte';
import ECLabLogo from '$lib/assets/svg/logos/eclab-logo.svelte';
import RigoLogo from '$lib/assets/images/rigo-logo.png';
import TMGLogo from '$lib/assets/images/tmg-logo.png';
import PWXLogo from '$lib/assets/svg/logos/pwx-logo.svelte';
import BCPCLogo from '$lib/assets/svg/logos/bcpc-logo.svelte';

type LogoComponent = any;
type ImageComponent = string;

export function getImageComponent(name: string): ImageComponent {
	const imageMap: Record<string, ImageComponent> = {
		'THF Radio': THFImage,
		'EconCrime Lab': ECLabImage,
		'Berlin Carsharing Price Calculator': BCPCImage,
		'TMG Think Tank': TMGImage,
		'Rigo Woodworks': RigoImage,
		'Pinewax Records': PWXImage,
		'EU Copyright Directive': DNAImage,
		'Studio Deremetz': DeremetzImage,
		'Sebastian Díaz de León': ZebiImage,
		SIPLAB: SIPLABImage
	};

	return imageMap[name] || '';
}

export function getLogoComponent(name: string): LogoComponent {
	const logoMap: Record<string, LogoComponent> = {
		'THF Radio': THFLogo,
		'EconCrime Lab': ECLabLogo,
		'Berlin Carsharing Price Calculator': BCPCLogo,
		'TMG Think Tank': TMGLogo,
		'Rigo Woodworks': RigoLogo,
		'Pinewax Records': PWXLogo
	};

	return logoMap[name] || LZLogo;
}


