// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import mdx from "@astrojs/mdx";

const prod = process.env.NODE_ENV === "production";
const repoName = "proyecto-abp";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  integrations: [mdx()],
  site: "https://margin-zero-important.github.io",
  base: prod ? `/${repoName}/` : "/",
});
