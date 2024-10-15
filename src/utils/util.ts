import { warn } from "./log";
import { exceptionHandler } from "../core/variable";

const tryRun = (fn: Function) => {
  try {
    fn();
  } catch (error) {
    if (typeof exceptionHandler === "function") {
      exceptionHandler(error);
    } else {
      warn(error as string);
    }
  }
};

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export { tryRun, isDev };
