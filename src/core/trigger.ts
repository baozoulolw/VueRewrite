const trigger = <T extends object>(target: T, key: keyof object) => {
  console.log(target, key);
};

export { trigger };
