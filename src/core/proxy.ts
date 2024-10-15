import { KeyMap } from "../types/Effect";
import { effectMaps } from "./variable";
const proxy = <T extends object>(object: T): T => {
  return new Proxy(object, {
    get(target, key, receiver) {
      const keyMap = effectMaps.has(target) ? effectMaps.get(target) : new Map([[object]]);
      effectMaps.set(target, keyMap);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      return true;
    },
  });
};

export { proxy };
