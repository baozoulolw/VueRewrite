export const activeEffects: Function[] = [];
export const isFlush = false;

export const exceptionHandler: Function | null = null;

import { EffectMaps } from "../types/Effect";
export const effectMaps:EffectMaps = new WeakMap();
