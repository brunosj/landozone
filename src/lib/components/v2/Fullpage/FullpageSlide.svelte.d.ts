import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        disableCentering?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FullpageSlideProps = typeof __propDef.props;
export type FullpageSlideEvents = typeof __propDef.events;
export type FullpageSlideSlots = typeof __propDef.slots;
export default class FullpageSlide extends SvelteComponentTyped<FullpageSlideProps, FullpageSlideEvents, FullpageSlideSlots> {
}
export {};
