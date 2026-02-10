// @ts-check
import { defineConfig } from "astro/config";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));

function fontSubsetting() {
  const SOURCE_FONT = resolve(root, "src/fonts/JetBrainsMonoNLNerdFontMono-Regular.ttf");
  const ASTRO_PAGE = resolve(root, "src/pages/index.astro");
  const OUTPUT_DIR = resolve(root, "public/fonts");
  const OUTPUT_FILE = resolve(OUTPUT_DIR, "JetBrainsMonoNLNerdFontMono-Regular.subset.woff2");

  // Extract visible text from the HTML body of the Astro file
  function extractText(source) {
    const htmlPart = source.split("---").slice(2).join("---");
    const stripped = htmlPart
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "");
    const text = stripped.replace(/<[^>]+>/g, " ").replace(/\{[^}]+\}/g, " ");
    const chars = [...new Set(text)].filter((c) => c.trim()).sort().join("");
    return chars;
  }

  return {
    name: "font-subsetting",
    hooks: {
      "astro:config:setup": async () => {
        const subsetFont = (await import("subset-font")).default;

        const [fontBuffer, astroSource] = await Promise.all([
          readFile(SOURCE_FONT),
          readFile(ASTRO_PAGE, "utf-8"),
        ]);

        const chars = extractText(astroSource);
        console.log(`Subsetting font to ${chars.length} unique characters: ${chars}`);

        const subset = await subsetFont(fontBuffer, chars, { targetFormat: "woff2" });

        await mkdir(OUTPUT_DIR, { recursive: true });
        await writeFile(OUTPUT_FILE, subset);

        console.log(`Wrote ${(subset.byteLength / 1024).toFixed(1)} KB to public/fonts/`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [fontSubsetting()],
});
