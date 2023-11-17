import { writable } from 'svelte/store';

function FullpageActivity(pageCountStore) {
	let activePage = 0;
	let pageCount = 0;
	pageCountStore.subscribe((value) => {
		pageCount = value;
	});
	const { subscribe, set } = writable(activePage);
	const previousPage = () => {
		if (activePage > 0) {
			activePage--;
			set(activePage);
		}
	};
	const nextPage = () => {
		if (activePage < pageCount - 1) {
			activePage++;
			set(activePage);
		}
	};
	const toPage = (pageId) => {
		if (pageId >= 0 && pageId < pageCount) {
			activePage = pageId;
			set(pageId);
		}
	};
	return {
		subscribe,
		previousPage,
		nextPage,
		toPage
	};
}

function FullpageExternalController(fullpageActivityStore) {
	const { subscribe } = fullpageActivityStore;
	const goto = (pageId) => {
		console.error(
			`FullpageExternalController.goto(${pageId}) is not implemented, wait for components to be mounted`
		);
	};
	return {
		subscribe,
		goto
	};
}

export { FullpageActivity, FullpageExternalController };
