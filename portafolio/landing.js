// ==== TRADUCCIONES ES / EN ====

const i18nLanding = {
  es: {
    header_title: "Landing eCommerce — Demo",
    header_subtitle:
      "Estructura pensada para vender: hero claro, productos destacados y CTA listos para conectar a un checkout real.",
    back_link: "← Volver al portafolio",

    badge_main: "Lanzamiento edición limitada",
    hero_title: "Estructura lista para vender, no solo para verse bonita.",
    hero_body:
      "Hero con propuesta de valor clara, botón principal visible y listado de beneficios. " +
      "Esta demo demuestra cómo planteas una landing enfocada en conversión para productos clave.",
    hero_cta: "Ver productos destacados",
    hero_subcta: "Scroll suave hacia la sección de catálogo.",

    checklist_title: "Checklist de esta landing",
    checklist_li1: "Mensaje directo y sin tecnicismos para el usuario final.",
    checklist_li2: "CTA principal arriba del double-scroll.",
    checklist_li3: "Productos con beneficio, precio y acción clara.",

    p1_tag: "PRODUCTO PRINCIPAL",
    p1_title: "Auriculares XT Pro (demo)",
    p1_desc:
      "Audio claro, cancelación de ruido suave y batería para toda la jornada. " +
      "Ideal para home office, gaming y videollamadas.",
    p1_price: "$79.99",
    p1_badge: "Envío 24-48h",
    p1_cta: "Comprar ahora",

    p2_tag: "UPSELL",
    p2_title: "Smartwatch Lite (demo)",
    p2_desc:
      "Seguimiento de actividad, notificaciones y métricas básicas de salud sin complicaciones.",
    p2_price: "$129.00",
    p2_badge: "Bundle recomendado",
    p2_cta: "Añadir al carrito",

    p3_tag: "EXTRA",
    p3_title: "Mochila Urban (demo)",
    p3_desc:
      "Diseñada para laptops, con bolsillos rápidos y material resistente a salpicaduras.",
    p3_price: "$59.50",
    p3_badge: "Stock limitado",
    p3_cta: "Ver detalles",

    catalog_note:
      "Todo el contenido es ficticio y está pensado para mostrar tu capacidad de crear estructuras " +
      "de eCommerce. En un proyecto real solo cambias textos, precios y conectas estos botones con " +
      "tu flujo de checkout o Shopify.",

    toast_text: (product) =>
      `Acción demo: "${product}" se enviaría al carrito o checkout real.`
  },
  en: {
    header_title: "eCommerce landing — Demo",
    header_subtitle:
      "Structure designed to sell: clear hero, highlighted products and CTAs ready to connect to a real checkout.",
    back_link: "← Back to portfolio",

    badge_main: "Limited edition launch",
    hero_title: "Structure built to sell, not just to look pretty.",
    hero_body:
      "Hero with a clear value proposition, visible primary button and list of benefits. " +
      "This demo shows how you approach a conversion-focused landing page for key products.",
    hero_cta: "View featured products",
    hero_subcta: "Smooth scroll to the catalog section.",

    checklist_title: "Landing checklist",
    checklist_li1: "Straightforward message, no jargon for the end user.",
    checklist_li2: "Primary CTA above the double scroll.",
    checklist_li3: "Products with benefit, price and clear action.",

    p1_tag: "MAIN PRODUCT",
    p1_title: "XT Pro Headphones (demo)",
    p1_desc:
      "Clear audio, soft noise cancellation and battery for the whole day. " +
      "Perfect for home office, gaming and video calls.",
    p1_price: "$79.99",
    p1_badge: "24–48h shipping",
    p1_cta: "Buy now",

    p2_tag: "UPSELL",
    p2_title: "Smartwatch Lite (demo)",
    p2_desc:
      "Activity tracking, notifications and basic health metrics without complications.",
    p2_price: "$129.00",
    p2_badge: "Recommended bundle",
    p2_cta: "Add to cart",

    p3_tag: "EXTRA",
    p3_title: "Urban Backpack (demo)",
    p3_desc:
      "Designed for laptops, with quick-access pockets and splash-resistant material.",
    p3_price: "$59.50",
    p3_badge: "Limited stock",
    p3_cta: "View details",

    catalog_note:
      "All content is fictional and meant to showcase your ability to build eCommerce structures. " +
      "In a real project you only change copy, prices and connect these buttons to your checkout or Shopify flow.",

    toast_text: (product) =>
      `Demo action: "${product}" would be sent to the real cart or checkout.`
  }
};

let currentLandingLang = localStorage.getItem("landingLang") || "es";

function applyLandingLanguage(lang) {
  const dict = i18nLanding[lang] || i18nLanding.es;
  currentLandingLang = lang;
  localStorage.setItem("landingLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    // value puede ser string o función (para el toast), usamos solo texto aquí
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle(
      "lang-active",
      btn.getAttribute("data-lang-btn") === lang
    );
  });
}

// ==== INIT ====

document.addEventListener("DOMContentLoaded", () => {
  // Idioma inicial
  applyLandingLanguage(currentLandingLang);

  // Botones ES / EN
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      applyLandingLanguage(lang);
    });
  });

  // Scroll suave al catálogo
  const heroCta = document.querySelector(".cta");
  if (heroCta) {
    heroCta.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("productos");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Toast demo de carrito
  const toast = document.getElementById("cartToast");
  let toastTimeout;

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.product || "";
      const dict = i18nLanding[currentLandingLang];
      const message = dict.toast_text(name);

      if (toast) {
        toast.textContent = message;
        toast.classList.add("visible");
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(
          () => toast.classList.remove("visible"),
          2600
        );
      }
    });
  });
});