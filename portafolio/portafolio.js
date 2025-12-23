// ===== TRADUCCIONES ES / EN =====

const i18n = {
  es: {
    header_title: "Portafolio profesional — Demo estructural",
    header_subtitle:
      "Perfil pensado para reclutadores y leads técnicos: muestra tu historia profesional de forma clara y visual.",
    back_link: "← Volver al portafolio",

    profile_title: "Perfil",
    profile_body:
      "Programador Senior front-end enfocado en interfaces limpias, accesibilidad y rendimiento. " +
      "Esta página funciona como un “sobre mí” extendido para compartir con reclutadores y leads técnicos.",
    chip_frontend: "Front-end / UI",
    chip_dashboards: "Dashboards",
    chip_ecommerce: "eCommerce",

    skills_title: "Habilidades clave",
    skill_html: "HTML5 / CSS3 (Flexbox, Grid, responsive)",
    skill_js: "JavaScript / TypeScript",
    skill_react: "React, componentes reutilizables",
    skill_ux: "Diseño de interfaces y UX",

    exp_title: "Experiencia simulada (plantilla para CV real)",
    exp1_title: "Front-end Lead — TechLogix (demo)",
    exp1_meta: "2022 – Presente · Remoto",
    exp1_li1: "Diseño y construcción de librería de componentes UI para varios productos internos.",
    exp1_li2: "Implementación de dashboards de operaciones con métricas de ventas en tiempo casi real.",
    exp2_title: "UI Engineer — StoreWave (demo)",
    exp2_meta: "2020 – 2022 · Híbrido",
    exp2_li1: "Desarrollo de landings orientadas a conversión para campañas de marketing.",
    exp2_li2: "Optimización de tiempos de carga y métricas de Core Web Vitals.",
    exp_note:
      "En tu versión real solo reemplazas empresas demo, fechas y logros por tus proyectos verdaderos " +
      "(Amazon Flex, compañías de Colombia, etc.).",

    how_title: "Cómo uso este perfil en procesos reales",
    how_li1: "Envío esta página junto con mi CV en PDF a reclutadores como resumen rápido de mi perfil.",
    how_li2:
      "Durante entrevistas, muestro el dashboard, esta página y la landing como casos concretos de diseño y front-end.",
    how_li3:
      "LinkedIn, GitHub y este portafolio cuentan la misma historia: front-end, dashboards y eCommerce.",

    cta_cv: "Descargar CV (demo)",
    cta_github: "Ver repositorios en GitHub (demo)",

    cv_demo_alert:
      "Esto es solo un botón de demostración.\nAquí enlazarías el PDF real de tu CV cuando lo tengas listo."
  },
  en: {
    header_title: "Professional portfolio — Structural demo",
    header_subtitle:
      "Profile designed for recruiters and tech leads: shows your professional story in a clear, visual way.",
    back_link: "← Back to portfolio",

    profile_title: "Profile",
    profile_body:
      "Senior front-end developer focused on clean interfaces, accessibility and performance. " +
      "This page acts as an extended “about me” to share with recruiters and tech leads.",
    chip_frontend: "Front-end / UI",
    chip_dashboards: "Dashboards",
    chip_ecommerce: "eCommerce",

    skills_title: "Key skills",
    skill_html: "HTML5 / CSS3 (Flexbox, Grid, responsive)",
    skill_js: "JavaScript / TypeScript",
    skill_react: "React, reusable components",
    skill_ux: "Interface design & UX",

    exp_title: "Simulated experience (template for real CV)",
    exp1_title: "Front-end Lead — TechLogix (demo)",
    exp1_meta: "2022 – Present · Remote",
    exp1_li1: "Designed and built a UI component library for several internal products.",
    exp1_li2: "Implemented operations dashboards with near real-time sales metrics.",
    exp2_title: "UI Engineer — StoreWave (demo)",
    exp2_meta: "2020 – 2022 · Hybrid",
    exp2_li1: "Developed conversion-focused landing pages for marketing campaigns.",
    exp2_li2: "Optimized load times and Core Web Vitals metrics.",
    exp_note:
      "In the real version you simply replace demo companies, dates and achievements with your real projects " +
      "(Amazon Flex, Colombian companies, etc.).",

    how_title: "How I use this profile in real processes",
    how_li1: "I send this page together with my PDF resume to recruiters as a quick profile overview.",
    how_li2:
      "During interviews I showcase the dashboard, this page and the landing as concrete design and front-end examples.",
    how_li3:
      "LinkedIn, GitHub and this portfolio tell the same story: front-end, dashboards and eCommerce.",

    cta_cv: "Download resume (demo)",
    cta_github: "View GitHub repositories (demo)",

    cv_demo_alert:
      "This is just a demo button.\nHere you would link your actual resume PDF when it is ready."
  }
};

let currentLang = localStorage.getItem("portfolioLang") || "es";

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle(
      "lang-active",
      btn.getAttribute("data-lang-btn") === lang
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Idioma inicial
  applyLanguage(currentLang);

  // Botones ES / EN
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      applyLanguage(lang);
    });
  });

  // Botón CV demo (solo muestra alerta para que sepas qué pasaría)
  const cvBtn = document.getElementById("cvDemoBtn");
  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(i18n[currentLang].cv_demo_alert);
    });
  }
});