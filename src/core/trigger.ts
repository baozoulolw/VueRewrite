import { ObjectKey } from "../types/Effect";
import { effectMaps, activeEffect, effectsOptions } from "./variable";

const trigger = <T extends object>(target: T, key: ObjectKey) => {
  let effects = effectMaps.get(target)?.get(key)!;
  let effectsRun = new Set(effects);    //  防止循环调用
  effectsRun.forEach((effect) => {
    if (effect === activeEffect) { 
      return;
    }
    let scheduler = effectsOptions.has(effect)   // 判断是否存在调度器
      ? effectsOptions.get(effect)?.scheduler
      : undefined;
    if (scheduler) {    
      scheduler(effect);
    } else {
      effect();
    }
  });
};

export { trigger };
