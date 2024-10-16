import {
  activeEffects,
  setActiveEffect,
  customEffectFunctionSet,
} from "./variable";
import { EffectOptions } from "../types/Effect";
import { last } from "lodash";
const effect = (fn: Function, options: EffectOptions = {}) => {
  const customEffect = () => {
    cleanEffect(customEffect);
    setActiveEffect(customEffect);
    activeEffects.push(customEffect);
    fn();
    activeEffects.pop();
    setActiveEffect(last(activeEffects));
  };
  customEffectFunctionSet.set(customEffect, []);
  if (!options.lazy) {
    customEffect();
  }
};

const cleanEffect = (fun: Function) => {
  const sets = customEffectFunctionSet.get(fun)!;
  sets.forEach((set) => set.clear());
};

export { effect };
