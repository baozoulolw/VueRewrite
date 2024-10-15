import { activeEffects } from "./variable";
import { EffectOptions } from "../types/Effect";
const effect = (fn: Function, options: EffectOptions = {}) => {
  const customEffect = () => {
    activeEffects.push(fn);
    fn();
    activeEffects.pop();
  };
  if (!options.lazy) {
    customEffect();
  }
};

export { effect };
