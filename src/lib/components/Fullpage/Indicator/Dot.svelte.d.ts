import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        activeDot?: number | undefined;
        index?: number | undefined;
        title?: string | undefined;
    };
    events: {
        goto: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DotProps = typeof __propDef.props;
export type DotEvents = typeof __propDef.events;
export type DotSlots = typeof __propDef.slots;
export default class Dot extends SvelteComponentTyped<DotProps, DotEvents, DotSlots> {
}
export {};
