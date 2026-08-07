import { t, type Dictionary } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    heading: t({
      en: "Let's talk",
      es: "Hablemos",
    }),
    description: t({
      en: "A project in mind? A job opportunity? Write me and let's chat.",
      es: "¿Un proyecto en mente? ¿Una oportunidad laboral? Escríbeme y conversamos.",
    }),
    email: "manuel_prog@outlook.com",
    location: t({
      en: "Veracruz, México",
      es: "Veracruz, México",
    }),
    linksLabel: t({
      en: "Links",
      es: "Enlaces",
    }),
    copyright: t({
      en: "© {year} Manuel Muñoz. All rights reserved.",
      es: "© {year} Manuel Muñoz. Todos los derechos reservados.",
    }),
  },
} satisfies Dictionary;

export default footerContent;
