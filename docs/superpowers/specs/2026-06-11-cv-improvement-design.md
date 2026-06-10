# Design Spec: CV Alignment and Print Optimization

**Date:** 2026-06-11  
**Author:** Antigravity (AI Assistant)  
**Target File Path:** `docs/superpowers/specs/2026-06-11-cv-improvement-design.md`

---

## 1. Objectives

1. **Target Alignment:** Tailor Russel Jhon C. Buisan's CV to a **Full-Stack Software Engineer** role, emphasizing web apps, APIs (Laravel, FastAPI, React), databases, and secure system workflows.
2. **Incorporate New Data:** Add contact details, On-the-job Training (OJT) experience at INFOSOFT, and PSITS leadership roles extracted from `/home/russel/Downloads/manus/106.pdf` and `/home/russel/Downloads/manus/107.pdf`.
3. **Layout & Print Constraints:** Fit the entire CV (both the markdown `cv.md` and HTML `cv.html` versions) onto a **single printed page**. Ensure the print stylesheet in `styles.css` handles margins, padding, and font sizes dynamically so that printing or exporting as PDF stays strictly on 1 page.

---

## 2. Content Changes

### A. Contact Details
* **Phone:** `+63 920 633 1342`
* **Email:** `rjcbuisan@usm.edu.ph`
* **Address:** `Pikit, Cotabato, Philippines` (or Kabacan/Pikit combined)
* **GitHub / Portfolio:** Keep existing links.

### B. Professional Experience (New)
* **On-the-job Training (OJT) Developer** | INFOSOFT (Matina, Davao City)  
  *June 2025 – August 2025*
  * Gained industry experience in full-stack web development, participating in database schema design and writing clean backend APIs.
  * Debugged and styled client-facing interfaces, ensuring responsive layouts and proper interaction flows.

### C. Selected Projects (Reframed for Full-Stack Impact)
1. **ClassVision: Student Activity Detection Framework**  
   *Python, YOWOv2, CVAT, PyTorch, Research Documentation*
   * Developed a classroom video analytics framework for action detection (studying, collaborative, idle, arriving/leaving).
   * Managed and validated datasets of 108,116 labels, 1.95M bounding boxes, and by-video partitions for YOWOv2 training.
   * Enforced privacy-by-design boundaries by excluding face recognition, identity profiling, and biometric matching.
2. **Cheen Tea Kiosk and API**  
   *Next.js, React, Tailwind CSS, Laravel 12, Sanctum, Reverb, Cloudinary*
   * Created customer ordering, cashier, kitchen, and admin dashboard interfaces with Next.js and Tailwind CSS.
   * Designed backend API endpoints using Laravel 12 Sanctum for auth, and Reverb (WebSockets) for real-time order queuing.
3. **USM Agapay Service Desk**  
   *Laravel, Vue 3, Pinia, Sanctum, Reverb, SQL Server, MinIO/S3, Docker*
   * Developed ticket workflows (request, queue, transfer, attachment, logs) with role-aware routing in Vue 3.
   * Secured backend routes with Sanctum middleware and containerized the setup (SQL Server, Redis, MinIO, queue workers).
4. **Gym Face Management / RAK Fitness**  
   *Django, FastAPI, React, PostgreSQL, InsightFace, pytest*
   * Designed membership plans, billing, attendance, and local face recognition check-in using InsightFace embeddings.
   * Modeled privacy-aware flows with biometric consent safeguards and manual fallback entries, tested with pytest.
5. **USMctf Platform**  
   *Next.js, Laravel, FastAPI, PostgreSQL, Redis, Docker Compose*
   * Created a full-stack CTF training platform with team management, user profiles, and real-time challenge scoring.
   * Orchestrated multi-service backend containers using Docker Compose, leveraging Redis caches and PostgreSQL.
6. **University Pentest & Vulnerability Research Workspace**  
   *OWASP, Burp Suite, Ghidra, threat intelligence, reporting*
   * Set up an authorized, non-destructive pentesting workspace using Burp Suite and Ghidra for campus systems.
   * Documented proof-of-concept (PoC) security guardrails and structured remediation handoffs.

### D. Leadership & Organizations (New)
* **Socio-Cultural & Sports Chairperson** | University of Southern Mindanao | *2025 – 2026*
* **External Officer** | Philippine Society of Information Technology Students (PSITS) | *2024 – 2025*

---

## 3. Styling & Layout Changes (`styles.css`)

To guarantee a clean 1-page layout when printing or rendering `cv.html`:
1. **Structure:** Group the CV section items to be compact.
2. **Typography:** Scale headings slightly down inside the print styles (e.g., `h1` to `26px`, `h2` to `14px`, text to `11px`).
3. **Grids:** Use a two-column sidebar layout for print to optimize space (left sidebar for Education, Skills, and Organizations; main right column for Profile, Experience, and Projects).
4. **Spacing:** Reduce section paddings and item margins during print:
   ```css
   @media print {
     @page {
       size: A4;
       margin: 0.4in;
     }
     .cv-document {
       padding: 0;
       border: 0;
       box-shadow: none;
       display: grid;
       grid-template-columns: 240px 1fr;
       gap: 24px;
     }
     /* Additional specific selectors to minimize spacing */
   }
   ```

---

## 4. Verification Plan

1. **Local Preview:** Build/review the HTML rendering of `cv.html` using local browser preview.
2. **Single-Page Export Check:** Verify that the page fits exactly within one page when printing to a PDF. We can verify using Playwright to take a PDF snapshot of the page and inspect page dimensions.
3. **Link Check:** Ensure all public repository links and internal relative links work correctly.
