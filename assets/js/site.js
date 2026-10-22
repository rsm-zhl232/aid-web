/* ==========================================================================
   SITE SHELL — header, footer, language, motion, contact form.
   Navigation, footer links and contact details live at the top of this file:
   edit once, every page updates.
   ========================================================================== */

window.AID = window.AID || {};

AID.nav = [
  { href: "services.html", en: "Services", zh: "服务", hant: "服務" },
  { href: "process.html", en: "How we work", zh: "工作流程", hant: "工作流程" },
  { href: "technology.html", en: "Technology & team", zh: "技术与团队", hant: "技術與團隊" },
  { href: "about.html", en: "About AID", zh: "关于 AID", hant: "關於 AID" },
  { href: "faq.html", en: "FAQ", zh: "常见问题", hant: "常見問題" },
];

AID.footer = [
  {
    h: { en: "Services", zh: "服务", hant: "服務" },
    links: [
      { href: "services.html#model", en: "How we engage", zh: "一辅两主", hant: "一輔兩主" },
      { href: "services.html#packages", en: "Service packages", zh: "服务分层", hant: "服務分層" },
      { href: "services.html#ai", en: "AI in practice", zh: "AI 能力", hant: "AI 能力" },
      { href: "services.html#standards", en: "Service standards", zh: "服务标准", hant: "服務標準" },
      { href: "trial.html", en: "Trial on one space", zh: "试做一个空间", hant: "試做一個空間" },
    ],
  },
  {
    h: { en: "How we work", zh: "工作流程", hant: "工作流程" },
    links: [
      { href: "process.html#stages", en: "Four stages", zh: "四个阶段", hant: "四個階段" },
      { href: "process.html#revisions", en: "Revisions", zh: "修改机制", hant: "修改機制" },
      { href: "process.html#quality", en: "Quality checks", zh: "出图前检查", hant: "出圖前檢查" },
      { href: "technology.html", en: "Technology & team", zh: "技术与团队", hant: "技術與團隊" },
    ],
  },
  {
    h: { en: "Company", zh: "公司", hant: "公司" },
    links: [
      { href: "about.html", en: "About AID", zh: "关于 AID", hant: "關於 AID" },
      { href: "index.html#partners", en: "Our partners", zh: "合作大师", hant: "合作大師" },
      { href: "faq.html", en: "FAQ", zh: "常见问题", hant: "常見問題" },
      { href: "contact.html", en: "Contact", zh: "联系我们", hant: "聯絡我們" },
      { href: "privacy.html", en: "Privacy", zh: "隐私说明", hant: "隱私說明" },
      { href: "https://www.tgkw.com", en: "Tiangong Kaiwu", zh: "天宫开物", hant: "天宮開物", ext: true },
    ],
  },
];

/* Contact details. Leave a value empty until it is confirmed: the page then
   shows a visible "to be supplied" marker instead of a made-up address. */
AID.contact = {
  email: "",
  phone: "",
  phoneIntl: "",
  address: {
    en: "7F, Dongfang Hetao Technology Building, Shenzhen",
    zh: "深圳市东方河套科技大厦 7 楼",
    hant: "深圳市東方河套科技大廈 7 樓",
  },
};

/* WeChat QR codes, shown in the footer and on the contact page. In mainland
   B2B, a QR code to scan gets far more replies than a form. Put the image in
   assets/img/qr/ and set img; entries with no img show a placeholder. */
AID.qr = [
  { img: "", label: { en: "WeChat Work · talk to us", zh: "企业微信 · 直接咨询", hant: "企業微信 · 直接諮詢" } },
  { img: "", label: { en: "WeChat official account", zh: "公众号 · AID 艾匠科技", hant: "公眾號 · AID 艾匠科技" } },
];

/* Registered company name and ICP licence number, for the footer. Both stay
   hidden until filled in (the ICP number is required once the site is hosted
   in mainland China). */
AID.company = {
  legalName: { en: "", zh: "", hant: "" },
  icp: "",
};

/* Contact form backend. Empty = the form falls back to opening the visitor's
   email app (unreliable). Set it to an endpoint that accepts a JSON POST
   (e.g. a form service or a cloud function) and the form sends directly. */
AID.formEndpoint = "";

/* Visitor analytics. Paste the site ID from tongji.baidu.com (the hex string
   in its hm.js?xxxx snippet) to switch Baidu Analytics on. */
AID.analytics = { baidu: "" };

/* The people behind AID, shown on the About page (#team). One entry each:
     { name: {zh}, role: {zh}, bio: {zh}, photo: "assets/img/team/xxx.jpg" }
   While empty, TEAM_SLOTS placeholder cards show; set it to 0 to hide the
   section instead. */
AID.team = [];
var TEAM_SLOTS = 3;

/* Downloadable brochure (handbook 8.2), shown on the contact page. Set pdf to
   the file path once it exists; cover is an optional image. */
AID.brochure = { pdf: "", cover: "" };

/* Partner studios, shown on the home page (#partners). One entry per studio:
     {
       name:   { zh: "某某", hant: "某某", en: "Name" },         // the designer
       studio: { zh: "某某设计", hant: "某某設計", en: "Studio" }, // optional
       city:   { zh: "深圳", hant: "深圳", en: "Shenzhen" },       // optional
       logo:   "assets/img/partners/xxx.png",                       // optional
       quote:  { zh: "他们自己说的一句话" },                        // optional
     }
   hant / en may be left out: they fall back to zh. While the list is empty,
   PARTNER_SLOTS placeholder cards marked "to be supplied" show instead; set
   it to 0 to hide the section until there is something to show. */
AID.partners = [];
var PARTNER_SLOTS = 4;

/* ---- Logo --------------------------------------------------------------- */
/* AID+ mark. Letters take currentColor; the red I is fixed brand red. */
AID.logo = function (label) {
  return (
    '<svg viewBox="0 0 493 146" role="img" aria-label="' + (label || "AID+") + '">' +
    '<path fill-rule="evenodd" fill="currentColor" d="M0.0 146.0 L0.0 56.0 C0.0 11.2 11.2 0.0 56.0 0.0 L112.0 0.0 C156.8 0.0 168.0 11.2 168.0 56.0 L168.0 146.0 L138.0 146.0 L138.0 90.4 L30.0 90.4 L30.0 146.0 Z M30.0 54.0 C30.0 33.2 35.2 28.0 56.0 28.0 L112.0 28.0 C132.8 28.0 138.0 33.2 138.0 54.0 L138.0 62.4 L30.0 62.4 Z"/>' +
    '<path fill="#A8342B" d="M198 0 H230 V146.0 H198 Z"/>' +
    '<path fill="currentColor" d="M260.0 0.0 L357.0 0.0 C401.8 0.0 413.0 11.2 413.0 56.0 L413.0 90.0 C413.0 134.8 401.8 146.0 357.0 146.0 L260.0 146.0 L260.0 58.0 L290.0 58.0 L290.0 118.0 L357.0 118.0 C377.8 118.0 383.0 112.8 383.0 92.0 L383.0 54.0 C383.0 33.2 377.8 28.0 357.0 28.0 L290.0 28.0 L290.0 28.0 L260.0 28.0 Z"/>' +
    '<path fill="currentColor" d="M455.5 0 H474.5 V18.5 H493 V37.5 H474.5 V56 H455.5 V37.5 H437 V18.5 H455.5 Z"/>' +
    "</svg>"
  );
};

/* ---- Language -----------------------------------------------------------
   Three languages: zh (简体), hant (繁體, for Hong Kong and Taiwan readers)
   and en. Order of precedence: ?lang= in the URL, then whatever the visitor
   last chose, then the browser/OS language (zh-TW / zh-HK / zh-MO / zh-Hant
   pick 繁體, en-* picks English), then 简体.

   Each page also runs this in an inline <head> script so the choice is made
   before first paint. The two must stay in step; change one, change the other.
   ------------------------------------------------------------------------ */
AID.pickLang = function () {
  var saved = null;
  try {
    saved = localStorage.getItem("aid-lang");
  } catch (e) {}
  var q = new URLSearchParams(location.search).get("lang");
  var nav = (navigator.language || "zh").toLowerCase();
  var ok = { zh: 1, hant: 1, en: 1 };
  if (ok[q]) return q;
  if (ok[saved]) return saved;
  if (/^zh-(tw|hk|mo|hant)/.test(nav)) return "hant";
  return nav.indexOf("en") === 0 ? "en" : "zh";
};

AID.applyLang = function (lang) {
  var d = document.documentElement;
  d.setAttribute("data-lang", lang);
  d.setAttribute("lang", { zh: "zh-CN", hant: "zh-Hant", en: "en" }[lang] || "zh-CN");
  /* <title> is written in 简体; data-title-en / data-title-hant on <html>
     carry the other two. */
  if (!d.dataset.titleZh) d.dataset.titleZh = document.title;
  var t = lang === "zh" ? d.dataset.titleZh : d.getAttribute("data-title-" + lang);
  if (t) document.title = t;
};

AID.applyLang(AID.pickLang());

AID.setLang = function (lang) {
  AID.applyLang(lang);
  try {
    localStorage.setItem("aid-lang", lang);
  } catch (e) {}
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
  });
  /* <option> can't hold spans, so its text is swapped from data-zh/-hant/-en. */
  document.querySelectorAll("option[data-zh]").forEach(function (o) {
    o.textContent = o.getAttribute("data-" + lang) || o.getAttribute("data-zh");
  });
};
/* Pick one language from an { en, zh, hant } object, for strings built in JS. */
AID.pick = function (o) {
  return o[AID.lang()] || o.zh;
};
AID.lang = function () {
  return document.documentElement.getAttribute("data-lang") || "zh";
};

AID.esc = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
};
/* Render all three languages inline so switching needs no re-render. */
AID.bi = function (pair) {
  if (pair == null) return "";
  if (typeof pair === "string") return AID.esc(pair);
  return (
    '<span data-lang="en">' + AID.esc(pair.en || pair.zh || "") + "</span>" +
    '<span data-lang="zh">' + AID.esc(pair.zh || pair.en || "") + "</span>" +
    '<span data-lang="hant">' + AID.esc(pair.hant || pair.zh || pair.en || "") + "</span>"
  );
};
AID.todo = function () {
  return '<span class="todo"><span data-lang="en">[to be supplied]</span><span data-lang="zh">【待补】</span><span data-lang="hant">【待補】</span></span>';
};

/* ---- Header / footer ---------------------------------------------------- */
function currentPage() {
  var p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function brandHTML() {
  return (
    '<a class="brand" href="index.html" aria-label="AID 艾匠科技">' +
    AID.logo("AID+") +
    '<span class="brand__txt">' +
    '<span data-lang="en">AID</span><span data-lang="zh">艾匠科技</span><span data-lang="hant">艾匠科技</span>' +
    '<small><span data-lang="en">Digital delivery for design studios</span><span data-lang="zh">大师的数字建造团队</span><span data-lang="hant">大師的數位建造團隊</span></small>' +
    "</span></a>"
  );
}

function renderHeader() {
  var host = document.querySelector("[data-hdr]");
  if (!host) return;
  var here = currentPage();
  var links = AID.nav
    .map(function (n) {
      var on = n.href.split("#")[0] === here ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + on + ">" + AID.bi(n) + "</a>";
    })
    .join("");

  host.className = "hdr";
  host.innerHTML =
    '<div class="wrap hdr__in">' +
    brandHTML() +
    '<button class="burger" aria-expanded="false" aria-controls="aid-nav" aria-label="Menu"><span></span></button>' +
    '<nav class="nav" id="aid-nav">' + links + "</nav>" +
    '<div class="hdr__act">' +
    '<div class="lang" role="group" aria-label="Language">' +
    '<button data-set-lang="zh" aria-pressed="false" aria-label="简体中文">简</button>' +
    '<button data-set-lang="hant" aria-pressed="false" aria-label="繁體中文">繁</button>' +
    '<button data-set-lang="en" aria-pressed="false" aria-label="English">EN</button>' +
    "</div>" +
    '<a class="btn btn--sm btn--ghost" href="contact.html">' +
    '<span data-lang="en">Talk to us</span><span data-lang="zh">联系我们</span><span data-lang="hant">聯絡我們</span></a>' +
    "</div></div>";

  host.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      AID.setLang(b.dataset.setLang);
    });
  });
  AID.setLang(AID.lang());

  var burger = host.querySelector(".burger");
  var nav = host.querySelector(".nav");
  burger.addEventListener("click", function () {
    var open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  var onScroll = function () {
    host.classList.toggle("is-stuck", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function contactLine() {
  var c = AID.contact;
  var mail = c.email
    ? '<a href="mailto:' + c.email + '">' + AID.esc(c.email) + "</a>"
    : AID.todo();
  var tel = c.phone
    ? '<a href="tel:' + (c.phoneIntl || c.phone) + '">' + AID.esc(c.phone) + "</a>"
    : AID.todo();
  return AID.bi(c.address) + "<br>" + tel + " &nbsp;·&nbsp; " + mail;
}

function renderFooter() {
  var host = document.querySelector("[data-ftr]");
  if (!host) return;
  var cols = AID.footer
    .map(function (c) {
      var items = c.links
        .map(function (l) {
          var ext = l.ext ? ' target="_blank" rel="noopener"' : "";
          return '<li><a href="' + l.href + '"' + ext + ">" + AID.bi(l) + "</a></li>";
        })
        .join("");
      return "<div><h4>" + AID.bi(c.h) + "</h4><ul>" + items + "</ul></div>";
    })
    .join("");

  host.className = "ftr";
  host.innerHTML =
    '<div class="wrap">' +
    '<div class="ftr__top"><div>' +
    brandHTML() +
    '<p class="small" style="max-width:34ch;margin-top:20px">' +
    '<span data-lang="en">You focus on the design. We deliver it.</span>' +
    '<span data-lang="zh">大师专注创意，我们负责落地。</span><span data-lang="hant">大師專注創意，我們負責落地。</span></p>' +
    '<p class="small" style="margin-top:16px;color:#8E9093">' + contactLine() + "</p>" +
    '<div class="qr" data-qr></div>' +
    '</div><div class="ftr__cols">' + cols + "</div></div>" +
    '<div class="ftr__btm">' +
    "<span>© " + new Date().getFullYear() +
    ' <span data-lang="en">AID · A Tiangong Kaiwu brand</span>' +
    '<span data-lang="zh">艾匠科技 AID · 天宫开物旗下品牌</span><span data-lang="hant">艾匠科技 AID · 天宮開物旗下品牌</span></span>' +
    legalLine() +
    "</div></div>";
}

/* Registered name and ICP number, shown only once they are filled in. */
function legalLine() {
  var c = AID.company, bits = [];
  if (c.legalName && c.legalName.zh) bits.push(AID.bi(c.legalName));
  if (c.icp)
    bits.push('<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener">' + AID.esc(c.icp) + "</a>");
  bits.push("AI-Driven Design &amp; Delivery");
  return "<span>" + bits.join(" &nbsp;·&nbsp; ") + "</span>";
}

/* ---- QR codes ----------------------------------------------------------- */
function renderQR() {
  document.querySelectorAll("[data-qr]").forEach(function (host) {
    host.innerHTML = AID.qr
      .map(function (q) {
        var img = q.img
          ? '<img src="' + AID.esc(q.img) + '" alt="" loading="lazy">'
          : '<span class="qr__ph">QR</span>';
        return "<figure>" + img + "<figcaption>" + AID.bi(q.label) + "</figcaption></figure>";
      })
      .join("");
  });
}

/* ---- Team --------------------------------------------------------------- */
function renderTeam() {
  var host = document.querySelector("[data-team]");
  if (!host) return;
  var list = AID.team || [];
  if (!list.length && !TEAM_SLOTS) {
    var sec = host.closest("section");
    if (sec) sec.hidden = true;
    return;
  }
  if (!list.length) {
    var ph =
      '<figure class="person person--todo"><div class="person__photo"><span class="mono">PHOTO</span></div>' +
      "<figcaption><b>" + AID.todo() + '</b><span class="person__role">' +
      AID.bi({ en: "Role", zh: "职务", hant: "職務" }) + "</span></figcaption></figure>";
    host.innerHTML = new Array(TEAM_SLOTS + 1).join(ph);
    return;
  }
  host.innerHTML = list
    .map(function (p) {
      var photo = p.photo
        ? '<img src="' + AID.esc(p.photo) + '" alt="" loading="lazy">'
        : '<span class="mono">PHOTO</span>';
      return (
        '<figure class="person"><div class="person__photo">' + photo + "</div><figcaption>" +
        "<b>" + AID.bi(p.name) + "</b>" +
        (p.role ? '<span class="person__role">' + AID.bi(p.role) + "</span>" : "") +
        (p.bio ? '<p class="person__bio">' + AID.bi(p.bio) + "</p>" : "") +
        "</figcaption></figure>"
      );
    })
    .join("");
}

/* ---- Brochure ----------------------------------------------------------- */
function renderBrochure() {
  var host = document.querySelector("[data-brochure]");
  if (!host) return;
  var b = AID.brochure;
  var cover = b.cover
    ? '<img src="' + AID.esc(b.cover) + '" alt="">'
    : '<span class="mono">BROCHURE</span>';
  var action = b.pdf
    ? '<a class="btn btn--primary" href="' + AID.esc(b.pdf) + '" download>' +
      AID.bi({ en: "Download PDF", zh: "下载 PDF", hant: "下載 PDF" }) + ' <span class="arw">↓</span></a>'
    : '<p class="small">' + AID.bi({ en: "In preparation.", zh: "制作中，敬请期待。", hant: "製作中，敬請期待。" }) + "</p>";
  host.innerHTML =
    '<div class="brochure__cover">' + cover + "</div><div>" +
    '<h3 class="h3">' + AID.bi({ en: "AID brochure", zh: "AID 宣传手册", hant: "AID 宣傳手冊" }) + "</h3>" +
    '<p class="small mt-s">' + AID.bi({
      en: "Who we are, how we work and the three service packages, in one file to share with your partners.",
      zh: "AID 是谁、怎么做、三档服务，一份文件，方便转给您的合伙人。",
      hant: "AID 是誰、怎麼做、三檔服務，一份文件，方便轉給您的合夥人。",
    }) + "</p>" + '<div class="btn-row" style="margin-top:20px">' + action + "</div></div>";
}

/* ---- Analytics ---------------------------------------------------------- */
function initAnalytics() {
  var id = AID.analytics && AID.analytics.baidu;
  if (!id) return;
  window._hmt = window._hmt || [];
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://hm.baidu.com/hm.js?" + encodeURIComponent(id);
  document.head.appendChild(s);
}

/* Fill [data-contact="email|phone|address"] slots on the contact page. */
function renderContactSlots() {
  var c = AID.contact;
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var k = el.dataset.contact;
    if (k === "email")
      el.innerHTML = c.email
        ? '<a class="link" href="mailto:' + c.email + '">' + AID.esc(c.email) + "</a>"
        : AID.todo();
    else if (k === "phone")
      el.innerHTML = c.phone
        ? '<a class="link" href="tel:' + (c.phoneIntl || c.phone) + '">' + AID.esc(c.phone) + "</a>"
        : AID.todo();
    else if (k === "address") el.innerHTML = AID.bi(c.address);
    else if (k === "company")
      el.innerHTML = AID.company.legalName && AID.company.legalName.zh ? AID.bi(AID.company.legalName) : AID.todo();
  });
}

/* ---- Partner studios ---------------------------------------------------- */
function renderPartners() {
  var host = document.querySelector("[data-partners]");
  if (!host) return;
  var list = AID.partners || [];
  if (!list.length && !PARTNER_SLOTS) {
    var sec = host.closest("section");
    if (sec) sec.hidden = true;
    return;
  }
  if (!list.length) {
    var card =
      '<figure class="partner partner--todo"><div class="partner__logo"><span class="mono">LOGO</span></div>' +
      "<figcaption><b>" + AID.todo() + '</b><span class="partner__m">' +
      AID.bi({ en: "Studio · City", zh: "工作室 · 城市", hant: "工作室 · 城市" }) +
      "</span></figcaption></figure>";
    host.innerHTML = new Array(PARTNER_SLOTS + 1).join(card);
    return;
  }
  host.innerHTML = list
    .map(function (p) {
      var logo = p.logo
        ? '<img src="' + AID.esc(p.logo) + '" alt="" loading="lazy">'
        : '<span class="mono">' + AID.bi(p.name) + "</span>";
      var meta = [p.studio, p.city].filter(Boolean).map(AID.bi).join(" · ");
      return (
        '<figure class="partner"><div class="partner__logo">' + logo + "</div>" +
        "<figcaption><b>" + AID.bi(p.name) + "</b>" +
        (meta ? '<span class="partner__m">' + meta + "</span>" : "") +
        (p.quote ? '<blockquote class="partner__q">' + AID.bi(p.quote) + "</blockquote>" : "") +
        "</figcaption></figure>"
      );
    })
    .join("");
}

/* ---- Reveal on scroll --------------------------------------------------- */
function initReveal() {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        var d = Number(e.target.dataset.delay || 0) + i * 45;
        setTimeout(function () {
          e.target.classList.add("is-in");
        }, d);
        io.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  els.forEach(function (el) {
    io.observe(el);
  });
}

/* ---- Contact form -------------------------------------------------------
   Interim: composes a mailto to AID.contact.email. Swap in a form service or
   cloud function here when one exists. With no email configured yet, the
   form says so rather than failing silently.
   ------------------------------------------------------------------------ */
var MAILTO_MAX = 1800;

function initContactForm() {
  var form = document.querySelector("#aid-form");
  if (!form) return;
  var note = form.querySelector(".form-note");

  /* contact.html?topic=trial preselects the topic (used by the trial page). */
  var want = new URLSearchParams(location.search).get("topic");
  var topicSel = form.querySelector('[name="topic"]');
  if (want && topicSel && topicSel.querySelector('option[value="' + want.replace(/[^a-z]/g, "") + '"]'))
    topicSel.value = want;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var to = AID.contact.email;
    var v = function (n) {
      var el = form.querySelector('[name="' + n + '"]');
      return el ? el.value.trim() : "";
    };
    var sel = form.querySelector('[name="topic"]');
    var topic = sel ? sel.options[sel.selectedIndex].text : "";

    if (AID.formEndpoint) {
      var data = {};
      ["name", "studio", "email", "phone", "message"].forEach(function (k) { data[k] = v(k); });
      data.topic = topic;
      data.lang = AID.lang();
      data.page = location.href;
      note.innerHTML = AID.pick({ zh: "正在提交…", hant: "正在送出…", en: "Sending…" });
      note.hidden = false;
      fetch(AID.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          form.reset();
          note.innerHTML = AID.pick({
            zh: "已收到，我们会在 1 个工作日内联系您。",
            hant: "已收到，我們會在 1 個工作日內聯絡您。",
            en: "Thanks. We'll be in touch within one working day.",
          });
        })
        .catch(function () {
          note.innerHTML = AID.pick({
            zh: "提交没有成功，请稍后再试，或用页面上的联系方式直接找我们。",
            hant: "送出沒有成功，請稍後再試，或用頁面上的聯絡方式直接找我們。",
            en: "That didn't go through. Please try again, or use the contact details on this page.",
          });
        });
      return;
    }

    if (!to) {
      note.innerHTML = AID.pick({
        zh: "联系邮箱尚未开通，表单暂时无法发送。",
        hant: "聯絡電子郵件尚未開通，表單暫時無法送出。",
        en: "Our enquiry inbox isn't live yet, so this form can't send.",
      });
      note.hidden = false;
      return;
    }

    var L = AID.pick({
      zh: { subj: "官网咨询", name: "姓名", org: "工作室", mail: "邮箱", tel: "电话",
            topic: "咨询方向", msg: "项目情况", from: "来自 AID 官网联系表单" },
      hant: { subj: "官網諮詢", name: "姓名", org: "工作室", mail: "電子郵件", tel: "電話",
              topic: "諮詢方向", msg: "項目情況", from: "來自 AID 官網聯絡表單" },
      en: { subj: "Website enquiry", name: "Name", org: "Studio", mail: "Email", tel: "Phone",
            topic: "Topic", msg: "Project", from: "Sent from the AID website form" },
    });

    var who = v("studio") || v("name");
    var subject = "[" + L.subj + "] " + topic + (who ? " — " + who : "");
    var body = [
      L.name + ": " + v("name"),
      L.org + ": " + v("studio"),
      L.mail + ": " + v("email"),
      L.tel + ": " + v("phone"),
      L.topic + ": " + topic,
      "",
      L.msg + ":",
      v("message"),
      "",
      "— " + L.from,
    ].join("\n");

    var url = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    var tooLong = url.length > MAILTO_MAX;
    if (!tooLong) window.location.href = url;

    var link = '<a class="link" href="mailto:' + to + '">' + to + "</a>";
    note.innerHTML = tooLong
      ? AID.pick({
          zh: "内容较长，邮件客户端可能无法完整带出，请直接发送至 " + link + "。",
          hant: "內容較長，郵件程式可能無法完整帶出，請直接寄至 " + link + "。",
          en: "Your message is long enough that your email app may cut it off. Please email " + link + " directly.",
        })
      : AID.pick({
          zh: "已为你打开邮件客户端，请确认后发送。若没有反应，请直接发送至 " + link + "。",
          hant: "已為你開啟郵件程式，請確認後寄出。若沒有反應，請直接寄至 " + link + "。",
          en: "Your email app should now be open. Review and send. If nothing opened, email " + link + " directly.",
        });
    note.hidden = false;
  });
}

/* ---- Boot --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  renderFooter();
  renderContactSlots();
  renderPartners();
  renderQR();
  renderTeam();
  renderBrochure();
  initAnalytics();
  initContactForm();
  initReveal();
});
