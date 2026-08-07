import { t, type Dictionary } from "intlayer";

const navContent = {
  key: "nav",
  content: {
    link1Href: "#about",
    link1Label: t({ en: "About", es: "Sobre mí" }),
    link2Href: "#stack",
    link2Label: t({ en: "Stack", es: "Stack" }),
    link3Href: "#timeline",
    link3Label: t({ en: "Experience", es: "Trayectoria" }),
    link4Href: "#projects",
    link4Label: t({ en: "Projects", es: "Proyectos" }),
    link5Href: "#contact",
    link5Label: t({ en: "Contact", es: "Contacto" }),
  },
} satisfies Dictionary;

export default navContent;
