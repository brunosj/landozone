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

export function generateTOC(content: HTMLElement): HTMLUListElement {
	const headings = content.querySelectorAll('h2, h3, h4, h5, h6');
	const toc = document.createElement('ul');

	headings.forEach((heading) => {
		const id =
			heading.id || heading.getAttribute('id') || generateUniqueId(heading.textContent || '');
		heading.id = id;

		const listItem = document.createElement('li');
		listItem.textContent = heading.textContent || '';
		listItem.id = id;

		toc.appendChild(listItem);
	});

	return toc;
}

function generateUniqueId(text: string): string {
	return text
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '');
}
