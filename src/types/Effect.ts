declare type EffectOptions = {
  lazy?: boolean;
  scheduler?: (fn: Function) => void;
};

declare type ObjectKey = string | number | symbol


export type {
  EffectOptions,
  ObjectKey
}