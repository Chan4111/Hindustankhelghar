/* ==========================================================
   main.js — shared header/footer, interactions, renderers
   ========================================================== */
(function () {
  const S = window.STORE;
  const ROOT = document.body.dataset.root || "";          // "" for index, "../" for pages/
  const PAGE = document.body.dataset.page || "home";
  const P = (p) => ROOT + p;                               // asset path helper
  const link = (page) => (page === "home" ? ROOT + "index.html" : (ROOT ? "" : "pages/") + page + ".html");

  const NAV = [["home", "Home"], ["products", "Products"], ["about", "About Us"], ["gallery", "Gallery"], ["contact", "Contact"]];

  /* ---------- toast + actions ---------- */
  const toast = document.createElement("div");
  toast.className = "toast"; document.body.appendChild(toast);
  function showToast(msg) { toast.textContent = msg; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2600); }
  function wa(msg) { window.open("https://wa.me/" + S.phoneIntl + "?text=" + encodeURIComponent(msg || "Hello " + S.name), "_blank", "noopener"); }
  window.HKG = { wa, showToast };

  /* ---------- header ---------- */
  const topbar = `
    <div class="topbar"><div class="container">
      <span>🏆 <strong>${S.name.toUpperCase()}</strong> — ${S.tagline}</span>
      <span>📍 ${S.address} &nbsp;•&nbsp; <a href="tel:+${S.phoneIntl}">${S.phoneDisplay}</a></span>
    </div></div>
    <header class="site-header" id="siteHeader"><div class="container nav">
      <a class="brand" href="${link("home")}" aria-label="${S.name} home">
        <img src="${P("assets/images/brand/logo-small.png")}" alt="${S.name} logo" width="56" height="56">
        <span>${S.name}<small>BENIPUR • ALL TYPES OF SPORTS ITEMS</small></span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Main">
        ${NAV.map(([k, t]) => `<a href="${link(k)}" class="${k === PAGE ? "active" : ""}">${t}</a>`).join("")}
      </nav>
      <a class="btn nav-cta" href="${link("contact")}">Enquire Now ↗</a>
      <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">☰</button>
    </div></header>`;
  document.body.insertAdjacentHTML("afterbegin", topbar);

  /* ---------- footer + floating buttons ---------- */
  const footer = `
    <footer class="site-footer"><div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <a class="brand" href="${link("home")}"><img src="${P("assets/images/brand/logo-small.png")}" alt="" width="56" height="56"><span>${S.name}<small>BENIPUR • ALL TYPES OF SPORTS ITEMS</small></span></a>
          <p>Your local destination for indoor and outdoor sports equipment. Gear up for your next game!</p>
        </div>
        <div><h4>Quick Links</h4><ul>${NAV.map(([k, t]) => `<li><a href="${link(k)}">${t}</a></li>`).join("")}</ul></div>
        <div><h4>Categories</h4><ul>${["Cricket", "Football", "Badminton", "Indoor Games"].map(c => `<li><a href="${link("products")}?cat=${encodeURIComponent(c)}">${c}</a></li>`).join("")}</ul></div>
        <div class="footer-contact"><h4>Connect</h4>
          <a href="tel:+${S.phoneIntl}">📞 ${S.phoneDisplay}</a>
          <a href="#" data-wa="Hello, I found you through your website.">💬 WhatsApp</a>
          <a href="${S.mapUrl || S.mapSearch}" target="_blank" rel="noopener">📍 Store Location</a>
          <span>${S.address}</span>
        </div>
      </div>
      <div class="copyright"><span>© ${new Date().getFullYear()} ${S.name}. All rights reserved.</span><span>${S.tagline}</span></div>
    </div></footer>
    <div class="float-actions">
      <a class="float-call" href="tel:+${S.phoneIntl}" aria-label="Call us">☎</a>
      <a class="float-wa" href="#" data-wa="Hello ${S.name}, I want to enquire about sports products." aria-label="WhatsApp us">✆</a>
    </div>
    <button class="to-top" id="toTop" aria-label="Back to top">↑</button>`;
  document.body.insertAdjacentHTML("beforeend", footer);

  /* ---------- global click handlers ---------- */
  document.addEventListener("click", (e) => {
    const w = e.target.closest("[data-wa]");
    if (w) { e.preventDefault(); wa(w.dataset.wa); }
    const call = e.target.closest("[data-call]");
    if (call) { e.preventDefault(); location.href = "tel:+" + S.phoneIntl; }
    const prod = e.target.closest("[data-product]");
    if (prod) wa("Hello " + S.name + ", I want to enquire about " + prod.dataset.product + ". Please share price and availability.");
  });
  document.querySelectorAll("[data-map]").forEach(a => { a.href = S.mapUrl || S.mapSearch; a.target = "_blank"; a.rel = "noopener"; });

  /* ---------- menu / scroll ---------- */
  const menuBtn = document.getElementById("menuBtn"), nav = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.textContent = open ? "✕" : "☰"; menuBtn.setAttribute("aria-expanded", open);
  });
  const header = document.getElementById("siteHeader"), toTop = document.getElementById("toTop");
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 10);
    toTop.classList.toggle("show", scrollY > 600);
  }, { passive: true });

  /* ---------- reusable renderers ---------- */
  // Local paths ("assets/...") ko page ke hisab se sahi bana deta hai; http links jaise the waise rehte hain
  const SRC = (u) => (/^(https?:)?\/\/|^data:/.test(u) ? u : ROOT + u.replace(/^\.?\//, ""));

  function categoryCard(c, hrefBase) {
    return `<a class="category-card reveal" href="${hrefBase}?cat=${encodeURIComponent(c.name)}">
      <span class="emoji-bg">${c.emoji}</span>
      <img src="${SRC(c.img)}" alt="${c.name}" loading="lazy" onerror="this.remove()">
      <div class="category-info"><small>${c.sub}</small><h3>${c.name}</h3><span class="go">→</span></div></a>`;
  }
  function productCard(p) {
    return `<article class="product-card reveal" data-category="${p.cat}">
      <div class="product-image"><span class="emoji-bg">${p.emoji}</span>
        <img src="${SRC(p.img)}" alt="${p.name}" loading="lazy" onerror="this.remove()">
        <span class="product-badge">${p.badge}</span></div>
      <div class="product-body"><small>${p.cat}</small><h3>${p.name}</h3><p>${p.desc}</p>
        <div class="product-foot"><span>Price on enquiry</span><button class="mini-btn" data-product="${p.name}">Enquire ↗</button></div></div>
    </article>`;
  }

  const catHost = document.getElementById("categoryGrid");
  if (catHost) catHost.innerHTML = window.CATEGORIES.map(c => categoryCard(c, link("products"))).join("");

  const prodHost = document.getElementById("productGrid");
  if (prodHost) {
    const limit = parseInt(prodHost.dataset.limit || "0", 10);
    const list = limit ? window.PRODUCTS.slice(0, limit) : window.PRODUCTS;
    prodHost.innerHTML = list.map(productCard).join("");

    const bar = document.getElementById("filters");
    if (bar) {
      const cats = ["All", ...new Set(window.PRODUCTS.map(p => p.cat))];
      bar.innerHTML = cats.map(c => `<button class="filter" data-filter="${c}">${c === "All" ? "All Items" : c}</button>`).join("");
      const apply = (f) => {
        bar.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === f));
        prodHost.querySelectorAll(".product-card").forEach(c => c.classList.toggle("hide", !(f === "All" || c.dataset.category === f)));
      };
      bar.addEventListener("click", e => { const b = e.target.closest(".filter"); if (b) apply(b.dataset.filter); });
      const q = new URLSearchParams(location.search).get("cat");
      apply(cats.includes(q) ? q : "All");
    }
  }

  const galHost = document.getElementById("galleryGrid");
  if (galHost) {
    galHost.innerHTML = window.GALLERY.map(g => `<div class="g-item ${g.cls} reveal" data-full="${SRC(g.img)}">
      <span class="emoji-bg">${g.emoji}</span><img src="${SRC(g.img)}" alt="${g.alt}" style="object-position:${g.pos||"center"}" loading="lazy" onerror="this.remove()"></div>`).join("");
    const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
    galHost.addEventListener("click", e => {
      const it = e.target.closest(".g-item"); if (!it || !it.querySelector("img")) return;
      lbImg.src = it.dataset.full; lb.classList.add("open");
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }

  /* ---------- contact page fills ---------- */
  document.querySelectorAll("[data-store]").forEach(el => { el.textContent = S[el.dataset.store]; });
  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame) mapFrame.src = S.mapEmbed;

  /* ---------- reveal on scroll ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
})();
