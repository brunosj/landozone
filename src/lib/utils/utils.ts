import type { Heading } from '$lib/types/types';

export const formatDate = (inputDate: string): string => {
	const dateObject: Date = new Date(inputDate);

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	};

	const formattedDate: string = dateObject.toLocaleDateString('en-UK', options);

	return formattedDate;
};

export function extractHeadingsFromMarkdown(markdown: string): Heading[] {
	const headings: Heading[] = [];
	const regex = /^(#+)\s+(.+)$/gm;

	let match;
	while ((match = regex.exec(markdown)) !== null) {
		const level = match[1].length;
		const text = match[2].trim();
		const id = text.toLowerCase().replace(/\s+/g, '-');
		headings.push({ level, text, id });
	}

	return headings;
}
