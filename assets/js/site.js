/* Comportements communs : header/footer, menu mobile, filtres, lightbox, animations. */
(function () {
  "use strict";
  var S = window.SITE || {};
  document.documentElement.classList.add("js");

  var page = location.pathname.split("/").pop() || "index.html";
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; };

  /* ---------- Header ---------- */
  var h = document.getElementById("site-header");
  if (h) {
    var links = (S.nav || []).map(function (n) {
      var cur = n[1] === page ? ' aria-current="page"' : "";
      return '<a href="' + n[1] + '"' + cur + ">" + esc(n[0]) + "</a>";
    }).join("");
    h.className = "site-header";
    h.innerHTML =
      '<div class="container site-header__inner">' +
      '<a class="logo" href="index.html" aria-label="Accueil"><span class="logo__star" aria-hidden="true"></span>' + esc(S.name || "") + "</a>" +
      '<button class="burger" aria-expanded="false" aria-controls="main-nav" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>' +
      '<nav class="nav" id="main-nav" aria-label="Navigation principale">' + links + "</nav></div>";
    var burger = h.querySelector(".burger"), nav = h.querySelector(".nav");
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); } });
  }

  /* ---------- Footer ---------- */
  var f = document.getElementById("site-footer");
  if (f) {
    var year = new Date().getFullYear();
    var nl = (S.nav || []).map(function (n) { return '<li><a href="' + n[1] + '">' + esc(n[0]) + "</a></li>"; }).join("");
    var sl = (S.socials || []).map(function (s) { return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.label) + " ↗</a></li>"; }).join("");
    f.className = "site-footer";
    f.innerHTML =
      '<div class="container site-footer__inner">' +
      '<div><a class="logo" href="index.html"><span class="logo__star" aria-hidden="true"></span>' + esc(S.name || "") + "</a>" +
      '<p style="margin-top:1rem;opacity:.85">' + esc(S.role || "") + '<br><a href="mailto:' + esc(S.email || "") + '">' + esc(S.email || "") + "</a></p></div>" +
      "<div><h3>Navigation</h3><ul>" + nl + "</ul></div>" +
      "<div><h3>Réseaux</h3><ul>" + sl + "</ul></div></div>" +
      '<div class="container site-footer__bottom"><span>© ' + year + " " + esc(S.name || "") + '</div>';
  }

  /* ---------- Textes dynamiques : <span data-site="name|role|email"> ---------- */
  document.querySelectorAll("[data-site]").forEach(function (el) { var v = S[el.dataset.site]; if (v) el.textContent = v; });
  document.querySelectorAll("[data-alt]").forEach(function (el) { var v = (S.alternance || {})[el.dataset.alt]; if (v) el.textContent = v; });
  document.querySelectorAll("[data-site-mail]").forEach(function (el) { if (S.email) el.href = "mailto:" + S.email; });
  document.querySelectorAll("[data-site-cv]").forEach(function (el) { if (S.cv) el.href = S.cv; });

  /* ---------- Animations d'apparition ---------- */
  var rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add("is-in"); }); }

  /* ---------- Filtres du portfolio : boutons [data-filter], cartes [data-cat] ---------- */
  var fbtns = document.querySelectorAll("[data-filter]");
  if (fbtns.length) {
    var cards = document.querySelectorAll("[data-cat]");
    fbtns.forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.filter;
        fbtns.forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        cards.forEach(function (c) {
          var show = k === "all" || c.dataset.cat.split(" ").indexOf(k) > -1;
          c.hidden = !show;
          if (show) c.classList.add("is-in");
        });
      });
    });
  }

  /* ---------- Lightbox : <a data-lightbox href="grande-image.jpg"> ---------- */
  var lbLinks = document.querySelectorAll("a[data-lightbox]");
  if (lbLinks.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", "Image agrandie");
    lb.innerHTML = '<button class="btn btn--small lightbox__close" type="button">Fermer ✕</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var close = function () { lb.classList.remove("is-open"); };
    lbLinks.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        lbImg.src = a.getAttribute("href");
        var im = a.querySelector("img"); lbImg.alt = im ? im.alt : "";
        lb.classList.add("is-open");
      });
    });
    lb.addEventListener("click", function (e) { if (e.target !== lbImg) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
})();
