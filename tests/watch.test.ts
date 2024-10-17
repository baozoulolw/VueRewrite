import { test } from "vitest";
import { effect, proxy,watch } from "../src/main";

test('watch',async () => {
  const proxyObj = proxy({
    name:'jack',
    children:{
      name:'tom'
    }
  })
  watch(proxyObj.children,(newValue,oldValue) => {
    console.log(newValue.name,oldValue.name)
  },{
    immediate:false
  })
  proxyObj.children.name = 'jerry'
  await new Promise(res => setTimeout(res,1000))
  
})