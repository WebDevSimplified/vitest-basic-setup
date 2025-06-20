/// <reference types="vitest/config" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    projects: [
      {
        extends: true,
        test: {
          exclude: ["**/*.browser.{test,spec}.ts(x)"],
          name: "Unit",
          environment: "node",
        },
      },
      {
        extends: true,
        test: {
          include: ["**/*.browser.{test,spec}.ts(x)"],
          name: "Browser",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
    globals: true,
    benchmark: {},
  },
})
