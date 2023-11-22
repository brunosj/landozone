import { SvelteComponentTyped } from "svelte";
import type { easingFunction, FullpageActivityStore, navigationFunction } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        activeSectionStore: FullpageActivityStore;
        scrollDuration: number;
        disableDragNavigation: boolean;
        disableArrowsNavigation: boolean;
        pageRoundingThresholdMultiplier: number;
        easing: easingFunction;
        externalController: any;
        toSection?: navigationFunction | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FullpageControllerProps = typeof __propDef.props;
export type FullpageControllerEvents = typeof __propDef.events;
export type FullpageControllerSlots = typeof __propDef.slots;
export default class FullpageController extends SvelteComponentTyped<FullpageControllerProps, FullpageControllerEvents, FullpageControllerSlots> {
    get toSection(): navigationFunction;
}
export {};
