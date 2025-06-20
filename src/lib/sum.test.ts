import { sum } from "./sum"

describe("Basic sum usage", () => {
  test("Test sum", () => {
    expect(sum(1, 2)).toBe(3)
  })
})
