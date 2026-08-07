import { t, type Dictionary } from "intlayer";

const indexContent = {
  key: "index",
  content: {
    hero: {
      subtitle: t({ en: "Full Stack Engineer", es: "Full Stack Engineer" }),
      firstName: "Manuel",
      lastName: "Muñoz",
      description: t({
        en: "Full Stack Engineer specializing in React, TypeScript, Python, Django and Next.js. Proven experience building scalable applications and passionate about UX/UI-driven frontend development.",
        es: "Full Stack Engineer especializado en React, TypeScript, Python, Django y Next.js. Experiencia comprobada construyendo aplicaciones escalables y apasionado por el desarrollo frontend orientado a UX/UI.",
      }),
      downloadCv: t({ en: "Download CV", es: "Descargar CV" }),
      contact: t({ en: "Contact", es: "Contacto" }),
    },
    about: {
      sectionLabel: t({ en: "About me", es: "Sobre mí" }),
      heading: t({
        en: "Turning ideas into solid code",
        es: "Convertir ideas en código sólido",
      }),
      p1: t({
        en: "Full Stack Engineer specializing in React, TypeScript, Python, Django and Next.js. Proven experience building scalable applications with Laravel and PHP. Skilled in database design (MySQL, MongoDB) and passionate about UX/UI-driven frontend development.",
        es: "Full Stack Engineer especializado en React, TypeScript, Python, Django y Next.js. Experiencia comprobada construyendo aplicaciones escalables con Laravel y PHP. Hábil en diseño de bases de datos (MySQL, MongoDB) y apasionado por el desarrollo frontend orientado a UX/UI.",
      }),
      p2: t({
        en: "Based in Veracruz, México. Currently working remotely as a Full Stack Engineer, building automated recruitment workflows and custom ATS modules with React and Next.js. Always eager to tackle complex technical challenges and deliver clean, maintainable code.",
        es: "Radicado en Veracruz, México. Actualmente trabajando remotamente como Full Stack Engineer, construyendo flujos de trabajo automatizados de reclutamiento y módulos ATS personalizados con React y Next.js. Siempre dispuesto a enfrentar desafíos técnicos complejos y entregar código limpio y mantenible.",
      }),
      stat1Num: "5+",
      stat1Label: t({ en: "Years of experience", es: "Años de experiencia" }),
      stat2Num: "10+",
      stat2Label: t({
        en: "Technologies mastered",
        es: "Tecnologías dominadas",
      }),
      stat3Num: "B2",
      stat3Label: t({
        en: "English level (Cambridge)",
        es: "Nivel de inglés (Cambridge)",
      }),
    },
    stack: {
      sectionLabel: t({ en: "Stack", es: "Stack" }),
      heading: t({
        en: "Technologies & tools",
        es: "Tecnologías & herramientas",
      }),
    },
    timeline: {
      sectionLabel: t({ en: "Experience", es: "Trayectoria" }),
      heading: t({
        en: "Professional experience",
        es: "Experiencia profesional",
      }),
      t1Year: "Jan 2026 — Present",
      t1Role: t({ en: "Full Stack Engineer", es: "Full Stack Engineer" }),
      t1Company: "Click It Tech · Remote",
      t1Desc: t({
        en: "Engineered automated recruitment workflows and custom ATS modules serving a major US client using React and Next.js. Systematically reduced technical debt, optimized database queries, and consistently cleared Jira backlogs ahead of schedule.",
        es: "Desarrollo de flujos de reclutamiento automatizados y módulos ATS personalizados para un cliente importante de EE.UU. usando React y Next.js. Reducción sistemática de deuda técnica, optimización de consultas y resolución adelantada de backlogs.",
      }),
      t2Year: "May 2023 — Dec 2025",
      t2Role: t({ en: "Full Stack Engineer", es: "Full Stack Engineer" }),
      t2Company: "Tech Genies · Remote",
      t2Desc: t({
        en: "Led front-end architecture for a large-scale migration from legacy PERL/PHP to a modern React, Next.js, and TypeScript stack. Established team-wide best practices and rapidly adopted Python and Django to build secure RESTful APIs and complex invoicing systems.",
        es: "Lideré la arquitectura front-end en una migración a gran escala de sistemas legacy PERL/PHP a un stack moderno con React, Next.js y TypeScript. Establecí mejores prácticas para el equipo y adopté rápidamente Python y Django para construir APIs RESTful seguras y sistemas de facturación.",
      }),
      t3Year: "Sep 2021 — Mar 2022",
      t3Role: t({
        en: "Full Stack Web Developer",
        es: "Full Stack Web Developer",
      }),
      t3Company: "Instituto Tecnológico Superior de Xalapa",
      t3Desc: t({
        en: "Proposed and executed a strategic pivot from an obsolete Java desktop prototype to a modern Laravel web application. Designed a scalable relational database, implemented secure authentication, and delivered a functional MVP within a strict 6-month academic deadline.",
        es: "Propuse y ejecuté un giro estratégico desde un prototipo Java desktop obsoleto hacia una aplicación web moderna con Laravel. Diseñé una base de datos relacional escalable, implementé autenticación segura y entregué un MVP funcional dentro de un plazo académico de 6 meses.",
      }),
      t4Year: "Feb 2021 — Aug 2021",
      t4Role: t({
        en: "Full Stack Web Developer",
        es: "Full Stack Web Developer",
      }),
      t4Company: "SIMAR · Xalapa, México",
      t4Desc: t({
        en: "Co-architected a secure internal web application using Laravel and MariaDB that digitally transformed a waste management company. Normalized chaotic spreadsheet data into a relational structure, automating core workflows and eliminating 100% of redundant manual entries.",
        es: "Co-diseñé una aplicación web interna segura con Laravel y MariaDB que transformó digitalmente una empresa de gestión de residuos. Normalicé datos caóticos de hojas de cálculo a una estructura relacional, automatizando flujos de trabajo y eliminando el 100% de entradas manuales redundantes.",
      }),
    },
    projects: {
      sectionLabel: t({ en: "Portfolio", es: "Portafolio" }),
      heading: t({ en: "Featured projects", es: "Proyectos destacados" }),
      viewLabel: t({ en: "View project", es: "Ver proyecto" }),
      p1Title: "todo-app-react",
      p1Tags: "React 19 · TypeScript · Tailwind CSS",
      p1Desc: t({
        en: "A modern, feature-rich todo application built with React 19, TypeScript, and Tailwind CSS. Features include CRUD operations, localStorage persistence, responsive design, and Context-based state management.",
        es: "Aplicación de tareas moderna construida con React 19, TypeScript y Tailwind CSS. Incluye operaciones CRUD, persistencia en localStorage, diseño responsivo y gestión de estado basada en Context.",
      }),
      p2Title: "itsx-eventos-agora",
      p2Tags: "TypeScript · Web App",
      p2Desc: t({
        en: "Event management web application developed for Instituto Tecnológico Superior de Xalapa. Built with modern web technologies for academic event coordination.",
        es: "Aplicación web de gestión de eventos desarrollada para el Instituto Tecnológico Superior de Xalapa. Construida con tecnologías web modernas para coordinación de eventos académicos.",
      }),
      p3Title: "Project-Ikea-Replica-Desk",
      p3Tags: "Open Source · DIY · Design",
      p3Desc: t({
        en: "Open-source files that replicate IKEA desk furniture for public use. Don't buy it, have it custom-made. A creative approach to accessible furniture design.",
        es: "Archivos open-source que replican muebles de escritorio de Ikea para uso público. No lo compres, mándalo a hacer. Un enfoque creativo al diseño de muebles accesibles.",
      }),
      p4Title: "3D ASCII Portfolio",
      p4Tags: "Three.js · Astro · TypeScript",
      p4Desc: t({
        en: "Interactive portfolio with 3D scenes and ASCII rendering effects. The site you're viewing right now — built with Astro, Three.js, and custom ASCII shader effects.",
        es: "Portafolio interactivo con escenas 3D y efectos de renderizado ASCII. El sitio que estás viendo — construido con Astro, Three.js y efectos ASCII personalizados.",
      }),
    },
    github: {
      sectionLabel: t({ en: "Open Source", es: "Open Source" }),
      heading: t({
        en: "GitHub Contributions",
        es: "Contribuciones en GitHub",
      }),
      username: "JoshMany",
    },
    languages: {
      sectionLabel: t({ en: "Languages", es: "Idiomas" }),
      heading: t({ en: "Language proficiency", es: "Dominio de idiomas" }),
      l1Name: t({ en: "Spanish", es: "Español" }),
      l1Level: t({ en: "Native", es: "Nativo" }),
      l1Pct: "100%",
      l2Name: t({ en: "English", es: "Inglés" }),
      l2Level: t({
        en: "B2 — FCE Cambridge (2021)",
        es: "B2 — FCE Cambridge (2021)",
      }),
      l2Pct: "70%",
    },
    certificates: {
      sectionLabel: t({ en: "Certificates", es: "Certificados" }),
      heading: t({ en: "Certifications", es: "Certificaciones" }),
      c1Name: "FCE Cambridge — B2",
      c1Org: t({
        en: "Cambridge Assessment English",
        es: "Cambridge Assessment English",
      }),
      c1Year: "2021",
      c2Name: "CS50's Web Programming",
      c2Org: t({ en: "HarvardX · edX", es: "HarvardX · edX" }),
      c2Year: "2022",
    },
    education: {
      sectionLabel: t({ en: "Education", es: "Formación" }),
      heading: t({ en: "Education", es: "Educación" }),
      e1Degree: t({
        en: "Computer Systems Engineering",
        es: "Ingeniería en Sistemas Computacionales",
      }),
      e1School: t({
        en: "Instituto Tecnológico Superior de Xalapa",
        es: "Instituto Tecnológico Superior de Xalapa",
      }),
      e1Year: "2017 — 2022",
    },
  },
} satisfies Dictionary;

export default indexContent;
