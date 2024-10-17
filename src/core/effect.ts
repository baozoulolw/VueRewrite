import {
  activeEffects,
  setActiveEffect,
  customEffectFunctionSet,
  effectsOptions
} from "./variable";
import { EffectOptions } from "../types/Effect";
import { last } from "lodash";
const effect = (fn: Function, options: EffectOptions = {}) => {
  const customEffect = () => {
    cleanEffect(customEffect);
    setActiveEffect(customEffect);
    activeEffects.push(customEffect);
    let fnReturn = fn();
    activeEffects.pop();
    setActiveEffect(last(activeEffects));
    return fnReturn;
  };
  customEffectFunctionSet.set(customEffect, []);
  if (!options.lazy) {
    customEffect();
  }
  effectsOptions.set(customEffect, options);
  return customEffect;
};

const cleanEffect = (fun: Function) => {
  const sets = customEffectFunctionSet.get(fun)!;
  sets.forEach((set) => set.clear());
};

export { effect };
