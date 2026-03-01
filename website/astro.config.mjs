// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mrlija.cz",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "passthrough",
  }),
  devToolbar: {
    enabled: false,
  },
});
