#!/usr/bin/env node
/**
 * generate-sitemap.js
 *
 * Regenerates public/sitemap.xml directly from the actual route table in
 * src/App.jsx, so the sitemap can never silently drift out of sync with
 * the real app again (this happened twice by hand — a duplicate entry and
 * three noindexed legal pages left in the sitemap — before this existed).
 *
 * How it stays accurate with zero manual bookkeeping:
 * 1. Route paths + their component are parsed straight out of App.jsx.
 * 2. Each component's own file is checked for a `noindex` robots tag —
 *    if a page is noindexed, it's automatically excluded. No separate
 *    "list of noindex pages" to remember to update.
 * 3. Runs automatically before every `npm run build` (see "prebuild" in
 *    package.json), so it's regenerated on every deploy without anyone
 *    having to remember to run it.
 *
 * Adding a new page requires zero sitemap work: add the route to
 * App.jsx as usual, and it appears in the sitemap on the next build.
 * Only exception: if a page needs a non-default priority/changefreq,
 * adjust the rules in `classify()` below.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const APP_JSX = path.join(ROOT, "src/App.jsx");
const SRC_DIR = path.join(ROOT, "src");
const SITEMAP_OUT = path.join(ROOT, "public/sitemap.xml");
const SITE_URL = "https://mitools.app";

function readFile(p) {
  return fs.readFileSync(p, "utf8");
}

function resolveComponentFile(importPath) {
  // importPath looks like "./pages/guides/Budgeting" — resolve to a real
  // file under src/, trying both .jsx and .js.
  const cleaned = importPath.replace(/^\.\//, "");
  const base = path.join(SRC_DIR, cleaned);
  if (fs.existsSync(base + ".jsx")) return base + ".jsx";
  if (fs.existsSync(base + ".js")) return base + ".js";
  return null;
}

function isNoindexed(componentFile) {
  if (!componentFile) return false;
  const src = readFile(componentFile);
  return /noindex/i.test(src);
}

// Assigns priority + changefreq based on the route shape. Adjust here if
// a specific page category needs different values — everything else is
// automatic.
function classify(routePath) {
  if (routePath === "/") return { priority: "1.0", changefreq: "weekly" };
  if (routePath === "/guides") return { priority: "0.8", changefreq: "weekly" };
  if (routePath.startsWith("/guides/")) return { priority: "0.7", changefreq: "monthly" };
  if (["/car-repayment", "/bond-repayment", "/compound-interest", "/income-tax"].includes(routePath)) {
    return { priority: "0.9", changefreq: "yearly" };
  }
  if (["/about", "/contact"].includes(routePath)) {
    return { priority: "0.5", changefreq: "yearly" };
  }
  return { priority: "0.5", changefreq: "monthly" };
}

function main() {
  const appSrc = readFile(APP_JSX);

  // 1. Map component name -> import path, from the lazy() declarations.
  const lazyImportRe = /const (\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\);/g;
  const componentToImportPath = {};
  let m;
  while ((m = lazyImportRe.exec(appSrc))) {
    componentToImportPath[m[1]] = m[2];
  }

  // 2. Extract every <Route path="..." element={<Component ... />} />,
  //    tolerant of self-closing whitespace and multi-line attributes.
  const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}\s*\/>/g;
  const routes = [];
  while ((m = routeRe.exec(appSrc))) {
    routes.push({ path: m[1], component: m[2] });
  }

  if (routes.length === 0) {
    console.error("sitemap generator: found 0 routes in App.jsx — check the regex still matches the route syntax used there.");
    process.exit(1);
  }

  // 3. Filter out noindexed pages automatically.
  const indexable = routes.filter(({ component }) => {
    const importPath = componentToImportPath[component];
    const file = resolveComponentFile(importPath);
    if (!file) {
      console.warn(`sitemap generator: could not resolve source file for <${component} /> (import "${importPath}") — including it in the sitemap by default.`);
      return true;
    }
    return !isNoindexed(file);
  });

  const today = new Date().toISOString().slice(0, 10);

  const urlEntries = indexable
    .map(({ path: routePath }) => {
      const { priority, changefreq } = classify(routePath);
      const loc = routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urlEntries}\n\n</urlset>\n`;

  fs.writeFileSync(SITEMAP_OUT, xml);

  const skipped = routes.length - indexable.length;
  console.log(`sitemap generator: wrote ${indexable.length} URLs to public/sitemap.xml (${skipped} noindexed page(s) excluded).`);
}

main();
