import { bench } from "vitest"
import { sum } from "./sum"

bench("Sum benchmark", () => {
  sum(1, 2)
})
