import { SvelteComponentTyped } from "svelte";
import type { easingFunction, FullpageExternalControllerStore } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        scrollDuration?: number | undefined;
        pageRoundingThresholdMultiplier?: number | undefined;
        disableDragNavigation?: boolean | undefined;
        disableArrowsNavigation?: boolean | undefined;
        easing?: easingFunction;
        controller?: FullpageExternalControllerStore | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FullpageProps = typeof __propDef.props;
export type FullpageEvents = typeof __propDef.events;
export type FullpageSlots = typeof __propDef.slots;
export default class Fullpage extends SvelteComponentTyped<FullpageProps, FullpageEvents, FullpageSlots> {
    get controller(): FullpageExternalControllerStore;
}
export {};
