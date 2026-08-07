import { intlayer } from "astro-intlayer";
import lit from "@astrojs/lit";
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://manuelmunoz.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), lit(), intlayer()],
});
