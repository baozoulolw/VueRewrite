import { test } from "vitest";
import { computed, effect, proxy } from "../src/main";

test("computed", async () => {
  const proxyObj = proxy({
    name: "jack",
    live: true,
  });

  const name = computed(() => (proxyObj.live ? proxyObj.name : "unLive"));

  effect(() => {
    console.log(name.value);
  });
  proxyObj.live = false;
});
