import { defineConfig, devices } from "@playwright/test";

// Own port so tests never hit another local server sitting on :3000.
const PORT = Number(process.env.E2E_PORT ?? 3100);
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "mobile-375",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 375, height: 812 },
      },
    },
    {
      name: "desktop-1440",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
  ],
  // Tests run against the production build (`pnpm build` runs first in `pnpm check`).
  webServer: {
    command: `pnpm start --port ${PORT}`,
    url: baseURL,
    // Always start a fresh server so tests never run against a stale build.
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
