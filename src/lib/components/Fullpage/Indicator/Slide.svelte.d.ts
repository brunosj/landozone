import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        slides: Array<string>;
        activeSlide: number;
    };
    events: {
        goto: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
export default class Slide extends SvelteComponentTyped<SlideProps, SlideEvents, SlideSlots> {
}
export {};
