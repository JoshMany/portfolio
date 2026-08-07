import { t, type Dictionary } from "intlayer";

const litDemoContent = {
  key: "lit-demo",
  content: {
    description: t({
      en: "Welcome to my multilingual Astro + Lit site.",
      es: "Bienvenido a mi sitio Astro + Lit multilingüe.",
    }),
  },
} satisfies Dictionary;

export default litDemoContent;
