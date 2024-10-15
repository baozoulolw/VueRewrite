const warn = (message: string) => {
  console.warn(message);
};

const tryRun = (fn: Function) => {
  try {
    fn();
  } catch (error) {
    warn(error as string);
  }
};

export { warn, tryRun };
