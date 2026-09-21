import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const baseUrl = process.env.UI_URL || "http://localhost:3000";
const routes = (process.env.UI_ROUTES || "/").split(",").map((route) => route.trim());
const widths = (process.env.UI_WIDTHS || "320,390,768,1024,1280,1440,1920").split(",").map(Number);
const screenshotDir = process.env.SCREENSHOT_DIR || "artifacts/screenshots";
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await mkdir(screenshotDir, { recursive: true });
const results = [];

for (const route of routes) for (const width of widths) {
  await page.setViewportSize({ width, height: 900 });
  const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle", timeout: 90_000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((image) => image.decode().catch(() => undefined))); });
  const metrics = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > window.innerWidth,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    h1Count: document.querySelectorAll("h1").length,
  }));
  results.push({ route, width, status: response?.status() ?? 0, ...metrics });
  const name = `${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${width}.png`;
  await page.screenshot({ path: `${screenshotDir}/${name}`, fullPage: true });
}

await browser.close();
await writeFile("artifacts/visual-qa-results.json", JSON.stringify({ results, errors }, null, 2));
console.log(JSON.stringify({ results, errors }, null, 2));
if (errors.length || results.some((result) => result.status !== 200 || result.overflow || result.brokenImages.length || result.h1Count !== 1)) process.exitCode = 1;
