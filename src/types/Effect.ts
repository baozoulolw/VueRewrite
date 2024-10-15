declare type EffectOptions = {
  lazy?: boolean;
  scheduler?: (fn: Function) => void;
};

declare type ObjectKey = string | symbol

declare type EffectSet = Set<Function>;
declare type KeyMap = Map<ObjectKey, EffectSet>;
declare type EffectMaps = WeakMap<object, KeyMap>


export type {
  EffectOptions,
  ObjectKey,
  EffectSet,
  KeyMap,
  EffectMaps
}