# Dr. Mozib Newborn Foundation — website

Plain static site (HTML/CSS/JS, no build step), deployed free on GitHub Pages.

**Live:** https://juwelukg-lab.github.io/drmnf-website/

## Editing

- `index.html` — all page content and structure
- `assets/style.css` — all styling (colors/fonts as CSS variables at the top)
- `assets/main.js` — mobile menu + the scroll-in animation for "The Journey" section

Everything is plain files — edit in any text editor, no `npm install` needed.

## What's a placeholder right now

Search the files for these and replace with real content when you have it:

- **Photos** — every image is a labeled gray placeholder box (e.g. `assets/img/hero.jpg`,
  `assets/img/gallery-01.jpg`...). Drop real photos into `assets/img/` with those filenames,
  then in `index.html` swap the `<div class="photo-frame">...</div>` block for a plain
  `<img src="assets/img/hero.jpg" alt="...">`.
- **Impact numbers** (rescued/foster/partners stats) — currently made-up round numbers.
- **Founder & history section** — currently a plausible placeholder story; replace with the
  real founding story, year, and founder bio.
- **Media coverage** — placeholder press items, need real articles/links.
- **Donate section** — bank account, branch, and bKash number are blank placeholders.
- **Email** (`info@drmnf.org`) — placeholder. The email on the original site
  (`...@...hostingersite.com`) looked like an unfinished Hostinger default, not a real
  inbox, so it wasn't reused — confirm your real address and update it in `index.html`.
- **Social links** (Facebook/Twitter/LinkedIn icons in the footer/contact section) currently
  point to `#` — add real profile URLs.
- **Map** — embedded OpenStreetMap is centered on Narayanganj generally; not pinned to the
  exact address.

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
