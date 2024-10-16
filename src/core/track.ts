import { ObjectKey } from "../types/Effect";
import { effectMaps } from "./variable";
import { activeEffect,customEffectFunctionSet } from "./variable";
const track = (target: object, key: ObjectKey) => {
  const keyMap = effectMaps.has(target)
    ? effectMaps.get(target)!
    : new Map([[key, new Set<Function>()]]);
  effectMaps.set(target, keyMap);
  const effects = keyMap.get(key) ? keyMap.get(key)! : new Set<Function>();
  keyMap.set(key, effects);
  effects.add(activeEffect!);
  customEffectFunctionSet.get(activeEffect!)?.push(effects);
};

export { track };
