import { ObjectKey } from "../types/Effect";
import { effectMaps,activeEffects } from "./variable";
import {last} from "lodash"; 

const trigger = <T extends object>(target: T, key: ObjectKey) => {
  let effects = effectMaps.get(target)?.get(key)!;
  let effectsRun = new Set(effects);
  effectsRun.forEach(effect => {
    if(effect === last(activeEffects)) {
      return
    }
    effect()
  });
};

export { trigger };
