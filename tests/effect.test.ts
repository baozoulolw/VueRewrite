import { effect, proxy } from "../src/main";
import { test } from "vitest";

test("effect", async () => {
  const proxyObj = proxy({
    name: "jack",
    age: 30,
    live: true,
    children:{
      name:'tom'
    }
  });
  effect(
    () => {
      console.log(proxyObj.children.name);
    },
    {
      scheduler: (effect) => {
        console.log('scheduler执行了')
        effect()
      },
    }
  );
  proxyObj.children.name = 'jerry'
});
