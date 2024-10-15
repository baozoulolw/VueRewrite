import { effect } from "../src/main";
import {test} from 'vitest'

test('effect',() => {
  effect(() => {
    console.log('123123')
  })
})