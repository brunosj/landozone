import { SvelteComponentTyped } from "svelte";
import type { easingFunction, FullpageActivityStore, navigationFunction } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        activeSlideStore: FullpageActivityStore;
        isSlidable: boolean;
        isActive: boolean;
        disableCentering: boolean;
        scrollDuration: number;
        disableDragNavigation: boolean;
        disableArrowsNavigation: boolean;
        pageRoundingThresholdMultiplier: number;
        easing: easingFunction;
        externalController: any;
        toSlide?: navigationFunction | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FullpageSectionControllerProps = typeof __propDef.props;
export type FullpageSectionControllerEvents = typeof __propDef.events;
export type FullpageSectionControllerSlots = typeof __propDef.slots;
export default class FullpageSectionController extends SvelteComponentTyped<FullpageSectionControllerProps, FullpageSectionControllerEvents, FullpageSectionControllerSlots> {
    get toSlide(): navigationFunction;
}
export {};
