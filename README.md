# Russel Portfolio and CV

Portfolio, ten project profiles, case studies, and CV for **Russel Jhon C. Buisan**, BS Computer Science, Cum Laude. Static HTML, CSS, and JavaScript; no build or runtime dependencies.

## Preview

Run `python3 -m http.server 8765` from this directory, then open <http://localhost:8765>.

## Files

- `index.html` - main portfolio website
- `case-studies.html` - detailed project writeups
- `project.html` - reusable project detail page
- `project-data.js` - project facts used by the detail page
- `project.js` - renders the selected project from the URL
- `cv.html` - print-friendly CV
- `cv.md` - editable markdown CV
- `cv-traditional.html` - authoritative one-page ATS CV and PDF source
- `cv-traditional.md` - matching long-form editable source
- `Russel_Buisan_CV.pdf` - published download
- `styles.css` - shared styling
- `script.js` - project filters, cinematic entry, mobile navigation, active-section tracking, and case-study deep links
- `theme.js` - system theme detection and optional saved preference
- `assets/SOURCES.md` - image provenance and local font licenses

The homepage is readable without JavaScript. Project details use `project-data.js`; invalid project IDs show an explicit recovery link. A project can provide `imageDark` alongside `image` for theme-specific artwork.

## Project Materials Referenced

- `classvision/` - BSCS thesis, YOWOv2 classroom activity detection framework
- `work/meta-ads-data/` - HammerPulse, Meta advertising data ingestion, reporting, creative review, and an account-scoped assistant; sole-developer project
- `thesis-defense-scheduler/` - secure full-stack scheduling system
- `gym-face-management/` - gym management and face-based attendance system
- `chantea-kiosk/` - kiosk/POS, Laravel API, and staff/customer workflows
- `USM_Agapay/` - Laravel/Vue service-desk system
- `Pentest/university-pentest-workspace/` - authorized security research workspace
- GitHub profile: <https://github.com/De1m0z>

## Notes

Images used by the portfolio are stored in `assets/` so the published GitHub Pages site works without desktop-only paths.

Published site target: https://de1m0z.github.io/

Project detail pages use packaged portfolio data. The site is intentionally focused on project descriptions, work performed, stacks, metrics, and case notes so visitors can quickly understand what Russel built.

The October 2026 refresh presents every project equally with original logos or native typographic name marks. [Olivier Larose's floating gallery](https://github.com/olivierlarose/floating-image-gallery) and [React Bits' Tilted Card](https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/TiltedCard) informed the interactive logo wall; [Hamish Williams's portfolio](https://github.com/HamishMW/portfolio) informed typography scale. The implementation uses CSS and the native Web Animations API, with a cinematic entrance, pointer-responsive project logos, animated filtering, immediate keyboard actions, and reduced-motion support. No reference-site code, artwork, or runtime dependencies are bundled.

[Brittany Chiang's project archive](https://github.com/bchiang7/v4/blob/main/src/components/sections/projects.js) and [Paco Coursey's project entries](https://github.com/pacocoursey/paco/blob/master/components/entry/index.js) informed the compact reading links and hover feedback in the extended redesign. Case notes now use ten equal native disclosures, with direct hash links opening the relevant project. System screenshots are optional supporting evidence. Project details use a compact identity mark and a reading column with project facts alongside it. University marks are attributed to the university, not presented as dedicated project logos.

## Checks and CV export

With Python Playwright and Chrome available, run `python3 scratch/verify_portfolio.py`. It starts its own temporary server and verifies routing, filters, theme behavior (including blocked storage), mobile keyboard navigation, active sections, case-study disclosures and deep links, responsive widths, reduced motion, and the no-JavaScript fallback.

Existing CV checks: `python3 scratch/verify_html.py`, `python3 scratch/verify_md.py`, and `python3 scratch/verify_print_styles.py`.

After editing the CV, synchronize facts across both HTML and Markdown variants. With the preview server running, export the ATS source:

```sh
google-chrome --headless --no-pdf-header-footer --print-to-pdf=Russel_Buisan_CV.pdf http://localhost:8765/cv-traditional.html
pdfinfo Russel_Buisan_CV.pdf
pdftotext -layout Russel_Buisan_CV.pdf -
```

Confirm one A4 page, selectable text, HammerPulse first, and complete contact, education, experience, and leadership information. Keep the existing body font size; shorten copy if it stops fitting.
