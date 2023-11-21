<script>
	import FullpageController from './FullpageController.svelte';
	import Indicator from './Indicator/Section.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { quartOut, cubicInOut } from 'svelte/easing';
	import { FullpageActivity, FullpageExternalController } from './stores';
	import { activePage } from '$lib/stores/activeSection';
	import { onMount, onDestroy } from 'svelte';

	export let scrollDuration = 1000;
	export let pageRoundingThresholdMultiplier = 8;
	export let disableDragNavigation = true;
	export let disableArrowsNavigation = false;

	export let easing = cubicInOut;
	const sectionCount = writable(0);
	const activeSectionStore = FullpageActivity(sectionCount);
	export const controller = FullpageExternalController(activeSectionStore);

	let sections = [];
	let toSection;

	/*
Passing data about section visibility to all sections, activeSectionStore notifies all child FullpageSections about
changed active section, so previously active section will hide and newly active section will appear. Function getId
is for determination sectionId for FullpageSection
 */

	const sectionContext = {
		activeSectionStore,
		registerSection: (title) => {
			const id = $sectionCount;
			$sectionCount++;
			sections = [...sections, title || `${id + 1}`];
			return id;
		},
		config: {
			scrollDuration,
			pageRoundingThresholdMultiplier,
			disableDragNavigation,
			disableArrowsNavigation,
			easing
		}
	};
	setContext('section', sectionContext);

	// added code to pass active section to activePage store

	let storeValue;

	const unsubscribe = activeSectionStore.subscribe((value) => {
		storeValue = value;
		activePage.set(storeValue);
	});

	onMount(() => {});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div {...$$restProps}>
	<FullpageController
		bind:toSection
		externalController={controller}
		{activeSectionStore}
		{scrollDuration}
		{pageRoundingThresholdMultiplier}
		{disableDragNavigation}
		{disableArrowsNavigation}
		{easing}>
		<slot />
	</FullpageController>
	<Indicator {sections} activeSection={$activeSectionStore} on:goto={toSection} />
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		/* max-height: 100%; */
		position: relative;
	}
</style>
