import { isFunction, isObject } from "lodash";
import { WatchCallback, WatchOptions } from "../../types/Effect";
import { effect } from "../effect";

const watch = <T>(
  getter: T | (() => T),
  callback: WatchCallback<T>,
  options: WatchOptions = {}
) => {
  let oldValue: T, newValue: T;
  let getterFun = isFunction(getter) ? getter : () => readObject(getter);

  let scheduler = () => {
    if (clean) {
      clean();
    }
    newValue = effectFun();
    callback(newValue, oldValue, finishCall);
    oldValue = newValue;
  };
  let clean: Function;
  const effectFun = effect(getterFun, {
    lazy: true,
    scheduler,
  });
  const finishCall = (cleanCall: Function) => {
    clean = cleanCall;
  };

  if (options.immediate) {
    scheduler();
  } else {
    oldValue = effectFun();
  }
};

const readObject = (obj: any, seen = new Set()) => {
  if (!isObject(obj) || seen.has(obj) || seen === null) {
    return;
  }
  seen.add(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 确保只处理对象自身的属性
      readObject(Reflect.get(obj, key), seen);
    }
  }
  return obj;
};

export { watch };
