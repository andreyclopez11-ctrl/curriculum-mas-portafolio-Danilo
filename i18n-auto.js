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

      "pricing.request": "Solicitar cotización",
      "pricing.request.subtitle": "Completa el formulario y recibirás respuesta por correo.",
      
      "pricing.cta.whatsapp": "WhatsApp",
      "pricing.cta.form": "Enviar formulario",
      "form.name": "Nombre",
      "form.email": "Correo",
      "form.message": "Mensaje",
      "form.send": "Enviar mensaje",
      // ✅ TU HTML usa nav.pricing
      "nav.pricing": "Servicios y precios",
      // Compatibilidad (por si luego lo cambias)
      "nav.services": "Servicios & Precios",

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
      "skills.designText":
        "UX/UI · Accesibilidad · Diseño responsivo · Animaciones CSS · Consumo e implementacion de APIs REST",
      "skills.automationTitle": "Automatizacion & Operaciones",
      "skills.automationText":
        "Automatizacion y desarrollo de sistemas empresariales · Integraciones API- hosting y gestion de proyectos web",

      "projects.title": "Proyectos Destacados",
      "projects.item1": "Dashboard Empresarial — KPIs de ventas y logística en tiempo real.",
      "projects.item2": "Portafolio Profesional — Optimizado para reclutadores y empresas.",
      "projects.item3": "Landing eCommerce — Animaciones y conversión enfocada.",
      "projects.viewFull": "Ver portafolio completo",

      "contact.title": "Contacto",
      "contact.text2": "GitHub · LinkedIn",

      "sign.greeting": "Atentamente,",
      "sign.name": "Danilo Andrey Cuadros López",
      "qr.text": "Escanea para ver portafolio",

      "footer.text": "©️ 2025 Danilo Andrey Cuadros López — Programador Senior Web",

      "modal.title": "Contacto",
      "modal.emailLabel": "Email:",
      "modal.phoneLabel": "Teléfono:",
      "modal.locationLabel": "Ubicación:",
      "modal.locationValue": "Maywood, Illinois (EE. UU.)",

      // ===========================
      // ✅ PRICING (TU HTML)
      // ===========================
      "pricing.title": "Servicios y Precios",
      "pricing.subtitle":
        "Desarrollo web profesional con rangos reales según alcance, nivel de diseño y funcionalidades.",

      "pricing.table.service": "Servicio",
      "pricing.table.level": "Nivel / Complejidad",
      "pricing.table.price": "Rango de Precio (USD)",
      "pricing.table.includes": "Incluye",

      "pricing.group.landing": "Landing Page",
      "pricing.landing.name": "Landing Page",
      "pricing.level.basic": "Básico",
      "pricing.level.mid": "Intermedio",
      "pricing.level.pro": "Avanzado",
      "pricing.landing.basic": "1 página (secciones), responsive, WhatsApp + formulario",
      "pricing.landing.mid": "Diseño más premium, mejor estructura, optimización básica",
      "pricing.landing.pro": "Animaciones suaves, secciones dinámicas, UX mejorada",

      "pricing.group.corp": "Web Corporativo / Profesional",
      "pricing.corp.name": "Sitio Profesional",
      "pricing.corp.basic": "Hasta 5 secciones, responsive, estructura sólida",
      "pricing.corp.mid": "SEO técnico básico, mejor rendimiento, UI premium",
      "pricing.corp.pro": "Copy mejorado (con info del cliente), UX/arquitectura pro",

      "pricing.group.business": "Business / Servicios Avanzados",
      "pricing.business.name": "Business",
      "pricing.business.basic": "Catálogo de servicios + formularios avanzados",
      "pricing.business.mid": "Integraciones (Calendly/WhatsApp), estructura conversión",
      "pricing.business.pro": "Diseño premium completo + experiencia tipo “agencia”",

      "pricing.group.ecom": "E-commerce",
      "pricing.ecom.name": "Tienda Online",
      "pricing.ecom.basic": "Tienda simple, pagos básicos, configuración inicial",
      "pricing.ecom.mid": "Variaciones, checkout completo, estructura más robusta",
      "pricing.ecom.pro": "Inventario, automatizaciones, integraciones avanzadas",

      "pricing.group.redesign": "Rediseño / Optimización",
      "pricing.redesign.name": "Rediseño Web",
      "pricing.redesign.basic": "Mejora visual y estructura, ajustes principales",
      "pricing.redesign.pro": "Reestructura completa, mejor UX, optimización adicional",

      "pricing.group.maintenance": "Mantenimiento Mensual (Opcional)",
      "pricing.maint.basic.name": "Plan Básico",
      "pricing.maint.basic.desc": "Backups + cambios menores (hasta 30 min/mes)",
      "pricing.maint.pro.name": "Plan Profesional",
      "pricing.maint.pro.desc": "Hasta 2 horas/mes + soporte y actualizaciones",
      "pricing.maint.biz.name": "Plan Business",
      "pricing.maint.biz.desc": "Soporte continuo + optimización mensual",

      // ✅ Este lo ponemos como HTML para conservar <strong>
      "pricing.notes":
        "<strong>Nota:</strong> La inversión final depende del alcance (páginas, contenido, integraciones y funcionalidades). Si el cliente ya tiene dominio/hosting o necesita migración, se cotiza según el caso.",

      "pricing.cta.email": "📩 Solicitar cotización por email",
      "pricing.cta.call": "📞 Llamar",

      // ===========================
      // Compatibilidad (services.*)
      // ===========================
      "services.title": "Servicios & Precios — Desarrollo Web Profesional"
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

      "pricing.cta.whatsapp": "WhatsApp",
      "pricing.cta.form": "Send form",
      "form.name": "Full name",
      "form.email": "Email",
      "form.message": "Message",
      "form.send": "Send message",

      "pricing.request": "Request a quote",
      "pricing.request.subtitle": "Fill out the form and you’ll receive a reply by email.",

      // ✅ TU HTML usa nav.pricing
      "nav.pricing": "Services & Pricing",
      // Compatibilidad
      "nav.services": "Services & Pricing",

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
      "exp.suncast.item1":
        "-Designed and implemented an automated platform based on Excel and web development for operational and financial management.",
      "exp.suncast.item2":
        "-Integrated modern interfaces optimized for data analysis and administrative control.",
      "exp.suncast.item3":
        "-Participated in the creation of the system presented in the 2025 corporate demo.",

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
      "exp.projects.item2":
        "-In Colombia I developed the corporate website for TecnoAndes S.A.S., in the industrial sector.",
      "exp.projects.item3":
        "-Creation of my professional website and interactive portfolio where I showcase demos of my projects and automated systems.",

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
      "contact.text2": "GitHub · LinkedIn",

      "sign.greeting": "Sincerely,",
      "sign.name": "Danilo Andrey Cuadros Lopez",
      "qr.text": "Scan to view portfolio",
      "footer.text": "©️ 2025 Danilo Andrey Cuadros Lopez — Senior Web Developer",

      "modal.title": "Contact",
      "modal.emailLabel": "Email:",
      "modal.phoneLabel": "Phone:",
      "modal.locationLabel": "Location:",
      "modal.locationValue": "Maywood, Illinois (USA)",

      // ===========================
      // ✅ PRICING (TU HTML)
      // ===========================
      "pricing.title": "Services & Pricing",
      "pricing.subtitle":
        "Professional web development with realistic ranges based on scope, design level, and features.",

      "pricing.table.service": "Service",
      "pricing.table.level": "Level / Complexity",
      "pricing.table.price": "Price Range (USD)",
      "pricing.table.includes": "Includes",

      "pricing.group.landing": "Landing Page",
      "pricing.landing.name": "Landing Page",
      "pricing.level.basic": "Basic",
      "pricing.level.mid": "Intermediate",
      "pricing.level.pro": "Advanced",
      "pricing.landing.basic": "Single-page sections, responsive, WhatsApp + contact form",
      "pricing.landing.mid": "More premium design, better structure, basic optimization",
      "pricing.landing.pro": "Smooth animations, dynamic sections, improved UX",

      "pricing.group.corp": "Corporate / Professional Website",
      "pricing.corp.name": "Professional Website",
      "pricing.corp.basic": "Up to 5 sections, responsive, solid structure",
      "pricing.corp.mid": "Basic technical SEO, better performance, premium UI",
      "pricing.corp.pro": "Improved copy (with client info), pro UX/architecture",

      "pricing.group.business": "Business / Advanced Services",
      "pricing.business.name": "Business",
      "pricing.business.basic": "Service catalog + advanced forms",
      "pricing.business.mid": "Integrations (Calendly/WhatsApp), conversion-focused structure",
      "pricing.business.pro": "Full premium design + agency-like experience",

      "pricing.group.ecom": "E-commerce",
      "pricing.ecom.name": "Online Store",
      "pricing.ecom.basic": "Simple store, basic payments, initial setup",
      "pricing.ecom.mid": "Variations, full checkout, more robust structure",
      "pricing.ecom.pro": "Inventory, automations, advanced integrations",

      "pricing.group.redesign": "Redesign / Optimization",
      "pricing.redesign.name": "Website Redesign",
      "pricing.redesign.basic": "Visual & structure improvements, main adjustments",
      "pricing.redesign.pro": "Full restructure, better UX, additional optimization",

      "pricing.group.maintenance": "Monthly Maintenance (Optional)",
      "pricing.maint.basic.name": "Basic Plan",
      "pricing.maint.basic.desc": "Backups + minor changes (up to 30 min/month)",
      "pricing.maint.pro.name": "Professional Plan",
      "pricing.maint.pro.desc": "Up to 2 hours/month + support and updates",
      "pricing.maint.biz.name": "Business Plan",
      "pricing.maint.biz.desc": "Ongoing support + monthly optimization",

      "pricing.notes":
        "<strong>Note:</strong> Final investment depends on scope (pages, content, integrations, and features). If the client already has domain/hosting or needs migration, it’s quoted case-by-case.",

      "pricing.cta.email": "📩 Request a quote by email",
      "pricing.cta.call": "📞 Call",

      // Compatibilidad
      "services.title": "Services & Pricing — Professional Web Development"
    }
  };

  let currentLang = localStorage.getItem("lang") || "es";

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = translations[currentLang];
      if (!dict || !dict[key]) return;

      // Si el elemento contiene links internos, NO lo tocamos aquí (lo hacemos aparte)
      if ((el.tagName === "P" || el.tagName === "SMALL") && el.querySelector("a")) return;

      // ✅ Conserva HTML solo donde lo necesitamos
      if (key === "pricing.notes") {
        el.innerHTML = dict[key];
        return;
      }

      el.textContent = dict[key];
    });

    // Contacto con enlaces (innerHTML controlado)
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
        '<a id="linkedinLink" href="https://www.linkedin.com/in/andrey-lopez-44559038b" target="_blank" rel="noopener">LinkedIn</a>';
    }

    localStorage.setItem("lang", currentLang);
  }

  function updateLangToggle() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.textContent = currentLang === "es" ? "EN" : "ES";
    btn.setAttribute("aria-label", currentLang === "es" ? "Switch language" : "Cambiar idioma");
  }

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyTranslations();
      updateLangToggle();
    });
  }

  applyTranslations();
  updateLangToggle();
});
