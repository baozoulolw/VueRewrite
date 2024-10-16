import { effect, proxy } from "../src/main";
import { test } from "vitest";

test("effect", async () => {
  const proxyObj = proxy({
    name: "jack",
    age: 30,
    live:false
  });
  effect(() => {
    let name = proxyObj.live ? proxyObj.name : "unLive";
    console.log(name);
  });
})
