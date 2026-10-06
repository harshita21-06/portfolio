"use strict";

/* Remove any stale service worker + caches left by older versions */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
  if (window.caches) caches.keys().then((ks) => ks.forEach((k) => caches.delete(k)));
}

/* Always start at the top (don't auto-jump to a leftover #hash / restore) */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.hash) history.replaceState(null, "", location.pathname + location.search);
window.scrollTo(0, 0);

const P = window.PORTFOLIO;
const $ = (s) => document.querySelector(s);
const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
const icon = (i) => (i ? `<img src="assets/icons/${i}.svg" alt="" loading="lazy" />` : "");

set("nav", [["About", "about"], ["Experience", "experience"], ["Projects", "work"], ["Skills", "skills"], ["Contact", "contact"]].map(([l, h]) => `<a href="#${h}">${l}</a>`).join(""));
set("lede", P.lede);
set("codeBlock", [
  '<span class="k">const</span> <span class="p">harshita</span> = {',
  "  role: <span class=\"s\">'Software Developer'</span>,",
  "  company: <span class=\"s\">'CarTrade Tech'</span>,",
  "  stack: [<span class=\"s\">'React'</span>, <span class=\"s\">'React Native'</span>, <span class=\"s\">'MUI'</span>],",
  "  focus: [<span class=\"s\">'design systems'</span>, <span class=\"s\">'AI'</span>],",
  '  openToWork: <span class="k">true</span>,',
  "};",
].join("\n"));
set("socials", [{ i: "logo-github", u: P.github }, { i: "logo-linkedin", u: P.linkedin }, { i: "mail-outline", u: "mailto:" + P.email }]
  .map((s) => `<li><a href="${s.u}" target="_blank" rel="noopener"><ion-icon name="${s.i}"></ion-icon></a></li>`).join(""));

set("stats", P.stats.map((s) => `<li class="stat"><strong data-count="${s.count}" data-suffix="${s.suffix}">0</strong><span>${s.label}</span></li>`).join(""));

set("skillsGrid", P.skillGroups.map((g) =>
  `<div class="sk-group"><h4>${g.label}</h4><ul>${g.items.map((it) => `<li>${icon(it.i)}${it.n}</li>`).join("")}</ul></div>`).join(""));

set("projects", P.projects.map((p) => {
  const inner = `
    <div class="art"><ion-icon name="${p.art.icon}"></ion-icon><b>${p.art.big}</b></div>
    <h3>${p.title}</h3>${p.where ? `<p class="where">${p.where}</p>` : ""}
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    ${p.link ? `<span class="open"><ion-icon name="open-outline"></ion-icon>${p.linkText || "View"}</span>` : ""}`;
  return p.link ? `<a class="proj" data-cat="${p.cat}" href="${p.link}" target="_blank" rel="noopener">${inner}</a>`
                : `<article class="proj" data-cat="${p.cat}">${inner}</article>`;
}).join(""));

set("roles", P.roles.map((r) => `
  <div class="role-item">
    <div class="when"><time>${r.time}</time><span class="badge2">${r.badge}</span></div>
    <h4>${r.title}</h4><ul>${r.points.map((x) => `<li>${x}</li>`).join("")}</ul>
  </div>`).join(""));

set("edu", `<strong>${P.education.school}</strong><br>${P.education.degree}<br>${P.education.time} · CGPA ${P.education.cgpa}`);
set("profiles", P.profiles.map((p) => `<li><a href="${p.url}" target="_blank" rel="noopener"><img src="assets/icons/${p.icon}.svg" alt="" />${p.name}</a></li>`).join(""));
set("wins", P.wins.map((w) => `<li><b>${w.k}</b><span>${w.v}</span></li>`).join(""));

set("contacts", [
  { i: "mail-outline", l: "Email", t: P.email, u: "mailto:" + P.email },
  { i: "call-outline", l: "Phone", t: P.phone, u: "tel:" + P.phoneHref },
  { i: "logo-linkedin", l: "LinkedIn", t: P.linkedinHandle, u: P.linkedin },
  { i: "logo-github", l: "GitHub", t: P.githubHandle, u: P.github },
].map((c) => `<li><ion-icon name="${c.i}"></ion-icon><div><span>${c.l}</span>${c.u ? `<a href="${c.u}" target="_blank" rel="noopener">${c.t}</a>` : c.t}</div></li>`).join(""));

/* Theme */
const root = document.documentElement, tbtn = $("#theme");
const paint = (t) => { root.dataset.theme = t; tbtn.innerHTML = `<ion-icon name="${t === "dark" ? "sunny-outline" : "moon-outline"}"></ion-icon>`; };
paint(root.dataset.theme || "light");
tbtn.addEventListener("click", () => { const n = root.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("theme", n); paint(n); });

/* Mobile nav — overlay + scroll lock */
const nav = $("#nav"), burger = $("#burger"), overlay = $("#navOverlay");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  document.documentElement.classList.toggle("menu-open", open);
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.innerHTML = `<ion-icon name="${open ? "close-outline" : "menu-outline"}"></ion-icon>`;
};
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });
overlay.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
matchMedia("(min-width: 921px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

/* Mark reveal targets + counters (IntersectionObserver drives the .is-inview class) */
const ITEM_SEL = ".about-text, .stat, .role-item, .pcard, .proj, .sk-group, .chips, .form, .contact-info";
document.querySelectorAll(".section").forEach((sec) => {
  const h = sec.querySelector(".h");
  if (h) { h.classList.add("reveal-up"); h.setAttribute("data-scroll", ""); }
  sec.querySelectorAll(ITEM_SEL).forEach((el, i) => {
    el.classList.add("reveal-up"); el.setAttribute("data-scroll", "");
    el.style.transitionDelay = (0.05 + i * 0.07).toFixed(2) + "s";
  });
});
document.querySelectorAll("[data-count]").forEach((el) => { el.setAttribute("data-scroll", ""); el.setAttribute("data-scroll-call", "count"); });
const animateCount = (el) => {
  if (el.dataset.done) return; el.dataset.done = "1";
  const t = +el.dataset.count, sfx = el.dataset.suffix || "", s = performance.now();
  const tick = (n) => { const p = Math.min((n - s) / 1300, 1); el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3))) + sfx; if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
};

/* Filters */
document.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach((b) => b.classList.remove("active")); c.classList.add("active");
  const f = c.dataset.filter;
  document.querySelectorAll(".proj").forEach((p) => p.classList.toggle("hide", f !== "all" && p.dataset.cat !== f));
}));

/* Scroll: reveals, counters, progress bar, active nav + custom parallax (no library) */
const navLinks = [...document.querySelectorAll(".links a")];
const sections = [...document.querySelectorAll("section[id]")];
const scrollBar = $("#scrollBar");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const parallaxEls = reduceMotion ? [] : [...document.querySelectorAll("[data-scroll-speed]")];
const setProgress = (r) => { if (scrollBar) scrollBar.style.width = (Math.min(Math.max(r, 0), 1) * 100).toFixed(2) + "%"; };
const setActive = () => {
  let cur = sections[0];
  for (const s of sections) if (s.getBoundingClientRect().top <= 140) cur = s;
  if (cur) navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + cur.id));
};

/* Reveal on scroll */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-inview"); io.unobserve(e.target); } }), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal-up").forEach((el) => io.observe(el));

/* Count-up stats */
const cio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } }), { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

/* Render progress + active nav + parallax from a scroll value */
const halfVH = () => window.innerHeight / 2;
const captureBases = () => parallaxEls.forEach((el) => { el.style.transform = ""; el.dataset.base = (el.getBoundingClientRect().top + window.scrollY).toFixed(1); });
const applyParallax = (y) => {
  for (const el of parallaxEls) {
    const base = +el.dataset.base || 0, speed = +el.dataset.scrollSpeed || 0;
    const center = base + el.offsetHeight / 2;
    el.style.transform = `translate3d(0, ${(((y + halfVH()) - center) * speed * -0.06).toFixed(1)}px, 0)`;
  }
};
const render = (y) => {
  const h = document.documentElement;
  setProgress(y / ((h.scrollHeight - h.clientHeight) || 1));
  setActive();
  applyParallax(y);
};
const docTop = (el) => { let y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; };

/* Smooth (lerp) scroll on desktop; native on mobile / reduced-motion */
const container = document.querySelector("[data-scroll-container]");
const useNative = reduceMotion || matchMedia("(max-width: 920px)").matches || matchMedia("(pointer: coarse)").matches;
let smooth = false, cur = 0;

if (!useNative && container) {
  smooth = true;
  captureBases();
  Object.assign(container.style, { position: "fixed", top: "0", left: "0", width: "100%", willChange: "transform" });
  const setH = () => { document.body.style.height = container.getBoundingClientRect().height + "px"; };
  setH();
  window.addEventListener("load", setH);
  window.addEventListener("resize", () => { captureBases(); setH(); });
  cur = window.scrollY;
  const loop = () => {
    const target = window.scrollY;
    cur += (target - cur) * 0.065;
    if (Math.abs(target - cur) < 0.08) cur = target;
    container.style.transform = `translate3d(0, ${(-cur).toFixed(2)}px, 0)`;
    render(cur);
    requestAnimationFrame(loop);
  };
  loop();
} else {
  captureBases();
  const onScroll = () => render(window.scrollY);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { captureBases(); onScroll(); });
}

/* In-page links (no leftover #hash) */
document.querySelectorAll('a[href^="#"]').forEach((l) => l.addEventListener("click", (e) => {
  const id = l.getAttribute("href").slice(1);
  const t = id && document.getElementById(id);
  if (!t) return;
  e.preventDefault();
  const y = Math.max(0, (smooth ? docTop(t) : (t.getBoundingClientRect().top + window.scrollY)) - 84);
  if (smooth) window.scrollTo(0, y); else window.scrollTo({ top: y, behavior: "smooth" });
}));

/* INNOVATIVE cursor: dot + lagging ring that grows over interactive elements */
if (matchMedia("(pointer: fine)").matches) {
  const dot = $(".cur-dot"), ring = $(".cur-ring");
  let rx = 0, ry = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    dot.style.left = tx + "px"; dot.style.top = ty + "px"; dot.style.opacity = ring.style.opacity = "1";
    ring.classList.toggle("lg", !!e.target.closest("a, button, input, textarea, .proj, .stat"));
  }, { passive: true });
  const loop = () => { rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18; ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(loop); };
  loop();
  document.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = "0"; });
}

/* Floating contact FAB (hover on desktop, tap on touch) */
const fab = $("#fab"), fabBtn = $("#fabBtn");
set("fabMenu", [
  { i: "call-outline", t: "Call me", u: "tel:" + P.phoneHref },
  { i: "mail-outline", t: "Email me", u: "mailto:" + P.email },
  { i: "logo-linkedin", t: "LinkedIn", u: P.linkedin, blank: true },
].map((x) => `<a class="fab-item" href="${x.u}"${x.blank ? ' target="_blank" rel="noopener"' : ""}><ion-icon name="${x.i}"></ion-icon><span>${x.t}</span></a>`).join(""));
if (!matchMedia("(hover: hover)").matches) {
  fabBtn.addEventListener("click", () => { const o = fab.classList.toggle("open"); fabBtn.setAttribute("aria-expanded", String(o)); });
  document.addEventListener("click", (e) => { if (!fab.contains(e.target)) { fab.classList.remove("open"); fabBtn.setAttribute("aria-expanded", "false"); } });
}

/* Contact */
const form = $("#form"), fnote = $("#fnote");
form.addEventListener("submit", (e) => {
  e.preventDefault(); if (!form.checkValidity()) { form.reportValidity(); return; }
  const n = form.name.value.trim();
  fnote.hidden = false; fnote.textContent = `Thanks, ${n}! Opening your email app…`;
  window.location.href = `mailto:${P.email}?subject=${encodeURIComponent("Portfolio enquiry from " + n)}&body=${encodeURIComponent(form.message.value + "\n\n— " + n + " (" + form.email.value + ")")}`;
  form.reset();
});
