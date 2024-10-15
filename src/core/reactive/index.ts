import { proxy } from "../proxy";
const reactive = <T extends object>(object: T) => {
  return proxy(object);
};

export { reactive };
