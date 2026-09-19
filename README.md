# Dr. Mozib Newborn Foundation — website

Plain static site (HTML/CSS/JS, no build step), deployed free on GitHub Pages.

**Live:** https://juwelukg-lab.github.io/drmnf-website/

## Pages

Multi-page site, one HTML file per nav item — there's no shared template, so the
header/nav/footer are duplicated in each file (fine at this size; just repeat any nav
edit across files, or ask and it'll be scripted):

- `index.html` — Home (hero, impact stats, programs, "The Journey", donate CTA)
- `about.html` — About / foundation story
- `members.html` — Our Members (currently placeholder cards)
- `media-coverage.html` — Media Coverage, with Videos / News / Photos sections (matches the
  header dropdown)
- `gallery.html` — full photo gallery
- `contact.html` — Contact Us, address, phone, email, map

## Editing

- `assets/style.css` — all styling (colors/fonts as CSS variables at the top)
- `assets/main.js` — mobile menu, the EN/বাং language-toggle dictionary, and the
  scroll-in animation for "The Journey" section

Everything is plain files — edit in any text editor, no `npm install` needed.

## Language toggle

The EN / বাং switch in the header swaps every `data-i18n="key"` element's content using the
dictionary in `assets/main.js`. If you add new text to a page, give it a
`data-i18n="some_key"` attribute and add `some_key` to **both** the `en` and `bn` blocks in
that dictionary — otherwise it just won't translate (it silently keeps whatever's in the
HTML). Nav labels and the footer are shared keys reused across all six pages.

## What's a placeholder right now

Search the files for these and replace with real content when you have it:

- **Logo** — the circular badge in the header/footer is a generic placeholder mark, not the
  foundation's real logo (that only exists as a screenshot right now, not a usable image
  file). Send the actual logo file (PNG/SVG) and it'll be dropped in directly.
- **Photos** — every image is a labeled gray placeholder box (e.g. `assets/img/hero.jpg`,
  `assets/img/gallery-01.jpg`, `assets/img/member-01.jpg`...). Drop real photos into
  `assets/img/` with those filenames, then swap the `<div class="photo-frame">...</div>`
  block for a plain `<img src="assets/img/hero.jpg" alt="...">`.
- **Impact numbers** (rescued/foster/partners stats on Home) — currently made-up round numbers.
- **Founder & history section** (`about.html`) — currently a plausible placeholder story;
  replace with the real founding story, year, and founder bio.
- **Our Members** (`members.html`) — 4 placeholder cards (name/role/photo); send the real
  member list and it'll replace these directly.
- **Media Coverage** (`media-coverage.html`) — placeholder video thumbnails, press items, and
  photo picks; need real links/articles/dates.
- **Donate section** — bank account, branch, and bKash number are blank placeholders.
- **Email** (`info@drmnf.org`) — placeholder. The email on the original site
  (`...@...hostingersite.com`) looked like an unfinished Hostinger default, not a real
  inbox, so it wasn't reused — confirm your real address and update it in `contact.html`.
- **Social links** (Facebook/Twitter/LinkedIn icons in the footer/contact page) currently
  point to `#` — add real profile URLs.
- **Map** (`contact.html`) — embedded OpenStreetMap is centered on Narayanganj generally;
  not pinned to the exact address.

## Publishing changes

Any push to `main` redeploys the live site automatically (usually within a minute):

```bash
git add -A
git commit -m "Update donation details"
git push
```

## Free hosting/domain notes

- Currently on GitHub Pages, which is free indefinitely at `juwelukg-lab.github.io/drmnf-website`.
- If you'd like a nicer free-forever URL, you could rename the repo to
  `juwelukg-lab.github.io` (a "user site") to get `https://juwelukg-lab.github.io/` with no
  path suffix — ask and I can do that migration.
- If you later buy a real domain (e.g. `drmnf.org`), GitHub Pages supports a custom domain
  for free — add a `CNAME` file and set DNS records; ask and I'll walk through it.
