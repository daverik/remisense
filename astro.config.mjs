// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://daverik.github.io",
  base: "/remisense",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});
