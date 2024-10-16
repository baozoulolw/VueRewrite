import { EffectSet } from "../types/Effect";

export const activeEffects: Function[] = [];
export let activeEffect:Function | undefined = undefined
export const isFlush = false;

export const exceptionHandler: Function | undefined = undefined;

import { EffectMaps } from "../types/Effect";
export const effectMaps:EffectMaps = new WeakMap();

export const setActiveEffect = (fn: Function | undefined) => {
  activeEffect = fn
}

export const customEffectFunctionSet = new WeakMap<Function,EffectSet[]>()
