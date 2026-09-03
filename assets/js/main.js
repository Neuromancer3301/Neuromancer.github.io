/* =============================================================================
   main.js — renders SITE (from content.js) into the page skeleton.

   You should not need to edit this file to add content. Edit content.js.

   Design notes:
     · Everything is built with createElement + textContent, never innerHTML, so
       content can never be parsed as markup.
     · Sections whose data array is empty hide themselves, and the navigation
       and the 01/02/03 numbering are derived from whatever survives. That is
       what makes the site extensible without a redesign.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) return;

  /* ── Helpers ─────────────────────────────────────────────────────────── */

  var $ = function (key) { return document.querySelector('[data-js="' + key + '"]'); };

  /**
   * Build an element. `attrs.text` sets textContent; `attrs.class` sets the
   * class. Children may be nodes or strings (added as text nodes).
   * Falsy children are skipped, so `cond ? node : null` works inline.
   */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function isEmpty(arr) { return !Array.isArray(arr) || arr.length === 0; }

  function setText(key, value) {
    var node = $(key);
    if (node) node.textContent = value || "";
  }

  // matchMedia is unavailable in some headless/embedded contexts — treat as no match.
  function mq(query) {
    return typeof window.matchMedia === "function"
      ? window.matchMedia(query).matches
      : false;
  }

  // A link is only rendered if it has a real destination. Unreplaced
  // placeholders like "[GitHub URL]" count as missing, so a half-filled
  // content.js degrades quietly instead of shipping dead links.
  function hasHref(href) {
    return typeof href === "string" && href.trim() !== "" && href.trim()[0] !== "[";
  }

  // External links open in a new tab; in-page and mailto links do not.
  function linkAttrs(href) {
    var a = { href: href };
    if (/^https?:\/\//i.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }

  // "Ada Lovelace King" → "AL" (first and last initial).
  function deriveInitials(name) {
    var words = String(name || "")
      .replace(/[[\]]/g, "")
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) return "—";
    var first = words[0][0];
    var last = words.length > 1 ? words[words.length - 1][0] : "";
    return (first + last).toUpperCase();
  }

  /* ── Icons (inline SVG — no icon font, no network request) ───────────── */

  var ICONS = {
    github:   "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z",
    linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.4 2.5 4.4 5.9V21h-4v-5.6c0-1.35-.03-3.1-1.95-3.1-1.95 0-2.25 1.5-2.25 3v5.7h-4V9z",
    mail:     "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.4.5 7.6 5.6L19.6 6H4.4zM20 7.8l-7.4 5.5a1 1 0 0 1-1.2 0L4 7.8v10.7h16V7.8z",
    code:     "M8.7 7.3a1 1 0 0 1 0 1.4L5.4 12l3.3 3.3a1 1 0 1 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 0zm6.6 0a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4z",
    link:     "M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a2.5 2.5 0 1 1 3.5 3.5l-1.6 1.6a1 1 0 0 1-1.4-1.4l1.6-1.6a.5.5 0 1 0-.7-.7l-3.5 3.5a1 1 0 0 1-1.4 0zm2.8-2.8a1 1 0 0 1 0 1.4l-3.5 3.5a2.5 2.5 0 1 1-3.5-3.5l1.6-1.6a1 1 0 1 1 1.4 1.4l-1.6 1.6a.5.5 0 0 0 .7.7l3.5-3.5a1 1 0 0 1 1.4 0z",
    arrow:    "M7 17L17 7M17 7H8M17 7v9",
  };

  function icon(name) {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    var path = document.createElementNS(NS, "path");
    path.setAttribute("d", ICONS[name] || ICONS.link);
    if (name === "arrow") {
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
    } else {
      path.setAttribute("fill", "currentColor");
    }
    svg.appendChild(path);
    return svg;
  }

  /** A row of "Source ↗ / Live ↗" links, or null when none are usable. */
  function buildLinks(links) {
    var usable = (links || []).filter(function (l) { return l && hasHref(l.href); });
    if (!usable.length) return null;

    var wrap = el("div", { class: "card-links" });
    usable.forEach(function (l) {
      wrap.appendChild(
        el("a", linkAttrs(l.href.trim()), [document.createTextNode(l.label), icon("arrow")])
      );
    });
    return wrap;
  }

  /* ══ IDENTITY ════════════════════════════════════════════════════════ */

  setText("initials", S.initials || deriveInitials(S.name));
  setText("name", S.name);
  setText("role", S.role);
  setText("org", S.org);
  setText("tagline", S.tagline);
  setText("footerNote", S.footerNote);
  setText("copyright", "© " + new Date().getFullYear() + " " + (S.name || ""));

  document.title = [S.name, S.role].filter(Boolean).join(" — ");

  var mailBtn = $("mailto");
  if (mailBtn && S.email) mailBtn.href = "mailto:" + S.email;

  var resumeBtn = $("resume");
  if (resumeBtn && hasHref(S.resumeUrl)) {
    resumeBtn.href = S.resumeUrl;
    resumeBtn.hidden = false;
  }

  /* ══ SOCIALS (rail) ══════════════════════════════════════════════════ */

  var socialsList = $("socials");
  if (socialsList && !isEmpty(S.socials)) {
    S.socials.forEach(function (s) {
      var label = el("span", { class: "handle", text: s.handle || s.label });
      var body = [icon(s.icon), label];

      // Unfilled placeholder → show it, but not as a broken link.
      socialsList.appendChild(
        el("li", null, [
          hasHref(s.href)
            ? el("a", Object.assign(linkAttrs(s.href.trim()), { "aria-label": s.label }), body)
            : el("span", { class: "social-todo", title: "Add this URL in content.js" }, body),
        ])
      );
    });
  }

  /* ══ ABOUT ═══════════════════════════════════════════════════════════ */

  var aboutBox = $("about");
  if (aboutBox && !isEmpty(S.about)) {
    S.about.forEach(function (p) { aboutBox.appendChild(el("p", { text: p })); });
  }

  /* ══ SKILLS ══════════════════════════════════════════════════════════ */

  var skillsBox = $("skills");
  if (skillsBox && !isEmpty(S.skills)) {
    S.skills.forEach(function (g) {
      var chips = el("ul", { class: "chips" });
      (g.items || []).forEach(function (i) { chips.appendChild(el("li", { text: i })); });

      skillsBox.appendChild(
        el("div", { class: "skill-group" }, [
          el("h3", { class: "skill-label", text: g.group }),
          chips,
        ])
      );
    });
  }

  /* ══ PROJECTS ════════════════════════════════════════════════════════ */

  var projectsBox = $("projects");
  if (projectsBox && !isEmpty(S.projects)) {
    // Featured first; original order preserved within each group.
    var ordered = S.projects.slice().sort(function (a, b) {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

    ordered.forEach(function (p) {
      var meta = [];
      if (p.status) {
        meta.push(el("span", {
          class: "status",
          "data-status": String(p.status).toLowerCase(),
          text: p.status,
        }));
      }
      if (p.year) meta.push(el("span", { text: p.year }));

      var tags = null;
      if (!isEmpty(p.tags)) {
        tags = el("ul", { class: "card-tags" });
        p.tags.forEach(function (t) { tags.appendChild(el("li", { text: t })); });
      }

      projectsBox.appendChild(
        el("article", { class: "card" + (p.featured ? " featured" : "") }, [
          el("div", { class: "card-head" }, [
            el("h3", { text: p.title }),
            meta.length ? el("div", { class: "card-meta" }, meta) : null,
          ]),
          p.blurb ? el("p", { text: p.blurb }) : null,
          tags,
          buildLinks(p.links),
        ])
      );
    });
  }

  /* ══ ACHIEVEMENTS ════════════════════════════════════════════════════ */

  var awardsBox = $("achievements");
  if (awardsBox && !isEmpty(S.achievements)) {
    S.achievements.forEach(function (a) {
      awardsBox.appendChild(
        el("li", null, [
          el("span", { class: "aw-year", text: a.year }),
          el("div", null, [
            el("h3", { text: a.title }),
            a.detail ? el("p", { text: a.detail }) : null,
          ]),
        ])
      );
    });
  }

  /* ══ RESEARCH ════════════════════════════════════════════════════════ */

  var researchBox = $("research");
  if (researchBox && !isEmpty(S.research)) {
    S.research.forEach(function (r) {
      researchBox.appendChild(
        el("article", { class: "card featured" }, [
          el("div", { class: "card-head" }, [
            el("h3", { text: r.title }),
            r.year ? el("div", { class: "card-meta" }, [el("span", { text: r.year })]) : null,
          ]),
          r.venue ? el("p", { class: "card-org", text: r.venue }) : null,
          r.blurb ? el("p", { text: r.blurb }) : null,
          buildLinks(r.links),
        ])
      );
    });
  }

  /* ══ TIMELINE ════════════════════════════════════════════════════════ */

  var timelineBox = $("timeline");
  if (timelineBox && !isEmpty(S.timeline)) {
    S.timeline.forEach(function (t) {
      timelineBox.appendChild(
        el("li", { "data-kind": t.kind || "activity" }, [
          el("span", { class: "tl-period", text: t.period }),
          el("h3", { text: t.title }),
          t.org ? el("span", { class: "tl-org", text: t.org }) : null,
          t.detail ? el("p", { text: t.detail }) : null,
        ])
      );
    });
  }

  /* ══ LEADERSHIP ══════════════════════════════════════════════════════ */

  var leadershipBox = $("leadership");
  if (leadershipBox && !isEmpty(S.leadership)) {
    S.leadership.forEach(function (l) {
      leadershipBox.appendChild(
        el("article", { class: "card" }, [
          el("div", { class: "card-head" }, [
            el("h3", { text: l.role }),
            l.period ? el("div", { class: "card-meta" }, [el("span", { text: l.period })]) : null,
          ]),
          l.org ? el("p", { class: "card-org", text: l.org }) : null,
          l.detail ? el("p", { text: l.detail }) : null,
        ])
      );
    });
  }

  /* ══ WRITING ═════════════════════════════════════════════════════════ */

  var writingBox = $("writing");
  if (writingBox && !isEmpty(S.writing)) {
    S.writing.forEach(function (w) {
      writingBox.appendChild(
        el("li", null, [
          w.date ? el("span", { class: "post-date", text: w.date }) : null,
          hasHref(w.href)
            ? el("a", linkAttrs(w.href.trim()), [document.createTextNode(w.title)])
            : el("span", { text: w.title }),
          w.blurb ? el("p", { text: w.blurb }) : null,
        ])
      );
    });
  }

  /* ══ INTERESTS + GALLERY ═════════════════════════════════════════════ */

  var interestsBox = $("interests");
  if (interestsBox && !isEmpty(S.interests)) {
    S.interests.forEach(function (b) {
      interestsBox.appendChild(
        el("article", null, [
          el("h3", { text: b.title }),
          el("p", { text: b.body }),
        ])
      );
    });
  }

  var galleryBox = $("gallery");
  if (galleryBox && !isEmpty(S.gallery)) {
    S.gallery.forEach(function (g) {
      var img = el("img", {
        src: g.src,
        alt: g.alt || "",       // alt is required — describe the image in content.js
        loading: "lazy",        // offscreen images are not fetched until needed
        decoding: "async",
      });
      galleryBox.appendChild(
        el("figure", null, [
          img,
          g.caption ? el("figcaption", { text: g.caption }) : null,
        ])
      );
    });
  }

  /* ══ CONTACT ═════════════════════════════════════════════════════════ */

  var contactBox = $("contact");
  if (contactBox && !isEmpty(S.socials)) {
    S.socials.forEach(function (s) {
      var body = [
        icon(s.icon),
        el("span", { class: "c-label", text: s.label }),
        el("span", { class: "c-value", text: s.handle || s.href }),
      ];
      contactBox.appendChild(
        el("li", null, [
          hasHref(s.href)
            ? el("a", linkAttrs(s.href.trim()), body)
            : el("span", { class: "c-todo" }, body),
        ])
      );
    });
  }

  /* ══ HIDE EMPTY SECTIONS ═════════════════════════════════════════════
     A section is shown only if its data container produced children. The
     Interests section counts both its cards and its gallery figures.        */

  [
    ["about", "about"],
    ["skills", "skills"],
    ["projects", "projects"],
    ["achievements", "achievements"],
    ["research", "research"],
    ["experience", "timeline"],
    ["leadership", "leadership"],
    ["writing", "writing"],
  ].forEach(function (pair) {
    var section = document.getElementById(pair[0]);
    var box = $(pair[1]);
    if (section && box) section.hidden = box.children.length === 0;
  });

  var interestsSection = document.getElementById("interests");
  if (interestsSection) {
    var hasInterests = interestsBox && interestsBox.children.length > 0;
    var hasGallery = galleryBox && galleryBox.children.length > 0;
    interestsSection.hidden = !hasInterests && !hasGallery;
  }

  /* ══ NAVIGATION + NUMBERING (derived from surviving sections) ════════ */

  var sections = Array.prototype.slice.call(document.querySelectorAll(".sec:not([hidden])"));
  var navList = $("nav");

  if (navList) {
    sections.forEach(function (sec) {
      navList.appendChild(
        el("li", null, [el("a", { href: "#" + sec.id, text: sec.dataset.label || sec.id })])
      );
    });
  }

  // Renumber so 01/02/03 has no gaps where sections were hidden.
  sections.forEach(function (sec, i) {
    var num = sec.querySelector(".num");
    if (num) num.textContent = String(i + 1).padStart(2, "0");
  });

  /* ══ SCROLL SPY ══════════════════════════════════════════════════════ */

  var navLinks = navList
    ? Array.prototype.slice.call(navList.querySelectorAll("a"))
    : [];

  if (navLinks.length && "IntersectionObserver" in window) {
    var onScreen = Object.create(null);

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) onScreen[e.target.id] = true;
          else delete onScreen[e.target.id];
        });

        // Highlight the topmost section currently in the band.
        var current = null;
        for (var i = 0; i < sections.length; i++) {
          if (onScreen[sections[i].id]) { current = sections[i].id; break; }
        }

        navLinks.forEach(function (a) {
          if (current && a.getAttribute("href") === "#" + current) {
            a.setAttribute("aria-current", "true");
          } else {
            a.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ══ REVEAL ON SCROLL ════════════════════════════════════════════════ */

  if (!mq("(prefers-reduced-motion: reduce)") && "IntersectionObserver" in window) {
    sections.forEach(function (s) { s.classList.add("reveal"); });

    var revealer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);   // animate once, then stop observing
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    sections.forEach(function (s) { revealer.observe(s); });
  }

  /* ══ THEME TOGGLE ════════════════════════════════════════════════════ */

  var root = document.documentElement;
  var toggle = $("theme");
  var themeLabel = $("themeLabel");
  var STORE_KEY = "portfolio-theme";

  function store(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) { /* private mode */ }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeLabel) themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  // The inline script in <head> already set the theme; sync the label to it.
  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      store(next);
    });
  }
})();
