// ===== Configura tus enlaces para QR y botones =====
const GITHUB_URL   = "https://github.com/andreyclopez11-ctrl";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrey-lopez-44559038b";
const QR_TARGET    = GITHUB_URL; // Puedes cambiarlo por LinkedIn o Linktree si quieres

// ===== Navegación entre secciones =====
const buttons = document.querySelectorAll(".buttons button");
const sections = document.querySelectorAll(".section");

function setActive(sectionId) {
  sections.forEach((sec) => {
    sec.classList.remove("active");
    sec.classList.add("hidden");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    target.classList.remove("hidden");
  }

  buttons.forEach((b) => b.removeAttribute("data-active"));
  const current = [...buttons].find((b) => b.dataset.section === sectionId);
  if (current) current.setAttribute("data-active", "true");
}

buttons.forEach((btn) => {
  const id = btn.getAttribute("data-section");
  if (!id) return;
  btn.addEventListener("click", () => setActive(id));
});

setActive(document.querySelector(".buttons button[data-section]")?.dataset.section || "about");

// ===== Fondo de partículas en Canvas =====
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("bg");
const ctx = canvas?.getContext ? canvas.getContext("2d") : null;

let W, H, particles = [], mouse = { x: 0, y: 0 };
const NUM = 120, MAX_SPEED = 0.6, LINK_DIST = 110;

function resize() {
  if (!canvas) return;
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}

function rand(n) {
  return Math.random() * n;
}

function init() {
  particles = Array.from({ length: NUM }, () => ({
    x: rand(W),
    y: rand(H),
    vx: (Math.random() * 2 - 1) * MAX_SPEED,
    vy: (Math.random() * 2 - 1) * MAX_SPEED,
    r: 1.4 + Math.random() * 1.6,
  }));
}

function step() {
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);

  const grad = ctx.createRadialGradient(mouse.x, mouse.y, 20, mouse.x, mouse.y, 220);
  grad.addColorStop(0, "rgba(127,255,212,0.14)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;

    const dx = mouse.x - p.x,
      dy = mouse.y - p.y,
      d = Math.hypot(dx, dy);

    if (d > 0 && d < 160) {
      p.vx += (dx / d) * 0.003;
      p.vy += (dy / d) * 0.003;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,.75)";
    ctx.fill();
  }

  ctx.lineWidth = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i],
        b = particles[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < LINK_DIST) {
        ctx.strokeStyle = `rgba(127,255,212,${(1 - d / LINK_DIST) * 0.35})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(step);
}

if (canvas && ctx) {
  resize();
  init();
  addEventListener("resize", resize);
  addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  if (!prefersReduced) requestAnimationFrame(step);
}

// ===== Modal de contacto =====
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openContactModal");

function openModal() {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".modal__dialog")?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

openBtn?.addEventListener("click", openModal);
modal?.addEventListener("click", (e) => {
  if (e.target?.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal?.classList.contains("open")) closeModal();
});

// ===== Descargar PDF =====
const pdfBtn = document.getElementById("downloadPDF");
let __activeSectionId = null;

function showAllSectionsForPrint() {
  const active = document.querySelector(".section.active");
  __activeSectionId = active ? active.id : null;

  document.querySelectorAll(".section").forEach((s) => {
    s.classList.add("active");
    s.classList.remove("hidden");
  });
}

function restoreActiveAfterPrint() {
  document.querySelectorAll(".section").forEach((s) => {
    s.classList.remove("active");
    s.classList.add("hidden");
  });

  if (__activeSectionId) {
    const target = document.getElementById(__activeSectionId);
    if (target) {
      target.classList.add("active");
      target.classList.remove("hidden");
    }
  }
}

pdfBtn?.addEventListener("click", () => {
  if (modal?.classList.contains("open")) closeModal();
  showAllSectionsForPrint();
  window.onafterprint = () => restoreActiveAfterPrint();
  window.print();
  setTimeout(restoreActiveAfterPrint, 500);
});

// ===== Enlaces y QR dinámicos =====
document.getElementById("githubLink")?.setAttribute("href", GITHUB_URL);
document.getElementById("linkedinLink")?.setAttribute("href", LINKEDIN_URL);

const qrImg = document.getElementById("qrImage");
if (qrImg) {
  const url =
    "https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=" +
    encodeURIComponent(QR_TARGET);
  qrImg.src = url;
  qrImg.alt = "Código QR hacia " + QR_TARGET;
}