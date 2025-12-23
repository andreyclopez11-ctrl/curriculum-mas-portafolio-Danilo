document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      "hero.name": "Danilo Andrey Cuadros Lopez",
      "hero.tagline": "Programador Senior · Front-end | UI/UX | Web Apps",
      "hero.location": "Maywood, Illinois · andreyclopez11@gmail.com · +1 224 998 8164",

      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.quickContact": "Contacto rápido",
      "nav.downloadPDF": "Descargar PDF",
      "nav.viewPortfolio": "Ver Portafolio",

      "about.title": "Sobre mí",
      "about.text":
        "Desarrollador de software senior con más de 6 años de experiencia en programación de aplicaciones y diseño de páginas web. Experto en soluciones digitales personalizadas, plataformas interactivas y automatización de procesos. He trabajado en proyectos corporativos, por contrato y desarrollo propio, tanto en Estados Unidos como en Colombia. Me adapto tanto a entornos presenciales como remotos, aunque disfruto especialmente los proyectos virtuales que fomentan la colaboración global, la creatividad y la eficiencia técnica.",

      "exp.title": "Experiencia profesional",

      "exp.freelance.title": "Programador Senior Front-end · Freelance/Remoto",
      "exp.freelance.meta": "2018 — 2025",
      "exp.freelance.item1": "Apps web con HTML5, CSS3, JavaScript, React y APIs REST.",
      "exp.freelance.item2": "UI/UX, animaciones y responsive avanzado.",
      "exp.freelance.item3": "Colaboración internacional con equipos remotos.",

      "exp.suncast.title": "suncast · Illinois, EE.UU.",
      "exp.suncast.meta": "2024 — 2025",
      "exp.suncast.role": "Desarrollador de plataformas y sistemas internos",
      "exp.suncast.item1": "-Diseñe e implemente una plataforma automatizada basada en Excel y desarrollo web para la gestion operativa y financiera.",
      "exp.suncast.item2": "-Integré interfaces modernas optimizadas para análisis de datos y control administrativo.",
      "exp.suncast.item3": "-Participé en la creación del sistema presentado en la demo corporativa 2025.",

      "exp.amazon.title": "Amazon · Illinois, EE.UU.",
      "exp.amazon.meta": "2023",
      "exp.amazon.role": "Desarrollador de soporte y automatización de procesos",
      "exp.amazon.item1": "-Desarrollo de módulos web para gestión de personal y control de bloques.",
      "exp.amazon.item2": "-Optimización de flujos internos mediante scripts y automatizaciones funcionales.",

      "exp.cheese.title": "Cheese Merchants of America · West Chicago, EE. UU",
      "exp.cheese.meta": "2021 — 2022",
      "exp.cheese.role": "Diseñador web y programador front-end",
      "exp.cheese.item1": "-Creación de la plataforma digital para pedidos y gestión de clientes.",
      "exp.cheese.item2": "-Implementación de diseño adaptable con enfoque en experiencia de usuario (UI/UX).",

      "exp.projects.title": "Proyectos por contrato y desarrollo propio",
      "exp.projects.meta": "2018 — Presente",
      "exp.projects.item1": "-Diseño de páginas web y sistemas personalizados para empresas de distintos sectores.",
      "exp.projects.item2": "-En Colombia desarrollé la web corporativa de TecnoAndes S.A.S., del sector industrial.",
      "exp.projects.item3": "-Creación de mi página web profesional y portafolio interactivo, donde presento demos de mis proyectos y sistemas automatizados.",

      "skills.title": "Habilidades Técnicas",
      "skills.languagesTitle": "Lenguajes & Frameworks",
      "skills.languagesText": "HTML5 · CSS3 · JavaScript (ES6+) · SQL · React · Node.js · (MySQL)",
      "skills.toolsTitle": "Herramientas & Ecosistema",
      "skills.toolsText": "VS Code · Git/GitHub · Figma · Vite · Firebase · Excel avanzado",
      "skills.designTitle": "Diseño & Front-end",
      "skills.designText": "UX/UI · Accesibilidad · Diseño responsivo · Animaciones CSS · Consumo e implementacion de APIs REST",
      "skills.automationTitle": "Automatizacion & Operaciones",
      "skills.automationText": "Automatizacion y desarrollo de sistemas empresariales · Integraciones API- hosting y gestion de proyectos web",

      "projects.title": "Proyectos Destacados",
      "projects.item1": "Dashboard Empresarial — KPIs de ventas y logística en tiempo real.",
      "projects.item2": "Portafolio Profesional — Optimizado para reclutadores y empresas.",
      "projects.item3": "Landing eCommerce — Animaciones y conversión enfocada.",
      "projects.viewFull": "Ver portafolio completo",

      "contact.title": "Contacto",
      "contact.text1": "Escríbeme a andreyclopez11@gmail.com o llámame al +1 224 998 8164.",
      "contact.text2": "GitHub · LinkedIn",

      "sign.greeting": "Atentamente,",
      "sign.name": "Danilo Andrey Cuadros López",

      "qr.text": "Escanea para ver portafolio",

      "footer.text": "©️ 2025 Danilo Andrey Cuadros López — Programador Senior Web",

      "modal.title": "Contacto",
      "modal.emailLabel": "Email:",
      "modal.phoneLabel": "Teléfono:",
      "modal.locationLabel": "Ubicación:",
      "modal.locationValue": "Maywood, Illinois (EE. UU.)"
    },

    en: {
      "hero.name": "Danilo Andrey Cuadros Lopez",
      "hero.tagline": "Senior Software Developer · Front-end | UI/UX | Web Apps",
      "hero.location": "Maywood, Illinois · andreyclopez11@gmail.com · +1 224 998 8164",

      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.quickContact": "Quick Contact",
      "nav.downloadPDF": "Download PDF",
      "nav.viewPortfolio": "View Portfolio",

      "about.title": "About Me",
      "about.text":
        "Senior software developer with more than 6 years of experience in application programming and web page design. Expert in custom digital solutions, interactive platforms and process automation. I have worked on corporate projects, contract work and personal developments, both in the United States and Colombia. I adapt to on-site and remote environments, and I especially enjoy virtual projects that encourage global collaboration, creativity and technical efficiency.",

      "exp.title": "Professional Experience",

      "exp.freelance.title": "Senior Front-end Developer · Freelance/Remote",
      "exp.freelance.meta": "2018 — 2025",
      "exp.freelance.item1": "Web apps using HTML5, CSS3, JavaScript, React and REST APIs.",
      "exp.freelance.item2": "Advanced UI/UX, animations and responsive design.",
      "exp.freelance.item3": "International collaboration with remote teams.",

      "exp.suncast.title": "suncast · Illinois, USA",
      "exp.suncast.meta": "2024 — 2025",
      "exp.suncast.role": "Developer of internal platforms and systems",
      "exp.suncast.item1": "-Designed and implemented an automated platform based on Excel and web development for operational and financial management.",
      "exp.suncast.item2": "-Integrated modern interfaces optimized for data analysis and administrative control.",
      "exp.suncast.item3": "-Participated in the creation of the system presented in the 2025 corporate demo.",

      "exp.amazon.title": "Amazon · Illinois, USA",
      "exp.amazon.meta": "2023",
      "exp.amazon.role": "Support and process automation developer",
      "exp.amazon.item1": "-Development of web modules for staff management and block control.",
      "exp.amazon.item2": "-Optimization of internal workflows through scripts and functional automations.",

      "exp.cheese.title": "Cheese Merchants of America · West Chicago, USA",
      "exp.cheese.meta": "2021 — 2022",
      "exp.cheese.role": "Web designer and front-end developer",
      "exp.cheese.item1": "-Creation of the digital platform for orders and customer management.",
      "exp.cheese.item2": "-Implementation of responsive design focused on user experience (UI/UX).",

      "exp.projects.title": "Contract and personal projects",
      "exp.projects.meta": "2018 — Present",
      "exp.projects.item1": "-Design of websites and custom systems for companies in different industries.",
      "exp.projects.item2": "-In Colombia I developed the corporate website for TecnoAndes S.A.S., in the industrial sector.",
      "exp.projects.item3": "-Creation of my professional website and interactive portfolio where I showcase demos of my projects and automated systems.",

      "skills.title": "Technical Skills",
      "skills.languagesTitle": "Languages & Frameworks",
      "skills.languagesText": "HTML5 · CSS3 · JavaScript (ES6+) · SQL · React · Node.js · (MySQL)",
      "skills.toolsTitle": "Tools & Ecosystem",
      "skills.toolsText": "VS Code · Git/GitHub · Figma · Vite · Firebase · Advanced Excel",
      "skills.designTitle": "Design & Front-end",
      "skills.designText": "UX/UI · Accessibility · Responsive design · CSS animations · REST API consumption and implementation",
      "skills.automationTitle": "Automation & Operations",
      "skills.automationText": "Business systems automation and development · API integrations · hosting and web project management",

      "projects.title": "Highlighted Projects",
      "projects.item1": "Business Dashboard — Real-time sales and logistics KPIs.",
      "projects.item2": "Professional Portfolio — Optimized for recruiters and companies.",
      "projects.item3": "eCommerce Landing — Animations and conversion-focused design.",
      "projects.viewFull": "View full portfolio",

      "contact.title": "Contact",
      "contact.text1": "Write to me at andreyclopez11@gmail.com or call me at +1 224 998 8164.",
      "contact.text2": "GitHub · LinkedIn",

      "sign.greeting": "Sincerely,",
      "sign.name": "Danilo Andrey Cuadros Lopez",

      "qr.text": "Scan to view portfolio",

      "footer.text": "©️ 2025 Danilo Andrey Cuadros Lopez — Senior Web Developer",

      "modal.title": "Contact",
      "modal.emailLabel": "Email:",
      "modal.phoneLabel": "Phone:",
      "modal.locationLabel": "Location:",
      "modal.locationValue": "Maywood, Illinois (USA)"
    }
  };

  let currentLang = localStorage.getItem("lang") || "es";

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = translations[currentLang];
      if (dict && dict[key]) {
        // cuidado con enlaces que llevan HTML dentro
        if (el.tagName === "P" || el.tagName === "SMALL") {
          // Si el texto contiene enlaces fijos, sólo reemplazamos el texto plano cuando aplique
          // En este caso usamos textContent para la mayoría y dejamos los <a> definidos en el HTML.
          if (!el.querySelector("a")) {
            el.textContent = dict[key];
          }
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Footer especial si quieres sobreescribir todo:
    const contactText1 = document.querySelector('[data-i18n="contact.text1"]');
    if (contactText1) {
      if (currentLang === "es") {
        contactText1.innerHTML =
          'Escríbeme a <a href="mailto:andreyclopez11@gmail.com">andreyclopez11@gmail.com</a> o llámame al <a href="tel:+12249988164">+1 224 998 8164</a>.';
      } else {
        contactText1.innerHTML =
          'Write to me at <a href="mailto:andreyclopez11@gmail.com">andreyclopez11@gmail.com</a> or call me at <a href="tel:+12249988164">+1 224 998 8164</a>.';
      }
    }

    const contactText2 = document.querySelector('[data-i18n="contact.text2"]');
    if (contactText2) {
      contactText2.innerHTML =
        '<a id="githubLink" href="https://github.com/andreyclopez11-ctrl" target="_blank" rel="noopener">GitHub</a> · ' +
        '<a id="linkedinLink" href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener">LinkedIn</a>';
    }

    localStorage.setItem("lang", currentLang);
  }

  function updateLangToggle() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.textContent = currentLang === "es" ? "EN" : "ES";
  }

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyTranslations();
      updateLangToggle();
    });
  }

  // aplicar al inicio
  applyTranslations();
  updateLangToggle();
});
