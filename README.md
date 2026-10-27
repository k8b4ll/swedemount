# Swedemount Roofing & Siding — website

Homepage for Swedemount Roofing & Siding (Newark, NJ). Plain HTML, CSS and JavaScript: no build step, no frameworks, nothing to install.

## What's in here

```
index.html                 the page
css/styles.css             fonts, scroll animations, carousel styles
js/main.js                 project carousel + estimate form
assets/
  favicon.svg
  fonts/                   Sweden Sans (Book, SemiBold, Bold) — see licence note below
  img/hero-roof.jpg        hero photo
  logos/                   GAF, CertainTeed, Alside
```

Most layout styling lives inline in `index.html`, section by section, so each block can be edited where it sits.

## Preview it locally

Double-clicking `index.html` works, but browsers block the custom fonts on `file://` pages. For a true preview, run a tiny local server from this folder:

```
python3 -m http.server 8000
```

then open http://localhost:8000.

## Publish free with GitHub Pages

1. Create a new repository on GitHub (e.g. `swedemount-website`).
2. Upload everything in this folder (drag the files into the repo's **Add file › Upload files** page, or push with git).
3. In the repo, go to **Settings › Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute the site is live at `https://<your-username>.github.io/swedemount-website/`.

To use `swedemountroofing.com`, add it under **Settings › Pages › Custom domain** and point the domain's DNS at GitHub Pages (GitHub shows the exact records).

## Connect the estimate form

GitHub Pages only hosts files, so the form needs a form service to send you the requests by email. The page is set up for [Formspree](https://formspree.io) (free tier available):

1. Create a Formspree form and copy its ID (looks like `xyzabcd`).
2. In `index.html`, find `https://formspree.io/f/YOUR_FORM_ID` and replace `YOUR_FORM_ID` with yours.

Until then, submitting the form just shows the "Request sent" message, so you can preview it.

## Still to fill in

Search `index.html` for `[` to find every placeholder:

- Project photos, titles, towns and dates (carousel and problem section)
- Real customer reviews, Google rating and review count
- Figures: years of experience, roofs completed
- NJ Home Improvement Contractor number, service towns, timelines, warranty and financing
- A higher-resolution hero photo (2400 px wide or more) — the current one is 540 px and will look soft on large screens

## Fonts and licences

- **Noto Sans** (body text) loads from Google Fonts and is free to use.
- **Sweden Sans** (headings) is included in `assets/fonts`. Its licence reads *"Full exclusive license for Svenska Institutet."* Publishing it on a public website — or in a public GitHub repo — needs written permission from the Swedish Institute. Until you have that, keep the repo **private**, or switch the headings to Noto Sans: in `css/styles.css`, change the `h1,h2,h3,dd,blockquote{font-family:"Sweden Sans", …}` rule to start with `"Noto Sans"` and delete the `assets/fonts` folder.
- **Brand logos** (GAF, CertainTeed, Alside) are the manufacturers' trademarks; use them as your partner agreements allow.

## Browser notes

The scroll-linked animations use CSS scroll-driven animations (Chrome, Edge, recent Safari). Other browsers show the page fully, without the motion. Visitors who prefer reduced motion get a still page.
