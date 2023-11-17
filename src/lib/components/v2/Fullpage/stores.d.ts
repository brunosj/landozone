import { type Writable } from 'svelte/store';
import type { FullpageActivityStore, FullpageExternalControllerStore } from './types';
declare function FullpageActivity(pageCountStore: Writable<number>): FullpageActivityStore;
declare function FullpageExternalController(fullpageActivityStore: FullpageActivityStore): FullpageExternalControllerStore;
export { FullpageActivity, FullpageExternalController };
