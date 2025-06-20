import { render } from "vitest-browser-react"
import { Counter } from "./Counter"

describe("Counter", () => {
  test("basic counter usage", async () => {
    const { getByText } = render(<Counter />)
    const incButton = getByText("Increment")
    await expect.element(getByText("Count: 0")).toBeInTheDocument()
    await incButton.click()
    await expect.element(getByText("Count: 1")).toBeInTheDocument()
  })
})
