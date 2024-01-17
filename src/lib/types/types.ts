export interface Project {
	name: string;
	date: string;
	url: string;
	color: string;
	colorRGB: number[];
	keepTextLight: boolean;
	repo: string;
	slug: string;
	type: string;
	image: string;
	description: string;
	technologies: string[];
	features: string[];
	featured: boolean;
}

export interface Blog {
	name: string;
	date: string;
	slug: string;
	description: string;
	technologies: string[];
}

export interface Heading {
	level: number;
	text: string;
	id: string;
}
