// =======================
// Utilidades básicas
// =======================
function rand(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function getValue(id, fallback) {
  const el = document.getElementById(id);
  if (!el) return fallback;
  return el.value || fallback;
}

/* =========================
   TRADUCCIONES ES / EN
   ========================= */

const i18n = {
  es: {
    header_title: "Panel de control empresarial",
    header_subtitle: "Demostración de KPI de ventas y logística en tiempo casi real para tu cartera.",
    back_link: "← Volver al portafolio",

    overview_title: "Descripción general",
    overview_desc: "Ingresos diarios, pedidos y conversión estimada.",
    badge_simulated: "Datos simulados · Solo front-end",

    metric_revenue_label: "Ingresos últimos",
    metric_orders_label: "Pedidos procesados",
    metric_conv_label: "Tasa de conversión",
    metric_aov_label: "Valor promedio del pedido",

    filter_range_label: "Rango de tiempo",
    filter_range_7: "7 días",
    filter_range_14: "14 días",
    filter_range_30: "30 días",
    filter_channel_label: "Canal",
    filter_channel_all: "Todos",
    filter_channel_web: "Web",
    filter_channel_mobile: "Mobile",
    btn_refresh: "Actualizar KPI",
    last_update: "Última actualización:",

    top_products_title: "Principales productos por ingresos",
    top_products_desc: "Ranking de productos con mayor facturación estimada.",
    top_products_col_product: "Producto",
    top_products_col_category: "Categoría",
    top_products_col_revenue: "Ingresos",
    top_products_col_margin: "Margen",

    logistics_title: "Detalle logístico",
    pill_sla: "SLA 24h",
    pill_fulfillment: "Fulfillment",
    pill_capacity: "Capacidad de almacén",
    logistics_col_center: "Centro",
    logistics_col_orders: "Pedidos",
    logistics_col_ontime: "A tiempo",
    logistics_col_status: "Estado",
    logistics_note:
      "Esta tabla se genera en el navegador a partir de datos simulados para mostrar tu " +
      "capacidad de construir dashboards sin backend.",

    customers_title: "Actividad del cliente",
    customers_new_label: "Clientes nuevos",
    customers_repeat_label: "Clientes recurrentes",
    customers_churn_label: "Churn estimado",
    customers_churn_sub: "Rotación sobre la base activa.",
    customers_nps_label: "NPS simulado",
    customers_nps_sub: "Satisfacción general del cliente.",

    trend_vs_previous: "vs período anterior",
    trend_volume_var: "variación de volumen",
    conv_mix_all: "Mix web+mobile (simulado)",
    conv_mix_web: "Mix web (simulado)",
    conv_mix_mobile: "Mix mobile (simulado)",

    status_ok: "Estable",
    status_warn: "Atención",
    status_bad: "Crítico"
  },
  en: {
    header_title: "Business control panel",
    header_subtitle: "Near real-time sales and logistics KPIs demo for your portfolio.",
    back_link: "← Back to portfolio",

    overview_title: "Overview",
    overview_desc: "Daily revenue, orders and estimated conversion.",
    badge_simulated: "Simulated data · Front-end only",

    metric_revenue_label: "Revenue last",
    metric_orders_label: "Processed orders",
    metric_conv_label: "Conversion rate",
    metric_aov_label: "Average order value",

    filter_range_label: "Time range",
    filter_range_7: "7 days",
    filter_range_14: "14 days",
    filter_range_30: "30 days",
    filter_channel_label: "Channel",
    filter_channel_all: "All",
    filter_channel_web: "Web",
    filter_channel_mobile: "Mobile",
    btn_refresh: "Refresh KPIs",
    last_update: "Last update:",

    top_products_title: "Top products by revenue",
    top_products_desc: "Ranking of products with highest estimated revenue.",
    top_products_col_product: "Product",
    top_products_col_category: "Category",
    top_products_col_revenue: "Revenue",
    top_products_col_margin: "Margin",

    logistics_title: "Logistics detail",
    pill_sla: "24h SLA",
    pill_fulfillment: "Fulfillment",
    pill_capacity: "Warehouse capacity",
    logistics_col_center: "Center",
    logistics_col_orders: "Orders",
    logistics_col_ontime: "On-time",
    logistics_col_status: "Status",
    logistics_note:
      "This table is generated in the browser from simulated data to show your " +
      "ability to build dashboards without a backend.",

    customers_title: "Customer activity",
    customers_new_label: "New customers",
    customers_repeat_label: "Returning customers",
    customers_churn_label: "Estimated churn",
    customers_churn_sub: "Churn over active base.",
    customers_nps_label: "Simulated NPS",
    customers_nps_sub: "Overall customer satisfaction.",

    trend_vs_previous: "vs previous period",
    trend_volume_var: "volume variation",
    conv_mix_all: "Mix web+mobile (simulated)",
    conv_mix_web: "Web mix (simulated)",
    conv_mix_mobile: "Mobile mix (simulated)",

    status_ok: "Stable",
    status_warn: "Watch",
    status_bad: "Critical"
  }
};

let currentLang = localStorage.getItem("dashboardLang") || "es";
let chart = null;
window.__dashboardLastState = null;

/* =========================
   Idioma
   ========================= */

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  currentLang = lang;
  localStorage.setItem("dashboardLang", lang);
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

  if (window.__dashboardLastState) {
    updateTrendsTexts(window.__dashboardLastState);
  }
}

/* =========================
   Chart
   ========================= */

function initChart() {
  if (typeof Chart === "undefined") {
    console.warn("Chart.js no está disponible, se omite la gráfica.");
    chart = null;
    return;
  }
  const canvas = document.getElementById("salesChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Ingresos",
          data: [],
          borderColor: "#22d3ee",
          backgroundColor: "rgba(34,211,238,0.15)",
          tension: 0.25,
          fill: true
        },
        {
          label: "Órdenes",
          data: [],
          borderColor: "#f97316",
          backgroundColor: "rgba(249,115,22,0.10)",
          tension: 0.25,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb",
            font: { size: 11 }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#9ca3af" },
          grid: { color: "rgba(30,64,175,.35)" }
        },
        y: {
          ticks: { color: "#9ca3af" },
          position: "left",
          grid: { color: "rgba(30,64,175,.25)" }
        },
        y1: {
          ticks: { color: "#9ca3af" },
          position: "right",
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

/* =========================
   Generación de datos
   ========================= */

function generateData(days, channel) {
  const labels = [];
  const revenue = [];
  const orders = [];
  const factor = channel === "web" ? 1 : channel === "mobile" ? 1.2 : 1.1;

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(`${d.getMonth() + 1}/${d.getDate()}`);
    const base = rand(1800, 7200) * factor;
    revenue.push(base);
    orders.push(Math.round(base / 55));
  }

  return { labels, revenue, orders };
}

function updateTopProducts(totalRevenue) {
  const tbody = document.getElementById("topProductsBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const baseProducts = [
    { name: "Running Pro Max", category: "Calzado" },
    { name: "Street Hoodie 2.0", category: "Textil" },
    { name: "Smartwatch Fit", category: "Accesorios" },
    { name: "Performance Tee", category: "Textil" },
    { name: "Urban Backpack", category: "Accesorios" }
  ];

  const products = baseProducts.map((p) => {
    const weight = rand(8, 25);
    const revenue = Math.round((totalRevenue * weight) / 100);
    const margin = rand(25, 55);
    return { ...p, revenue, margin };
  });

  products
    .sort((a, b) => b.revenue - a.revenue)
    .forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>$${p.revenue.toLocaleString()}</td>
        <td>${p.margin}%</td>
      `;
      tbody.appendChild(tr);
    });
}

function updateLogisticsTable() {
  const tbody = document.getElementById("warehouseBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const centers = [
    "Centro Norte",
    "Centro Sur",
    "Hub Express",
    "Cross-dock Oeste"
  ];
  const dict = i18n[currentLang];

  centers.forEach((name) => {
    const ord = rand(120, 950);
    const ot = rand(85, 99);
    let cls = "ok";
    let label = dict.status_ok;

    if (ot < 90) {
      cls = "bad";
      label = dict.status_bad;
    } else if (ot < 94) {
      cls = "warn";
      label = dict.status_warn;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${name}</td>
      <td>${ord.toLocaleString()}</td>
      <td>${ot}%</td>
      <td><span class="status-pill ${cls}">${label}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateCustomerActivity(totalOrders) {
  const dict = i18n[currentLang];

  const newCustomers = rand(120, 320);
  const repeatCustomers = Math.round(totalOrders * 0.35);
  const churn = (Math.random() * 4 + 3).toFixed(1);
  const nps = rand(45, 78);

  setText("cNew", newCustomers.toLocaleString());
  setText("cRepeat", repeatCustomers.toLocaleString());
  setText("cChurn", `${churn}%`);
  setText("cNps", nps.toString());

  const newTrendEl = document.getElementById("cNewTrend");
  if (newTrendEl) {
    newTrendEl.textContent =
      "+" + (Math.random() * 15).toFixed(1) + "% " + dict.trend_vs_previous;
  }
  const repeatTrendEl = document.getElementById("cRepeatTrend");
  if (repeatTrendEl) {
    repeatTrendEl.textContent =
      "+" + (Math.random() * 10).toFixed(1) + "% " + dict.trend_vs_previous;
  }
}

function updateTrendsTexts(state) {
  const dict = i18n[currentLang];
  const mSalesTrend = document.getElementById("mSalesTrend");
  if (mSalesTrend) {
    mSalesTrend.textContent =
      (state.salesDiff >= 0 ? "+" : "") +
      state.salesDiff.toFixed(1) +
      "% " +
      dict.trend_vs_previous;
  }
  const mOrdersTrend = document.getElementById("mOrdersTrend");
  if (mOrdersTrend) {
    mOrdersTrend.textContent =
      state.ordersVar.toFixed(1) + "% " + dict.trend_volume_var;
  }

  const mConvTrend = document.getElementById("mConvTrend");
  if (mConvTrend) {
    let convLabel;
    if (state.channel === "all") convLabel = dict.conv_mix_all;
    else if (state.channel === "web") convLabel = dict.conv_mix_web;
    else convLabel = dict.conv_mix_mobile;
    mConvTrend.textContent = convLabel;
  }
}

/* =========================
   Dashboard principal
   ========================= */

function updateDashboard() {
  const days = Number(getValue("range", 30));
  const channel = getValue("channel", "all");
  setText("daysLabel", days.toString());

  const { labels, revenue, orders } = generateData(days, channel);

  if (chart) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = revenue;
    chart.data.datasets[1].data = orders;
    chart.update();
  }

  const totalRev = revenue.reduce((a, b) => a + b, 0);
  const totalOrd = orders.reduce((a, b) => a + b, 0);
  const prevRev = totalRev * (0.8 + Math.random() * 0.3);
  const diff = ((totalRev - prevRev) / prevRev) * 100;
  const aov = totalOrd > 0 ? totalRev / totalOrd : 0;

  setText("mSales", "$" + totalRev.toLocaleString());
  setText("mOrders", totalOrd.toLocaleString());
  setText("mConv", (2.5 + Math.random() * 3).toFixed(1) + "%");
  setText("mAov", "$" + Math.round(aov).toLocaleString());

  const aovTrendEl = document.getElementById("mAovTrend");
  if (aovTrendEl) {
    aovTrendEl.textContent =
      currentLang === "es" ? "Promedio por orden" : "Average per order";
  }

  const state = {
    salesDiff: diff,
    ordersVar: Math.random() * 8 - 2,
    channel
  };
  window.__dashboardLastState = state;
  updateTrendsTexts(state);

  const updatedEl = document.getElementById("updated");
  if (updatedEl) {
    updatedEl.textContent = new Date().toLocaleString();
  }

  updateTopProducts(totalRev);
  updateLogisticsTable();
  updateCustomerActivity(totalOrd);
}

/* =========================
   INIT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // Idioma inicial
  applyLanguage(currentLang);

  // Botones de idioma
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      applyLanguage(lang);
      updateDashboard(); // actualiza textos dinámicos también
    });
  });

  initChart();

  const refreshBtn = document.getElementById("refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      refreshBtn.classList.add("refresh-pulse");
      updateDashboard();
      setTimeout(() => refreshBtn.classList.remove("refresh-pulse"), 200);
    });
  }

  const rangeEl = document.getElementById("range");
  if (rangeEl) rangeEl.addEventListener("change", updateDashboard);

  const channelEl = document.getElementById("channel");
  if (channelEl) channelEl.addEventListener("change", updateDashboard);

  // Primer pintado
  updateDashboard();
});