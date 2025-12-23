// ===== Configura tus enlaces para QR y botones =====
const GITHUB_URL   = "https://github.com/andreyclopez11-ctrl";         // CAMBIA AQUÍ
const LINKEDIN_URL = "https://linkedin.com/in/tu-usuario";     // CAMBIA AQUÍ
const QR_TARGET    = GITHUB_URL; // Qué URL quieres en el QR (puedes poner Linktree o LinkedIn)

// ===== Navegación entre secciones =====
const buttons = document.querySelectorAll('.buttons button');
const sections = document.querySelectorAll('.section');

function setActive(sectionId){
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId)?.classList.add('active');
  buttons.forEach(b => b.removeAttribute('data-active'));
  const current = [...buttons].find(b => b.dataset.section === sectionId);
  if (current) current.setAttribute('data-active','true');
}

buttons.forEach(btn=>{
  const id = btn.getAttribute('data-section');
  if (!id) return;
  btn.addEventListener('click', ()=> setActive(id));
});
setActive(document.querySelector('.buttons button[data-section]')?.dataset.section || 'about');

// ===== Fondo de partículas en Canvas =====
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('bg');
const ctx = canvas?.getContext ? canvas.getContext('2d') : null;

let W,H,particles=[],mouse={x:0,y:0};
const NUM = 120, MAX_SPEED = 0.6, LINK_DIST = 110;

function resize(){ if(!canvas) return; W=canvas.width=innerWidth; H=canvas.height=innerHeight; }
function rand(n){ return Math.random()*n; }
function init(){
  particles = Array.from({length:NUM},()=>({
    x:rand(W), y:rand(H),
    vx:(Math.random()*2-1)*MAX_SPEED, vy:(Math.random()*2-1)*MAX_SPEED,
    r:1.4+Math.random()*1.6
  }));
}
function step(){
  if(!ctx) return;
  ctx.clearRect(0,0,W,H);
  const grad = ctx.createRadialGradient(mouse.x,mouse.y,20, mouse.x,mouse.y,220);
  grad.addColorStop(0,'rgba(127,255,212,0.14)'); grad.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);

  for(const p of particles){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>W) p.vx*=-1;
    if(p.y<0||p.y>H) p.vy*=-1;
    const dx=mouse.x-p.x, dy=mouse.y-p.y, d=Math.hypot(dx,dy);
    if(d<160){ p.vx+=(dx/d)*0.003; p.vy+=(dy/d)*0.003; }
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,.75)'; ctx.fill();
  }
  ctx.lineWidth=1;
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a=particles[i], b=particles[j];
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<LINK_DIST){
        ctx.strokeStyle=`rgba(127,255,212,${(1-d/LINK_DIST)*0.35})`;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
  }
  requestAnimationFrame(step);
}
if(canvas && ctx){
  resize(); init();
  addEventListener('resize', resize);
  addEventListener('mousemove', e=>{mouse.x=e.clientX; mouse.y=e.clientY});
  if(!prefersReduced) requestAnimationFrame(step);
}

// ===== Modal de contacto =====
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openContactModal');
function openModal(){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); modal.querySelector('.modal__dialog').focus(); }
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
openBtn?.addEventListener('click', openModal);
modal?.addEventListener('click', e=>{ if(e.target.hasAttribute('data-close')) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && modal?.classList.contains('open')) closeModal(); });

// ===== Descargar PDF =====
const pdfBtn = document.getElementById('downloadPDF');
let __activeSectionId = null;
function showAllSectionsForPrint(){
  const active = document.querySelector('.section.active');
  __activeSectionId = active ? active.id : null;
  document.querySelectorAll('.section').forEach(s => s.classList.add('active'));
}
function restoreActiveAfterPrint(){
  if(!__activeSectionId) return;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(__activeSectionId)?.classList.add('active');
}
pdfBtn?.addEventListener('click', ()=>{
  if (modal?.classList.contains('open')) closeModal();
  showAllSectionsForPrint();
  window.onafterprint = ()=> restoreActiveAfterPrint();
  window.print();
  setTimeout(restoreActiveAfterPrint, 500);
});

// ===== Enlaces y QR dinámicos =====
document.getElementById('githubLink')?.setAttribute('href', GITHUB_URL);
document.getElementById('linkedinLink')?.setAttribute('href', LINKEDIN_URL);

// Genera el QR usando un servicio público (sin librerías).
// Si prefieres LinkedIn o Linktree, cambia QR_TARGET arriba.
const qrImg = document.getElementById('qrImage');
if (qrImg){
  const url = "https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=" + encodeURIComponent(QR_TARGET);
  qrImg.src = url;
  qrImg.alt = "Código QR hacia " + QR_TARGET;
}

  /* ===== i18n automático (sin tocar tu HTML) ===== */

/* Ajusta este arreglo si cambias textos en tu página */
const STRINGS = [
  // Tabs / botones de navegación
  { key: "tab_about", es: "Sobre mí", en: "About" },
  { key: "tab_experience", es: "Experiencia", en: "Experience" },
  { key: "tab_skills", es: "Habilidades", en: "Skills" },
  { key: "tab_projects", es: "Proyectos", en: "Projects" },
  { key: "tab_contact", es: "Contacto", en: "Contact" },
  { key: "tab_quick", es: "Contacto rápido", en: "Quick Contact" },
  { key: "tab_pdf", es: "Descargar PDF", en: "Download PDF" },
  { key: "tab_view", es: "Ver Portafolio", en: "View Portfolio" },

  // Encabezado profesional
  { key: "headline",
    es: "Programador Senior · Front-end | UI/UX | Web Apps",
    en: "Senior Software Developer · Front-end | UI/UX | Web Apps"
  },

  // Títulos de secciones
  { key: "about_title", es: "Sobre mí", en: "About" },
  { key: "exp_title", es: "Experiencia", en: "Experience" },
  { key: "skills_title", es: "Habilidades", en: "Skills" },
  { key: "projects_title", es: "Proyectos", en: "Projects" },
  { key: "contact_title", es: "Contacto", en: "Contact" },
  { key: "quick_title", es: "Contacto rápido", en: "Quick Contact" },

  // Párrafo “Sobre mí” (todo en una sola línea aquí para que coincida)
  { key: "about_body",
    es: "Soy un programador senior con más de 6 años de experiencia en desarrollo web, especializado en interfaces modernas, usabilidad y rendimiento. He trabajado para compañías internacionales y nacionales como Bavaria (Colombia), Corona Colcerámica (Colombia), Amazon (Illinois, EE.UU.) y Suncast (Illinois, EE.UU.). Me enfoco en crear sitios y aplicaciones que combinen estética, funcionalidad y velocidad, aplicando buenas prácticas de código limpio y accesible.",
    en: "I’m a senior web developer with 6+ years of experience, focused on modern interfaces, usability, and performance. I’ve worked with Bavaria (Colombia), Corona Colcerámica (Colombia), Amazon (Illinois, USA), and Suncast (Illinois, USA). I build fast, accessible websites and apps that combine clean code, strong UX, and polished visuals."
  },

  // Bullets de experiencia (agrega más si tienes)
  { key: "exp_1",
    es: "Front-end / UI-UX — Proyectos para empresas de EE.UU. y LatAm (React, Tailwind, Vite, APIs).",
    en: "Front-end / UI-UX — Projects for US & LatAm companies (React, Tailwind, Vite, APIs)."
  },
  { key: "exp_2",
    es: "Optimización de performance, accesibilidad (WCAG) y SEO técnico.",
    en: "Performance tuning, accessibility (WCAG), and technical SEO."
  },
  { key: "exp_3",
    es: "Automatización con Node.js, integraciones REST/GraphQL y despliegues en Vercel/GitHub Pages.",
    en: "Automation with Node.js, REST/GraphQL integrations, and deployments to Vercel/GitHub Pages."
  },

  // Skills
  { key: "skills_body",
    es: "HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git/GitHub, UI/UX, Figma, Responsive Design, Performance, Accesibilidad, SEO.",
    en: "HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git/GitHub, UI/UX, Figma, Responsive Design, Performance, Accessibility, SEO."
  },

  // Proyectos
  { key: "proj_1",
    es: "Dashboard de analítica (React + Charts) con dark mode y filtros.",
    en: "Analytics dashboard (React + Charts) with dark mode and filters."
  },
  { key: "proj_2",
    es: "Landing premium multi-idioma con Lighthouse 95+.",
    en: "Premium multi-language landing page with Lighthouse 95+."
  },
  { key: "proj_3",
    es: "Component library con Tailwind y accesibilidad ARIA.",
    en: "Component library with Tailwind and ARIA accessibility."
  },

  // Contacto
  { key: "contact_text",
    es: "¿Tienes un proyecto? Hablemos.",
    en: "Got a project? Let’s talk."
  },

  // QR
  { key: "qr_caption",
    es: "Escanea para ver portafolio",
    en: "Scan to view portfolio"
  },

  // Botón enviar
  { key: "quick_send", es: "Enviar", en: "Send" },
];

/* Placeholders del formulario */
const PLACEHOLDERS = [
  { es: "Nombre",  en: "Name"   },
  { es: "Correo",  en: "Email"  },
  { es: "Mensaje", en: "Message"}
];

let currentLang = "es";

/* --- Utilidades --- */
const normalize = s => s.replace(/\s+/g, " ").trim();

function walkTextNodes(root, cb) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(cb);
}

function applyLanguage(lang) {
  // Textos visibles
  walkTextNodes(document.body, (tn) => {
    const parent = tn.parentElement;
    if (!parent) return;

    const original = normalize(tn.nodeValue || "");
    if (!original) return;

    // Guarda original una sola vez
    if (!parent.dataset.origText) parent.dataset.origText = tn.nodeValue;

    // Busca coincidencia exacta en ES/EN
    for (const item of STRINGS) {
      if (original === normalize(item.es) || original === normalize(item.en)) {
        tn.nodeValue = (lang === "en" ? item.en : item.es);
        return;
      }
    }
    // Si no hay match, restaura al cambiar a ES
    if (lang === "es" && parent.dataset.origText) {
      tn.nodeValue = parent.dataset.origText;
    }
  });

  // Placeholders
  document.querySelectorAll("input, textarea").forEach((el) => {
    if (el.placeholder) {
      if (!el.dataset.origPh) el.dataset.origPh = el.placeholder;
      for (const ph of PLACEHOLDERS) {
        if (normalize(el.placeholder) === normalize(ph.es) ||
            normalize(el.placeholder) === normalize(ph.en)) {
          el.placeholder = (lang === "en" ? ph.en : ph.es);
          break;
        }
      }
      if (lang === "es") el.placeholder = el.dataset.origPh;
    }
    // Botones tipo input submit con value
    if (el.tagName === "INPUT" && el.type === "submit" && el.value) {
      if (!el.dataset.origVal) el.dataset.origVal = el.value;
      const match = STRINGS.find(s => s.es === el.value || s.en === el.value);
      if (match) el.value = (lang === "en" ? match.en : match.es);
      if (lang === "es") el.value = el.dataset.origVal;
    }
  });

  // Atributo lang del documento
  document.documentElement.lang = (lang === "en" ? "en" : "es");

  // Botón
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang.toUpperCase();
    btn.setAttribute("aria-label", lang === "en" ? "Switch language" : "Cambiar idioma");
  }
}

function injectToggle() {
  let btn = document.getElementById("lang-toggle");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "lang-toggle";
    btn.textContent = "ES";
    btn.style.cssText = `
      position:fixed; top:14px; right:14px; z-index:9999;
      padding:10px 14px; border-radius:10px; cursor:pointer;
      background:#0b1220; color:#e5e7eb; border:1px solid #334155;
    `;
    (document.querySelector("header") || document.body).appendChild(btn);
  }
  btn.addEventListener("click", () => {
    currentLang = (currentLang === "es" ? "en" : "es");
    applyLanguage(currentLang);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  // Idioma inicial: ES (cámbialo a 'en' si quieres arrancar en inglés)
  currentLang = "es";
  injectToggle();
  applyLanguage(currentLang);
});

/* ===== MODO TURBO: traducir bloques largos por título de sección ===== */

/* Textos finales y limpios (ajústalos si quieres) */
const BLOCKS = {
  es: {
    about_body:
      "Soy un programador senior con más de 6 años de experiencia en desarrollo web, especializado en interfaces modernas, usabilidad y rendimiento. He trabajado para compañías internacionales y nacionales como Bavaria (Colombia), Corona Colcerámica (Colombia), Amazon (Illinois, EE.UU.) y Suncast (Illinois, EE.UU.). Me enfoco en crear sitios y aplicaciones que combinen estética, funcionalidad y velocidad, aplicando buenas prácticas de código limpio y accesible.",
    exp_list: [
      "Front-end / UI-UX — Proyectos para empresas de EE.UU. y LatAm (React, Tailwind, Vite, APIs).",
      "Optimización de performance, accesibilidad (WCAG) y SEO técnico.",
      "Automatización con Node.js, integraciones REST/GraphQL y despliegues en Vercel/GitHub Pages."
    ],
    skills_body:
      "HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git/GitHub, UI/UX, Figma, Responsive Design, Performance, Accesibilidad, SEO.",
    projects_list: [
      "Dashboard de analítica (React + Charts) con dark mode y filtros.",
      "Landing premium multi-idioma con Lighthouse 95+.",
      "Component library con Tailwind y accesibilidad ARIA."
    ],
    contact_text: "¿Tienes un proyecto? Hablemos.",
    qr_caption: "Escanea para ver portafolio"
  },
  en: {
    about_body:
      "I’m a senior web developer with 6+ years of experience, focused on modern interfaces, usability, and performance. I’ve worked with Bavaria (Colombia), Corona Colcerámica (Colombia), Amazon (Illinois, USA), and Suncast (Illinois, USA). I build fast, accessible websites and apps that combine clean code, strong UX, and polished visuals.",
    exp_list: [
      "Front-end / UI-UX — Projects for US & LatAm companies (React, Tailwind, Vite, APIs).",
      "Performance tuning, accessibility (WCAG), and technical SEO.",
      "Automation with Node.js, REST/GraphQL integrations, and deployments to Vercel/GitHub Pages."
    ],
    skills_body:
      "HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git/GitHub, UI/UX, Figma, Responsive Design, Performance, Accessibility, SEO.",
    projects_list: [
      "Analytics dashboard (React + Charts) with dark mode and filters.",
      "Premium multi-language landing page with Lighthouse 95+.",
      "Component library with Tailwind and ARIA accessibility."
    ],
    contact_text: "Got a project? Let’s talk.",
    qr_caption: "Scan to view portfolio"
  }
};

/* Localiza una sección por su título (ES o EN) y devuelve el contenedor */
function findSectionByTitle(titleEs, titleEn) {
  const headings = Array.from(document.querySelectorAll("h2,h3,h4"));
  const match = headings.find(h => {
    const t = h.textContent.trim().toLowerCase();
    return t === titleEs.toLowerCase() || t === titleEn.toLowerCase();
  });
  return match ? match.parentElement : null;
}

/* Reemplaza el Párrafo siguiente al título */
function setSectionParagraph(sectionEl, text) {
  if (!sectionEl) return;
  const p = sectionEl.querySelector("p") || sectionEl.querySelector("div,section");
  if (p) p.textContent = text;
}

/* Reemplaza la Lista siguiente al título (ul/ol) */
function setSectionList(sectionEl, items) {
  if (!sectionEl) return;
  let ul = sectionEl.querySelector("ul,ol");
  if (!ul) {
    ul = document.createElement("ul");
    sectionEl.appendChild(ul);
  }
  ul.innerHTML = "";
  items.forEach(liTxt => {
    const li = document.createElement("li");
    li.textContent = liTxt;
    ul.appendChild(li);
  });
}

/* Texto suelto del QR (si existe en tu HTML) */
function setQrCaption(text) {
  const node = document.getElementById("qr-caption") ||
               Array.from(document.querySelectorAll("p,span")).find(n =>
                 /escanea|scan to view/i.test(n.textContent));
  if (node) node.textContent = text;
}

/* Inyecta los bloques largos según idioma, sin tocar tu HTML original */
function applyBlocks(lang) {
  // Sobre mí
  setSectionParagraph(findSectionByTitle("Sobre mí","About"), BLOCKS[lang].about_body);
  // Experiencia (lista)
  setSectionList(findSectionByTitle("Experiencia","Experience"), BLOCKS[lang].exp_list);
  // Habilidades (párrafo)
  setSectionParagraph(findSectionByTitle("Habilidades","Skills"), BLOCKS[lang].skills_body);
  // Proyectos (lista)
  setSectionList(findSectionByTitle("Proyectos","Projects"), BLOCKS[lang].projects_list);
  // Contacto (párrafo corto)
  setSectionParagraph(findSectionByTitle("Contacto","Contact"), BLOCKS[lang].contact_text);
  // QR caption
  setQrCaption(BLOCKS[lang].qr_caption);
}

/* >>> Añade esta llamada dentro de tu función existente que aplica idioma <<< */
/* Si tu función se llama applyLanguage(lang), simplemente agrega:  applyBlocks(lang); */

/* Ejemplo si no la tienes a mano, puedes enganchar aquí: */
(function hookApply() {
  const _apply = window.applyLanguage;
  if (typeof _apply === "function") {
    window.applyLanguage = function(lang){
      _apply(lang);
      applyBlocks(lang);
    };
  } else {
    // Fallback: si no existe applyLanguage, aplica bloques al cargar y al pulsar el toggle
    document.addEventListener("DOMContentLoaded", ()=> applyBlocks("es"));
    document.addEventListener("click", (e)=>{
      if (e.target && e.target.id === "lang-toggle") {
        const isEn = document.documentElement.lang === "en";
        applyBlocks(isEn ? "en" : "es");
      }
    });
  }
})();

/* ===== Extensión para traducir Experiencia, Habilidades y Proyectos ===== */

function translateExtraSections(lang) {
  const texts = {
    es: {
      skills_title: "Habilidades Técnicas",
      skills_sections: ["Lenguajes", "Herramientas", "Diseño"],
      experience_title: "Experiencia profesional",
      projects_title: "Proyectos Destacados",
      contact_text: "¿Tienes un proyecto? Hablemos.",
      qr_text: "Escanea para ver portafolio",
    },
    en: {
      skills_title: "Technical Skills",
      skills_sections: ["Languages", "Tools", "Design"],
      experience_title: "Professional Experience",
      projects_title: "Featured Projects",
      contact_text: "Got a project? Let’s talk.",
      qr_text: "Scan to view portfolio",
    },
  };

  const t = texts[lang];

  // --- HABILIDADES ---
  const skillsBlock = document.querySelector("h2, h3, h4");
  document.querySelectorAll("h2, h3, h4").forEach((h) => {
    const txt = h.textContent.trim();
    if (txt === "Habilidades Técnicas" || txt === "Technical Skills") h.textContent = t.skills_title;
    if (txt === "Lenguajes" || txt === "Languages") h.textContent = t.skills_sections[0];
    if (txt === "Herramientas" || txt === "Tools") h.textContent = t.skills_sections[1];
    if (txt === "Diseño" || txt === "Design") h.textContent = t.skills_sections[2];
  });

  // --- EXPERIENCIA ---
  document.querySelectorAll("h2, h3, h4").forEach((h) => {
    if (h.textContent.trim() === "Experiencia profesional" || h.textContent.trim() === "Professional Experience") {
      h.textContent = t.experience_title;
    }
  });

  // --- PROYECTOS DESTACADOS ---
  document.querySelectorAll("h2, h3, h4").forEach((h) => {
    if (h.textContent.trim() === "Proyectos Destacados" || h.textContent.trim() === "Featured Projects") {
      h.textContent = t.projects_title;
    }
  });

  // --- CONTACTO Y QR ---
  document.querySelectorAll("p, span").forEach((p) => {
    if (p.textContent.includes("¿Tienes un proyecto") || p.textContent.includes("Got a project"))
      p.textContent = t.contact_text;
    if (p.textContent.includes("Escanea para ver portafolio") || p.textContent.includes("Scan to view portfolio"))
      p.textContent = t.qr_text;
  });
}

// Enganchar esta función a los cambios de idioma
(function hookExtra() {
  const _apply = window.applyLanguage;
  if (typeof _apply === "function") {
    window.applyLanguage = function (lang) {
      _apply(lang);
      translateExtraSections(lang);
    };
  }
})();