import { track } from "./track";
import { trigger } from "./trigger";
import { activeEffect, effectsOptions } from "../core/variable";
import { isObject } from "lodash";
const proxy = <T extends object>(object: T): T => {
  return new Proxy(object, {
    get(target, key, receiver) {
      track(target, key);
      let shallow =
        effectsOptions.has(activeEffect!) &&
        effectsOptions.get(activeEffect!)?.shallow;
      let returnValue = Reflect.get(target, key, receiver);
      if (!shallow && isObject(returnValue)) {
        returnValue = proxy(returnValue);
      }
      return returnValue;
    },
    set(target, key, value, receiver) {
      let change = value !== receiver[key];
      Reflect.set(target, key, value, receiver);
      if (change) {
        trigger<T>(target, key);
      }
      return true;
    },
  });
};

export { proxy };
