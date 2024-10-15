const proxy = <T extends object>(object: T): T => {
  return new Proxy(object, {
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      return true;
    },
  });
};

export { proxy };
