# Personal Portfolio

My portfolio — projects, research, academic achievements, and contact details.

**Live site:** https://neuromancer3301.github.io/Neuromancer.github.io/

Built with semantic HTML5, CSS3 and vanilla JavaScript. No frameworks, no build
step, no dependencies, no backend. Clone it and open `index.html`.

---

## Quick start

1. Open `assets/js/content.js`.
2. Replace everything in `[square brackets]` with your real details.
3. Open `index.html` in a browser to check it.
4. Commit and push — GitHub Pages redeploys automatically.

---

## Adding content

**`assets/js/content.js` is the only file you edit.** Every word on the site
comes from it; the HTML, CSS and JS never need to change.

To add a project, copy an existing block in the `projects` array:

```js
{
  title: "Distributed Key-Value Store",
  year: "2027",
  status: "In progress",
  blurb: "A Raft-backed store with linearizable reads. The hard part was " +
         "getting leader leases right under clock skew.",
  tags: ["Rust", "gRPC", "Raft"],
  links: [{ label: "Source", href: "https://github.com/you/kvstore" }],
  featured: true,
}
```

The same pattern works for `skills`, `achievements`, `research`, `timeline`,
`leadership`, `writing`, `interests` and `gallery`.

### Three things that make this extensible

- **Empty sections delete themselves.** `research`, `writing` and `gallery`
  start empty, so those sections don't render at all — no empty headings. Add
  one entry and the section appears in the page *and* in the navigation
  automatically.
- **Section numbers recompute.** The `01 / 02 / 03` labels are derived at render
  time from whichever sections are visible, so there is never a gap.
- **Half-finished content degrades quietly.** Any URL still left as
  `[GitHub URL]` renders as a dimmed non-link instead of a broken one, so a
  partially-filled site never ships a 404.

Adding two years of future work is a few lines of data each time — never a
redesign.

---

## Changing the look

All colours are CSS custom properties at the top of `assets/css/styles.css`.
Both themes are defined there:

```css
:root                    { --accent: #e8a33d; ... }   /* dark theme  */
html[data-theme="light"] { --accent: #a86a12; ... }   /* light theme */
```

Change `--accent` in both blocks and the entire site re-skins. Fonts are the
three `--font-*` variables in the same block.

---

## Folder structure

```
.
├── index.html              page skeleton — semantic shell, zero hardcoded content
├── assets/
│   ├── css/styles.css      all styling; design tokens at the top
│   ├── js/content.js       ← everything personal lives here
│   ├── js/main.js          renders content.js into the skeleton
│   └── img/                images for the gallery
├── AI-USAGE.md             AI tool disclosure (assignment deliverable)
├── README.md               this file
├── .nojekyll               tells GitHub Pages to skip the Jekyll build
└── .gitignore
```

---

## Features

**Design** — sticky identity rail on desktop collapsing to a single column on
mobile; dark and light themes that follow the system setting, with a footer
toggle that remembers your choice; theme applied before first paint so there is
no flash of the wrong colours.

**UX** — smooth scrolling, scroll-spy navigation that highlights the section
you're reading, staggered reveal-on-scroll, hover states on every interactive
element.

**Accessibility** — semantic landmarks, skip-to-content link, one `h1` with no
heading-level skips, visible focus rings, `aria-label` on the nav, `aria-current`
on the active link, `aria-pressed` on the theme toggle, required `alt` text on
gallery images, and `prefers-reduced-motion` respected.

**Performance** — no framework and no build step; roughly 40 KB total across
three files; icons are inline SVG so there are no icon-font requests; gallery
images are lazy-loaded and async-decoded; fonts preconnect and use
`display=swap`. The only external request is Google Fonts.

**Robustness** — content is inserted as text nodes, never `innerHTML`, so
apostrophes and angle brackets in your writing are always safe; contact details
stay readable with JavaScript disabled; prints cleanly to PDF.

---

## Running locally

Open `index.html` directly, or serve it:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

---

## Deploying to GitHub Pages

### 1. Create the repository

On [github.com/new](https://github.com/new), create a repository and **set the
visibility to Public** (the assignment requires this; GitHub Pages also needs it
on free accounts).

This repo is named `Neuromancer.github.io`, which GitHub treats as an ordinary
project repository (a *user page* requires the name to match the username
exactly, i.e. `Neuromancer3301.github.io`). It therefore publishes to
`https://neuromancer3301.github.io/Neuromancer.github.io/`. All asset paths in
this site are relative, so it works correctly at that subpath.

Do **not** tick "Add a README" — this folder already has one.

### 2. Push

```sh
cd path/to/this/folder
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. Enable Pages

Repository → **Settings** → **Pages** → under *Build and deployment*, set
*Source* to **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**,
then **Save**.

### 4. Verify

Wait one to three minutes for the first build. Reload the Pages settings screen
and it shows your live URL. Check it on your phone too. Put the URL in the
**Live site** line at the top of this README, then commit and push again.

### 5. Optional — custom domain

Buy a domain, then in **Settings → Pages → Custom domain** enter it and save
(this creates a `CNAME` file in the repo). At your registrar add:

| Type  | Name  | Value                      |
|-------|-------|----------------------------|
| A     | `@`   | `185.199.108.153`          |
| A     | `@`   | `185.199.109.153`          |
| A     | `@`   | `185.199.110.153`          |
| A     | `@`   | `185.199.111.153`          |
| CNAME | `www` | `<your-username>.github.io`|

DNS can take up to 24 hours. Once it resolves, tick **Enforce HTTPS**.

### Troubleshooting

| Problem | Cause and fix |
|---|---|
| 404 on the live URL | Pages isn't enabled, or the build hasn't finished. Check Settings → Pages, and the **Actions** tab for a failed build. Give it three minutes. |
| Page loads but is unstyled | Wrong path case. GitHub Pages is case-sensitive; macOS and Windows are not. `assets/CSS/styles.css` works locally and 404s live. Keep everything lowercase. |
| Site is blank | A JavaScript error, almost always a typo in `content.js` — a missing comma or an unclosed quote. Open DevTools (F12) → Console; it names the line. |
| Changes don't appear | Browser cache. Hard-reload with Cmd/Ctrl + Shift + R. |
| Repo is private | Free accounts can't publish Pages from a private repo. Settings → General → Danger Zone → Change visibility → Public. |
| Only the README shows | `index.html` isn't in the folder you selected as the Pages source. It must be at the repository root. |

---

## Licence

Code is MIT — reuse the structure freely. The written content, project
descriptions and images are mine; please don't republish them as your own.
