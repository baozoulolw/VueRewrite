declare type EffectOptions = {
  lazy?: boolean;
  scheduler?: (fn: Function) => void;
  shallow?: boolean;
};

declare type ObjectKey = string | symbol;

declare type EffectSet = Set<Function>;
declare type KeyMap = Map<ObjectKey, EffectSet>;
declare type EffectMaps = WeakMap<object, KeyMap>;

declare type WatchCallback<T> = (
  newValue: T,
  oldValue: T,
  flush?: Function
) => any;
declare type WatchOptions = {
  immediate?: boolean;
};

export type {
  EffectOptions,
  ObjectKey,
  EffectSet,
  KeyMap,
  EffectMaps,
  WatchCallback,
  WatchOptions,
};
