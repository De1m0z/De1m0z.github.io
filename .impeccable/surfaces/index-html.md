# Portfolio landing page: typography and interactive logo wall

Primary target: index.html
Related targets: styles.css, script.js, project-data.js, project.html, case-studies.html, cv.html
Mode: Experience
Build path: code, explicitly selected by the user. No approved image comp.

## Authority

The user rejected the featured-HammerPulse hero, requested equal prominence for all projects, and said to use logos instead of entire-system screenshots. After the first uniform gallery implementation, they asked to improve the landing page again and search GitHub. In the structured question they explicitly chose **Bold typography with an interactive logo wall**. They then requested **cinematic or entry** animation. This is the current contract; the previous plain masthead/gallery contract and its captures are superseded.

The user also changed the contact email to **oslecbuisan613@gmail.com**. Update the website, both HTML/Markdown CV versions and downloadable single-page A4 PDF. Keep established project facts, full name, existing portrait in About, blue/cool neutral identity, Space Grotesk and DM Sans, routes, and light/dark support.

## Form and first viewport

A large, left-aligned, three-line statement introduces Russel as a developer: From idea / to working / software. A short personal introduction and project/CV actions support it. Alongside, ten equally sized project-logo links form a staggered three-row wall (three, four, three), each carrying its project name. HammerPulse uses its original vector wordmark at the same scale as the other marks. The wall is actual navigation, not a decorative system screenshot. Original logos are used where available; native name marks identify projects without a dedicated supplied logo.

The wall responds gently to a fine pointer, and an individual logo tile lifts toward attention. The project index below provides all ten summaries, technology stacks, category filtering, and detail links with equal treatment. About, case notes, skills, thesis, and contact complete the page. Screenshots appear only as supporting evidence in long case studies.

## Motion thesis

One bounded cinematic entry: headline lines reveal with a crop and vertical movement; the project wall unfolds through perspective into its stable reading position. No loading screen or fake progress. Content is visible by default. No autoplay loop, custom cursor, or scroll hijacking. Fine-pointer motion stays restrained and stops at pointer exit. Category filtering retains measured positional continuity. Keyboard actions are immediate; Tab cancels entry/reflow and wall motion. Reduced-motion preference removes movement, including a live change of preference.

## Responsive and behavior

Wide screens use two asymmetric hero columns. Tablets stack the headline and logo wall; phones use a compact static two-column wall with every mark and name visible. Category filters operate on the detailed index only. The wall always exposes all ten projects. Preserve native links, 44px controls, focus rings, mobile menu behavior, no-JavaScript fallback and no horizontal overflow at 320, 390, 768, 1024, 1440 and 1905px.

## References and selection

The user directly selected the typography/logo-wall direction. Surface seed 285179d1 was recorded as pick; the user's explicit choice outranks the deal. The identity remains established; the composition and opening are replaced.

- https://github.com/olivierlarose/floating-image-gallery : inspected source and live demo. Use the sense of a spatial gallery that acknowledges pointer movement; use the user's logos rather than unrelated photography.
- https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/TiltedCard : inspected the pointer-to-rotation implementation. Use native CSS/WAAPI; do not bundle React or Motion for this static site.
- https://github.com/olivierlarose/project-gallery-colored-card : retained as a reference for direct gallery hover feedback.
- https://github.com/patsma/nuxt-portfolio-gsap : inspected README and preview; its own colors, serif typography, content and framework are not adopted.

No reference-site code or artwork is copied. Design variance 8, motion intensity 7, density 4. The larger three-line headline and spatial wall must be a material improvement over the prior small masthead, not merely a change in spacing. Opening animation must run, be interruptible, and respect accessibility preferences. Verify in one batched round, correct once if needed, then use a fresh independent finish reviewer and final documenter.

## Extension requested after landing implementation

The user supplied five screenshots and rejected the plain lower homepage sections, the oversized ClassVision university seal, and the screenshot-led case studies page. Extend the approved typography and logo identity to these surfaces. Keep the cinematic opening and equal project wall. Replace the two text-only case notes with compact illustrated reading links; make skills scannable and connect them to actual work; show the thesis process rather than an isolated score wall; use an open typographic contact section. Reduce oversized spacing. Fix navigation that highlights a later section while the current section remains visible.

Project details and case studies use Read mode: compact identity marks, readable text, factual metadata, and progressive disclosure of long evidence. Every case study gets the same summary treatment and the same ordering as the homepage. A university seal is identified as the university seal, never claimed to be a dedicated ClassVision logo. System screenshots are optional evidence inside a disclosure, never the default identity image.

Additional GitHub source references inspected: https://github.com/bchiang7/v4/blob/main/src/components/sections/projects.js and https://github.com/pacocoursey/paco/blob/master/components/entry/index.js . Borrow compact entries and clear hover feedback, not source code, assets, frameworks, or color palettes.

## Header identity correction

The user rejected the RB badge itself after the spacing refinement. Replace it across the homepage, detail pages, and case studies with a lowercase `russel buisan` wordmark: bold given name, lighter blue surname, and the factual role below. Keep the full biographical name in content and metadata. The browser icon uses two simple forward strokes in the same blue, with no initials or badge. The shared navigation, homepage composition, project logos, and cinematic entry remain part of the approved surface. This is a component replacement within the established world, not a new page direction. For this component: DESIGN_VARIANCE 6, MOTION_INTENSITY 2, VISUAL_DENSITY 3; native type and CSS color feedback need no new library or generated image.

Inspected references: https://github.com/antfu/antfu.me/blob/main/src/components/NavBar.vue and its Logo.vue, and https://github.com/pacocoursey/paco/blob/master/components/header/index.js . Apply the separation of a personal identity from quiet navigation. No source code, signature, or logo is copied.
