// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/remisense/",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});
