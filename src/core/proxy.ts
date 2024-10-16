import { track } from "./track";
import { trigger } from "./trigger";
const proxy = <T extends object>(object: T): T => {
  return new Proxy(object, {
    get(target, key, receiver) {
      track(target,key)
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      trigger<T>(target,key)
      return true;
    }
  });
};

export { proxy };
