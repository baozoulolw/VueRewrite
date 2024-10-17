import { effect } from "../effect";
import { track } from "../track";
import { trigger } from "../trigger";
const computed = <T>(getter: Function): { value: T } => {
  let value: T;
  let dirty: boolean = true;
  const effectFun = effect(getter, {
    lazy: true,
    scheduler: () => {
      if (!dirty) {
        dirty = true;
      }
      trigger(obj, "value");
    },
  });

  const obj = {
    get value() {
      if (dirty) {
        value = effectFun();
        dirty = false;
      }
      track(obj, "value");
      return value;
    },
  };
  return obj;
};

export { computed };
