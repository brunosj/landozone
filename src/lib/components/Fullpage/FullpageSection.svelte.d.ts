import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        disableCentering?: boolean | undefined;
        controller?: import("./types").FullpageExternalControllerStore | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FullpageSectionProps = typeof __propDef.props;
export type FullpageSectionEvents = typeof __propDef.events;
export type FullpageSectionSlots = typeof __propDef.slots;
export default class FullpageSection extends SvelteComponentTyped<FullpageSectionProps, FullpageSectionEvents, FullpageSectionSlots> {
    get controller(): import("./types").FullpageExternalControllerStore;
}
export {};
