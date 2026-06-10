# CV Alignment and Print Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update Russel Jhon C. Buisan's CV (both `cv.md` and `cv.html`) to target a Full-Stack Software Engineer, incorporating contact details, OJT experience, and leadership roles extracted from source PDFs, and optimizing print styles in `styles.css` to guarantee a single-page print layout.

**Architecture:**
- Refactor CV content in both Markdown (`cv.md`) and HTML (`cv.html`) formats to focus on full-stack development achievements and include INFOSOFT OJT and PSITS leadership roles.
- Modify `@media print` queries in `styles.css` to apply compact layouts, smaller font sizes, two-column grids for side information, and tight margins.
- Implement python-based verification scripts to validate content existence and format consistency.

**Tech Stack:** HTML, CSS, Markdown, Git, Python (for verification)

---

### Task 1: Update Markdown CV Content

**Files:**
- Modify: `cv.md`
- Create: `scratch/verify_md.py`

- [ ] **Step 1: Write a verification script for `cv.md`**
  Create `scratch/verify_md.py` to check for key content additions and structure changes.

  ```python
  # scratch/verify_md.py
  import os

  def test_cv_md():
      path = "cv.md"
      assert os.path.exists(path), f"{path} does not exist"
      with open(path, "r", encoding="utf-8") as f:
          content = f.read()

      # Check for new contact details
      assert "+63 920 633 1342" in content, "Phone number missing"
      assert "rjcbuisan@usm.edu.ph" in content, "Email address missing"
      assert "Pikit, Cotabato" in content, "Home address missing"

      # Check for target role alignment
      assert "Full-stack Software Engineer" in content, "Target alignment missing"

      # Check for OJT experience
      assert "INFOSOFT" in content, "OJT company name missing"
      assert "June 2025 – August 2025" in content, "OJT date missing"

      # Check for leadership roles
      assert "PSITS" in content, "PSITS organization missing"
      assert "Socio-Cultural & Sports Chairperson" in content, "Chairperson role missing"

      # Verify old projects and minor items are cleaned up/removed
      assert "Thesis Defense Scheduler" not in content, "Thesis Defense Scheduler should be omitted to fit 1-page"
      assert "Optimization Algorithms Assignment" not in content, "Academic assignments should be omitted to fit 1-page"

      print("cv.md Verification: PASS")

  if __name__ == "__main__":
      test_cv_md()
  ```

- [ ] **Step 2: Run the verification script to verify failure**
  Run command: `python3 scratch/verify_md.py`
  Expected Output: Fail on phone number or file structure check.

- [ ] **Step 3: Update `cv.md` content**
  Update the entire file `cv.md` with the new optimized full-stack CV structure.

  ```markdown
  # Russel Jhon C. Buisan

  BS Computer Science - Full-stack Software Engineer | Specialized in Web APIs, Secure Workflows & AI Integration  
  Pikit, Cotabato, Philippines  
  GitHub: <https://github.com/De1m0z>  
  Email: <rjcbuisan@usm.edu.ph>  
  Contact: +63 920 633 1342  

  ## Profile

  BS Computer Science student at the University of Southern Mindanao with hands-on experience designing and building secure, database-backed full-stack applications. Proven track record in implementing robust API service layers, role-based access control (RBAC), and real-time features, alongside integrating specialized machine learning and computer vision workflows.

  ## Education

  **Bachelor of Science in Computer Science**  
  University of Southern Mindanao, Kabacan, Cotabato  
  Major: Computer Science  
  Thesis: *A YOWOv2-Based Student Activity Detection Framework for Smart Academic Environment*  
  Thesis manuscript: April 2026

  ## Technical Skills

  - Frontend: React, Next.js, Vue 3, Pinia, TypeScript, Tailwind CSS, Radix/shadcn-style components, dashboards, kiosk UI, admin screens.
  - Backend: FastAPI, Laravel 12 (Sanctum, Reverb), Django, ASP.NET Core, REST APIs, service layers, schemas, controllers, authentication flows.
  - Databases and infrastructure: PostgreSQL, MS SQL Server, SQLite, Redis, Docker Compose, Alembic, SQLAlchemy, Entity Framework Core, migrations, seed scripts, MinIO/S3.
  - Machine learning / computer vision: YOWOv2 workflow, CVAT annotations, dataset validation, by-video partitioning, inference post-processing, InsightFace embeddings.
  - Security: RBAC, JWT cookies, CSRF protection, bcrypt, AES-GCM encryption, audit logs, rate limiting, authorized pentest workflow.
  - Research and documentation: Thesis manuscript drafting, methodology guides, evaluation figures, defense slides, presentation clips, technical reports, and project notes.

  ## Professional Experience

  **On-the-job Training (OJT) Developer**  
  INFOSOFT, Matina, Davao City  
  *June 2025 – August 2025*
  - Gained industry experience in full-stack web development, participating in database schema design and writing clean backend APIs.
  - Debugged and styled client-facing interfaces, ensuring responsive layouts and proper interaction flows.

  ## Project Experience

  ### Cheen Tea Kiosk and API

  Next.js, React, Tailwind CSS, Laravel 12, Sanctum, Reverb, Cloudinary

  - Developed customer-facing ordering, cart, kitchen display, cashier, cashier dashboard, and admin dashboard interfaces.
  - Built real-time order queueing and notifications using Laravel Reverb (WebSockets) and Sanctum authentication.
  - Connected API routes for categories, modifiers, customers, loyalty rewards, image uploads, and dashboard reports.

  ### USM Agapay Service Desk

  Laravel, Vue 3, Pinia, Sanctum, Reverb, SQL Server, MinIO/S3, Docker

  - Designed a university service-ticket workflow supporting ticket claims, office transfers, comments, attachments, and queues.
  - Built role-aware Vue 3 routing and Sanctum middleware boundaries for clients, staff, office admins, and system admins.
  - Containerized the environment using Docker Compose with MS SQL Server, Redis, S3-compatible MinIO, and queue workers.

  ### Gym Face Management / RAK Fitness

  Django, FastAPI, React, PostgreSQL, InsightFace, pytest

  - Built gym operations workflows managing member registration, billing plans, payments, attendance reports, and cashier dashboard.
  - Integrated local face recognition check-in using InsightFace buffalo_l embeddings, consent checks, and manual fallback entry.
  - Prepared intelligent-system design notes, check-in architecture, and automated verification tests with pytest.

  ### ClassVision: YOWOv2 Student Activity Detection

  Python, YOWOv2, CVAT, PyTorch, research documentation

  - Developed a privacy-conscious classroom video analytics framework for action detection (studying, collaborative, idle, arriving/leaving).
  - Curated and validated CCTV-derived datasets consisting of 108,116 label files, 1.95M annotated bounding boxes, and by-video partitions.
  - Established privacy-by-design boundaries by strictly omitting facial recognition, identity matching, and student profiling from the model.

  ### USMctf Platform

  Next.js, Laravel, FastAPI, PostgreSQL, Redis, Docker Compose  
  Repository: <https://github.com/De1m0z/CTF>

  - Created a full-stack CTF learning platform featuring team management, user profiles, and real-time challenge scoring.
  - Orchestrated a decoupled multi-service architecture using Docker Compose, combining a Laravel API, a FastAPI challenge service, and Redis-backed scores.

  ### University Pentest and Vulnerability Research Workspace

  OWASP workflow, Burp Suite, Ghidra, ATT&CK, CISA KEV, reporting

  - Organized an authorized, non-destructive pentesting workspace using Burp Suite and Ghidra for campus systems.
  - Documented threat scenarios, proof-of-concept (PoC) security guardrails, and prepared structured remediation handoffs.

  ## Leadership & Organizations

  - **Socio-Cultural & Sports Chairperson**, University of Southern Mindanao (2025 – 2026)
  - **External Officer**, Philippine Society of Information Technology Students (PSITS) (2024 – 2025)

  ## Public Links

  - GitHub profile: <https://github.com/De1m0z>
  - Portfolio: <https://de1m0z.github.io/>
  - USMctf: <https://github.com/De1m0z/CTF>
  - Cheen Tea Kiosk: <https://github.com/De1m0z/chantea-kiosk>

  ## Notes

  References available on request.
  ```

- [ ] **Step 4: Run the verification script to verify success**
  Run command: `python3 scratch/verify_md.py`
  Expected Output: `cv.md Verification: PASS`

- [ ] **Step 5: Commit changes**
  Run: `git add cv.md scratch/verify_md.py && git commit -m "feat: align cv.md content with full-stack target and new details"`

---

### Task 2: Update HTML CV Content

**Files:**
- Modify: `cv.html`
- Create: `scratch/verify_html.py`

- [ ] **Step 1: Write a verification script for `cv.html`**
  Create `scratch/verify_html.py` using python's `html.parser` to check tags and content.

  ```python
  # scratch/verify_html.py
  import os
  from html.parser import HTMLParser

  class CVParser(HTMLParser):
      def __init__(self):
          super().__init__()
          self.text_content = []
          self.hrefs = []

      def handle_data(self, data):
          self.text_content.append(data.strip())

      def handle_starttag(self, tag, attrs):
          if tag == 'a':
              for attr in attrs:
                  if attr[0] == 'href':
                      self.hrefs.append(attr[1])

  def test_cv_html():
      path = "cv.html"
      assert os.path.exists(path), f"{path} does not exist"
      with open(path, "r", encoding="utf-8") as f:
          content = f.read()

      parser = CVParser()
      parser.feed(content)
      full_text = " ".join(parser.text_content)

      # Check elements
      assert "+63 920 633 1342" in full_text, "Phone number missing in HTML"
      assert "rjcbuisan@usm.edu.ph" in full_text, "Email missing in HTML"
      assert "INFOSOFT" in full_text, "OJT missing in HTML"
      assert "Socio-Cultural & Sports Chairperson" in full_text, "Chairperson role missing in HTML"
      assert "External Officer" in full_text, "PSITS role missing in HTML"
      assert "Thesis Defense Scheduler" not in full_text, "Thesis Defense Scheduler should be removed"

      # Check links
      assert "rjcbuisan@usm.edu.ph" in parser.hrefs or "mailto:rjcbuisan@usm.edu.ph" in parser.hrefs or any("rjcbuisan@usm.edu.ph" in h for h in parser.hrefs), "Email link missing"
      assert "https://github.com/De1m0z/chantea-kiosk" in parser.hrefs, "Cheen tea link missing"

      print("cv.html Verification: PASS")

  if __name__ == "__main__":
      test_cv_html()
  ```

- [ ] **Step 2: Run the verification script to verify failure**
  Run command: `python3 scratch/verify_html.py`
  Expected Output: Fail on new tags, texts or links.

- [ ] **Step 3: Update `cv.html` content**
  Update the content in `cv.html` to mirror the updated `cv.md`. Use clean semantic tags and include the newly extracted details and links.

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Russel Jhon C. Buisan - CV</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body class="cv-page">
      <div class="cv-print-actions" aria-label="CV actions">
        <button type="button" onclick="window.print()">Print or save as PDF</button>
        <a class="button secondary" href="index.html">Back to portfolio</a>
        <a class="button secondary" href="case-studies.html">Case studies</a>
        <a class="button secondary" href="cv.md">Markdown version</a>
      </div>

      <main class="cv-document">
        <header class="cv-top">
          <div>
            <p class="eyebrow">Curriculum Vitae</p>
            <h1>Russel Jhon C. Buisan</h1>
            <p class="lead">Full-stack Software Engineer | Specialized in Web APIs, Secure Workflows & AI Integration</p>
          </div>
          <address class="cv-contact">
            <span>Pikit, Cotabato, Philippines</span>
            <a href="mailto:rjcbuisan@usm.edu.ph">rjcbuisan@usm.edu.ph</a>
            <a href="tel:+639206331342">+63 920 633 1342</a>
            <a href="https://github.com/De1m0z">github.com/De1m0z</a>
          </address>
        </header>

        <div class="cv-grid-container">
          <div class="cv-main-col">
            <section class="cv-section-nested">
              <h2>Profile</h2>
              <p>
                BS Computer Science student at the University of Southern Mindanao with hands-on experience designing and building secure, database-backed full-stack applications. Proven track record in implementing robust API service layers, role-based access control (RBAC), and real-time features, alongside integrating specialized machine learning and computer vision workflows.
              </p>
            </section>

            <section class="cv-section-nested">
              <h2>Professional Experience</h2>
              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>On-the-job Training (OJT) Developer</h3>
                  <span class="cv-date">June 2025 – August 2025</span>
                </div>
                <p class="cv-subheader">INFOSOFT, Matina, Davao City</p>
                <ul>
                  <li>Gained industry experience in full-stack web development, participating in database schema design and writing clean backend APIs.</li>
                  <li>Debugged and styled client-facing interfaces, ensuring responsive layouts and proper interaction flows.</li>
                </ul>
              </div>
            </section>

            <section class="cv-section-nested">
              <h2>Project Experience</h2>
              
              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>Cheen Tea Kiosk and API</h3>
                  <span class="cv-tech">Next.js, React, Tailwind, Laravel 12, Sanctum, Reverb</span>
                </div>
                <ul>
                  <li>Developed customer ordering, cashier, kitchen display, cashier dashboard, and admin dashboard interfaces.</li>
                  <li>Built real-time order queueing and notifications using Laravel Reverb (WebSockets) and Sanctum authentication.</li>
                  <li>Connected API routes for categories, modifiers, loyalty rewards, image uploads, and dashboard reports.</li>
                </ul>
              </div>

              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>USM Agapay Service Desk</h3>
                  <span class="cv-tech">Laravel, Vue 3, Pinia, Sanctum, Reverb, SQL Server, Docker</span>
                </div>
                <ul>
                  <li>Designed a university service-ticket workflow supporting ticket claims, office transfers, comments, and queues.</li>
                  <li>Built role-aware Vue 3 routing and Sanctum middleware boundaries for clients, staff, and office admins.</li>
                  <li>Containerized the environment using Docker Compose with MS SQL Server, Redis, S3-compatible MinIO, and queue workers.</li>
                </ul>
              </div>

              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>Gym Face Management / RAK Fitness</h3>
                  <span class="cv-tech">Django, FastAPI, React, PostgreSQL, InsightFace, pytest</span>
                </div>
                <ul>
                  <li>Built gym operations workflows managing member registration, billing plans, payments, and attendance reports.</li>
                  <li>Integrated local face recognition check-in using InsightFace buffalo_l embeddings and manual fallback entry.</li>
                  <li>Prepared intelligent-check-in design notes, scanner check-in architecture, and automated verification tests.</li>
                </ul>
              </div>

              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>ClassVision: YOWOv2 Student Activity Detection</h3>
                  <span class="cv-tech">Python, YOWOv2, CVAT, PyTorch, Research Docs</span>
                </div>
                <ul>
                  <li>Developed a classroom video analytics framework for activity detection (studying, collaborative, idle, arriving/leaving).</li>
                  <li>Curated and validated CCTV-derived datasets consisting of 108,116 label files, 1.95M annotated bounding boxes.</li>
                  <li>Established privacy-by-design boundaries by strictly omitting facial recognition and student profiling.</li>
                </ul>
              </div>

              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>USMctf Platform</h3>
                  <span class="cv-tech">Next.js, Laravel, FastAPI, PostgreSQL, Redis, Docker Compose</span>
                </div>
                <ul>
                  <li>Created a full-stack CTF learning platform featuring team management, user profiles, and real-time challenge scoring.</li>
                  <li>Orchestrated a decoupled multi-service architecture using Docker Compose, leveraging Redis and PostgreSQL.</li>
                </ul>
              </div>

              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>University Pentest and Research Workspace</h3>
                  <span class="cv-tech">OWASP, Burp Suite, Ghidra, ATT&CK, CISA KEV</span>
                </div>
                <ul>
                  <li>Organized an authorized, non-destructive pentesting workspace using Burp Suite and Ghidra for campus systems.</li>
                  <li>Documented threat scenarios, proof-of-concept (PoC) safety guardrails, and prepared remediation handoffs.</li>
                </ul>
              </div>
            </section>
          </div>

          <div class="cv-side-col">
            <section class="cv-section-nested">
              <h2>Education</h2>
              <div class="cv-item-nested">
                <h3>BS in Computer Science</h3>
                <p class="cv-institution">University of Southern Mindanao</p>
                <p class="cv-date-side">2022 – Present</p>
                <p class="cv-thesis"><strong>Thesis:</strong> YOWOv2-Based Student Activity Detection Framework</p>
              </div>
            </section>

            <section class="cv-section-nested">
              <h2>Technical Skills</h2>
              <div class="cv-skills-block">
                <p><strong>Languages:</strong> TypeScript, JavaScript, Python, PHP, C#</p>
                <p><strong>Frameworks:</strong> React, Next.js, Vue 3, FastAPI, Laravel 12, Django, ASP.NET Core</p>
                <p><strong>Databases/DevOps:</strong> PostgreSQL, SQL Server, SQLite, Redis, Docker Compose, Alembic, MinIO/S3</p>
                <p><strong>Security:</strong> JWT, CSRF, bcrypt, AES-GCM, RBAC, Burp Suite, Ghidra, OWASP</p>
                <p><strong>AI & CV:</strong> YOWOv2, InsightFace, PyTorch, CVAT</p>
              </div>
            </section>

            <section class="cv-section-nested">
              <h2>Leadership</h2>
              <div class="cv-item-nested">
                <h3>Socio-Cultural Chairperson</h3>
                <p class="cv-institution">University of Southern Mindanao</p>
                <p class="cv-date-side">2025 – 2026</p>
              </div>
              <div class="cv-item-nested">
                <h3>External Officer</h3>
                <p class="cv-institution">PSITS</p>
                <p class="cv-date-side">2024 – 2025</p>
              </div>
            </section>

            <section class="cv-section-nested">
              <h2>Links</h2>
              <div class="cv-links-block">
                <a href="https://de1m0z.github.io/">Portfolio Website</a>
                <a href="https://github.com/De1m0z">GitHub Profile</a>
                <a href="https://github.com/De1m0z/CTF">USMctf Repo</a>
                <a href="https://github.com/De1m0z/chantea-kiosk">Cheen Tea Repo</a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </body>
  </html>
  ```

- [ ] **Step 4: Run the verification script to verify success**
  Run command: `python3 scratch/verify_html.py`
  Expected Output: `cv.html Verification: PASS`

- [ ] **Step 5: Commit changes**
  Run: `git add cv.html scratch/verify_html.py && git commit -m "feat: update cv.html structure and content for 1-page layout"`

---

### Task 3: Customize Print and Grid Styles in CSS

**Files:**
- Modify: `styles.css`
- Create: `scratch/verify_print_styles.py`

- [ ] **Step 1: Write a verification script for print styling**
  Create `scratch/verify_print_styles.py` to assert the presence of critical class definitions and `@media print` spacing rules.

  ```python
  # scratch/verify_print_styles.py
  import os

  def test_styles():
      path = "styles.css"
      assert os.path.exists(path), f"{path} does not exist"
      with open(path, "r", encoding="utf-8") as f:
          content = f.read()

      # Assert grid definitions exist
      assert ".cv-grid-container" in content, "Grid container styling missing"
      assert ".cv-main-col" in content, "Main column styling missing"
      assert ".cv-side-col" in content, "Sidebar column styling missing"
      assert "@media print" in content, "Print media query missing"

      # Print-specific size reductions
      assert "page" in content, "Print page rules missing"
      assert "0.4in" in content or "0.3in" in content or "margin" in content, "Page margins in print missing"

      print("styles.css Verification: PASS")

  if __name__ == "__main__":
      test_styles()
  ```

- [ ] **Step 2: Run the verification script to verify failure**
  Run command: `python3 scratch/verify_print_styles.py`
  Expected Output: Fail since `.cv-grid-container` and specific grid layout rules are not defined yet in `styles.css`.

- [ ] **Step 3: Modify `styles.css`**
  Modify `styles.css` to add the `.cv-grid-container` grid styling and configure a dense print layout. Add the following CSS rules at the end of `styles.css`:

  ```css
  /* CV Grid and Print Layout additions */
  .cv-grid-container {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 32px;
    margin-top: 24px;
  }

  .cv-main-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cv-side-col {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .cv-section-nested {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cv-section-nested h2 {
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid var(--ink);
    padding-bottom: 4px;
    margin-bottom: 4px;
    color: var(--ink);
  }

  .cv-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
  }

  .cv-item-header h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
  }

  .cv-date, .cv-tech {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
  }

  .cv-subheader {
    margin: 2px 0 6px !important;
    font-size: 12px;
    font-style: italic;
    color: var(--muted);
  }

  .cv-item ul {
    margin: 0;
    padding-left: 16px;
  }

  .cv-item li {
    font-size: 12.5px;
    color: var(--text);
    margin-bottom: 4px;
  }

  .cv-item-nested h3 {
    font-size: 13px;
    font-weight: 700;
    margin: 0 0 2px 0;
  }

  .cv-institution, .cv-date-side, .cv-thesis {
    font-size: 12px;
    margin: 0 0 2px 0 !important;
  }

  .cv-skills-block p {
    font-size: 12px;
    margin: 0 0 8px 0 !important;
    line-height: 1.4;
  }

  .cv-links-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .cv-links-block a {
    font-size: 12px;
    color: var(--blue);
    text-decoration: none;
    font-weight: 600;
  }

  .cv-links-block a:hover {
    text-decoration: underline;
  }

  /* Responsive styling override */
  @media (max-width: 768px) {
    .cv-grid-container {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .cv-side-col {
      order: -1; /* Sidebar goes to the top on mobile */
    }
  }

  /* Dense Single-Page Print rules */
  @media print {
    @page {
      size: A4;
      margin: 0.3in 0.4in;
    }

    body, .cv-page {
      background: #ffffff !important;
      font-size: 11.5px;
      line-height: 1.35;
      color: #000000;
    }

    .cv-document {
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      box-shadow: none !important;
      max-width: 100% !important;
    }

    .cv-top {
      padding-bottom: 12px !important;
      border-bottom: 2px solid #000000 !important;
    }

    .cv-top h1 {
      font-size: 26px !important;
      margin-bottom: 2px !important;
    }

    .cv-top .lead {
      font-size: 13px !important;
      margin: 4px 0 0 0 !important;
    }

    .cv-contact {
      font-size: 11px !important;
      text-align: right !important;
      gap: 2px !important;
    }

    .cv-grid-container {
      grid-template-columns: 1fr 220px !important;
      gap: 20px !important;
      margin-top: 14px !important;
    }

    .cv-main-col {
      gap: 12px !important;
    }

    .cv-side-col {
      gap: 16px !important;
    }

    .cv-section-nested {
      gap: 6px !important;
    }

    .cv-section-nested h2 {
      font-size: 11px !important;
      padding-bottom: 2px !important;
      margin-bottom: 2px !important;
      border-bottom: 1.5px solid #000000 !important;
    }

    .cv-item {
      margin-top: 0 !important;
    }

    .cv-item-header h3 {
      font-size: 11.5px !important;
    }

    .cv-item li {
      font-size: 11px !important;
      margin-bottom: 2px !important;
    }

    .cv-item-nested h3 {
      font-size: 11px !important;
    }

    .cv-institution, .cv-date-side, .cv-thesis, .cv-skills-block p, .cv-links-block a {
      font-size: 10.5px !important;
    }

    .cv-skills-block p {
      margin-bottom: 4px !important;
    }

    .cv-links-block {
      gap: 2px !important;
    }

    /* Hide web links indicator, print only clean text if needed, or show URL in brackets */
    .cv-print-actions, .site-header, .site-footer {
      display: none !important;
    }
  }
  ```

- [ ] **Step 4: Run the verification script to verify success**
  Run command: `python3 scratch/verify_print_styles.py`
  Expected Output: `styles.css Verification: PASS`

- [ ] **Step 5: Commit changes**
  Run: `git add styles.css scratch/verify_print_styles.py && git commit -m "feat: implement cv layout grid and media print stylesheet optimizations"`
