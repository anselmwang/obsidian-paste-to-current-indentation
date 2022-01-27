const { _electron: electron } = require("playwright");
import { test, expect } from "@playwright/test";

test("Launch electron app", async () => {
  const electronApp = await electron.launch({
    executablePath: "/home/jacoblevernier/Obsidian.appimage",
    args: ["obsidian://open?vault=vault&file=Example1"],
  });
});
