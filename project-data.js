window.portfolioProjects = [
  {
    id: "classvision",
    title: "ClassVision: YOWOv2 Student Activity Detection Framework",
    eyebrow: "Main thesis project",
    image: "assets/classvision-confusion-matrix.png",
    alt: "ClassVision confusion matrix evaluation figure",
    summary: "A privacy-conscious classroom video analytics framework for activity-context monitoring in smart academic environments.",
    status: "April 2026 manuscript and defense materials",
    category: "Machine learning / computer vision",
    stack: ["Python", "YOWOv2", "CVAT", "PyTorch workflow", "Dataset validation", "Video inference"],
    metrics: [
      ["Label files", "108,116"],
      ["Annotated boxes", "1,951,112"],
      ["Train entries", "72,491"],
      ["Validation entries", "20,679"],
      ["Test entries", "14,661"],
      ["Selected checkpoint", "Epoch 19"]
    ],
    work: [
      "Prepared classroom CCTV clips, labels, validation checks, and by-video data partitions.",
      "Fine-tuned a YOWOv2 medium workflow using 16-frame clips and 224 image size.",
      "Documented privacy boundaries by excluding face recognition, identity matching, and student profiling.",
      "Produced thesis figures, contact sheets, demo clips, methodology notes, and presentation materials."
    ],
    previewTitle: "Activity monitoring preview",
    preview: [
      ["Input", "Classroom clips from ICT 1 and ICT 2"],
      ["Classes", "studying, idle, collaborative, arriving/leaving"],
      ["Post-processing", "confidence filtering, IoU review, duplicate suppression"],
      ["Output", "room-level activity summaries, not identity records"]
    ],
    links: [
      ["View demo", "demo.html?id=classvision"],
      ["Case study", "case-studies.html#classvision"],
      ["Portfolio", "index.html#projects"]
    ]
  },
  {
    id: "scheduler",
    title: "Thesis Defense Scheduler",
    eyebrow: "Secure full-stack academic system",
    image: "assets/usm-campus.webp",
    alt: "University campus image used for the scheduler project",
    summary: "A defense scheduling system for students, faculty, Department Research Coordinators, college admins, and global admins.",
    status: "Full-stack workflow project",
    category: "Secure workflow system",
    stack: ["React", "Vite", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "ReportLab"],
    metrics: [
      ["User roles", "5"],
      ["Auth", "JWT cookies"],
      ["Sensitive files", "AES-256-GCM"],
      ["Scheduling", "FCFS slots"],
      ["Audit", "Append-only logs"],
      ["PDF", "Generated forms"]
    ],
    work: [
      "Built role-aware flows for students, faculty, DRC users, college admins, and global admins.",
      "Used refresh rotation, signed CSRF tokens, bcrypt, RBAC filters, and audit logging.",
      "Modeled defense slot booking, faculty availability, panel assignment, signatures, and produced PDFs.",
      "Prepared the system around school workflow boundaries instead of a generic booking form."
    ],
    previewTitle: "Scheduling workflow preview",
    preview: [
      ["Student", "Submits defense request and required details"],
      ["DRC", "Reviews availability and assignment constraints"],
      ["Faculty", "Confirms schedule and panel participation"],
      ["Admin", "Tracks approved schedules and produced records"]
    ],
    links: [["View demo", "demo.html?id=scheduler"], ["Case study", "case-studies.html#systems"], ["Portfolio", "index.html#projects"]]
  },
  {
    id: "gym",
    title: "Gym Face Management / RAK Fitness",
    eyebrow: "Operations and attendance system",
    image: "assets/gym-scanner.png",
    alt: "Gym scanner interface preview",
    summary: "A gym management system with members, plans, payments, attendance logs, reports, and local face-based time-in/time-out.",
    status: "Implemented project and rewrite documentation",
    category: "Operations system",
    stack: ["Django", "FastAPI", "React", "InsightFace", "SQLite/PostgreSQL patterns", "pytest"],
    metrics: [
      ["Core modules", "7"],
      ["Scanner mode", "Local-first"],
      ["Biometric boundary", "Consent required"],
      ["Fallback", "Manual attendance"],
      ["Reports", "Attendance and payments"],
      ["Rewrite", "React/FastAPI notes"]
    ],
    work: [
      "Built member enrollment, plans, payments, attendance, scanner, reporting, dashboard, and member portal flows.",
      "Used local InsightFace buffalo_l embeddings for enrollment and recognition workflow testing.",
      "Handled biometric consent, revocation, scanner health, threshold checks, and manual fallbacks.",
      "Prepared intelligent-system report figures and rewrite documentation."
    ],
    previewTitle: "Attendance flow preview",
    preview: [
      ["Enroll", "Capture member consent and reference embedding"],
      ["Scan", "Run local camera recognition with threshold checks"],
      ["Verify", "Show match confidence and member account state"],
      ["Record", "Save time-in/time-out or fall back to manual entry"]
    ],
    links: [["View demo", "demo.html?id=gym"], ["Case study", "case-studies.html#systems"], ["Portfolio", "index.html#projects"]]
  },
  {
    id: "cheentea",
    title: "Cheen Tea Kiosk and API",
    eyebrow: "Kiosk, POS, and staff operations",
    image: "assets/cheentea-kiosk-ui.jpeg",
    alt: "Cheen Tea kiosk UI reference image",
    summary: "A tea-shop kiosk and POS platform with customer ordering, kitchen queues, cashier views, admin tools, loyalty rewards, QR registration, and voice-order processing.",
    status: "Public repo with GitHub Pages sample-data demo",
    category: "Business app",
    stack: ["Next.js", "React", "Tailwind CSS", "Laravel 12", "Sanctum", "Reverb", "Cloudinary"],
    metrics: [
      ["Customer flows", "Order, cart, rewards"],
      ["Staff flows", "Cashier and kitchen"],
      ["Admin", "Products and reports"],
      ["Auth", "Sanctum"],
      ["Realtime", "Reverb"],
      ["Uploads", "Cloudinary"]
    ],
    work: [
      "Built customer-facing dine-in/take-out ordering, cart, rewards, and QR loyalty registration flows.",
      "Created product, category, modifier, order queue, cashier, kitchen board, customer, and report workflows.",
      "Connected Laravel API routes for order management, dashboard summaries, loyalty, uploads, and voice ordering.",
      "Used actual kiosk UI assets instead of generic product images."
    ],
    previewTitle: "Order workflow preview",
    preview: [
      ["Browse", "Customer chooses drinks, sizes, modifiers, and add-ons"],
      ["Cart", "Order is reviewed for dine-in or take-out"],
      ["Kitchen", "Staff sees queued drinks and order status"],
      ["Admin", "Products, reports, customers, and rewards are maintained"]
    ],
    links: [
      ["View demo", "https://de1m0z.github.io/chantea-kiosk/"],
      ["GitHub repo", "https://github.com/De1m0z/chantea-kiosk"],
      ["Portfolio", "index.html#projects"]
    ]
  },
  {
    id: "usmctf",
    title: "USMctf Platform",
    eyebrow: "Security learning platform",
    image: "assets/classvision-research-process.png",
    alt: "Process figure used as a neutral project visual",
    summary: "A full-stack CTF platform with frontend, auth/user management, challenge service, scoring, Docker Compose, PostgreSQL, Redis, and admin tooling.",
    status: "Public GitHub repo synced on main",
    category: "Full-stack security platform",
    stack: ["Next.js", "Laravel", "FastAPI", "PostgreSQL", "Redis", "Docker Compose"],
    metrics: [
      ["Repo", "Public"],
      ["Branch", "main"],
      ["Frontend", "Next.js"],
      ["Auth", "Laravel"],
      ["Challenges", "FastAPI"],
      ["Services", "Docker Compose"]
    ],
    work: [
      "Built a multi-service CTF project structure with frontend, backend services, database, cache, and containers.",
      "Documented setup commands, environment variables, migrations, seeders, service URLs, and development notes.",
      "Kept the GitHub repository up to date; local main and origin/main are currently even.",
      "Focused the public repository on platform code, setup notes, and service configuration."
    ],
    previewTitle: "Platform architecture preview",
    preview: [
      ["Frontend", "Next.js player/admin interface"],
      ["Auth", "Laravel user and team workflows"],
      ["Challenge API", "FastAPI service for challenge behavior"],
      ["Runtime", "PostgreSQL, Redis, and Docker Compose"]
    ],
    links: [["View demo", "demo.html?id=usmctf"], ["GitHub repo", "https://github.com/De1m0z/CTF"], ["Portfolio", "index.html#projects"]]
  },
  {
    id: "pentest",
    title: "University Pentest and Vulnerability Research Workspace",
    eyebrow: "Authorized testing workspace",
    image: "assets/usm-campus.webp",
    alt: "University campus image used for the security workspace project",
    summary: "A structured workspace for approved security research with scope, methodology, Burp projects, Ghidra tools, findings, PoC safety notes, reporting, and remediation handoff.",
    status: "Documentation and workflow workspace",
    category: "Security documentation",
    stack: ["OWASP", "Burp Suite", "Ghidra", "PoC notes", "Reporting", "Remediation tracking"],
    metrics: [
      ["Scope", "Written first"],
      ["Testing", "Non-destructive"],
      ["Tools", "Burp and Ghidra"],
      ["Output", "Findings reports"],
      ["Safety", "PoC guardrails"],
      ["Handoff", "Remediation notes"]
    ],
    work: [
      "Organized scope, methodology, tool outputs, findings, threat intelligence, PoC notes, reports, and remediation areas.",
      "Framed security work around written authorization and approved targets.",
      "Separated research materials so findings can be reproduced and handed off cleanly.",
      "Used a non-destructive testing mindset suitable for university systems."
    ],
    previewTitle: "Research workflow preview",
    preview: [
      ["Scope", "Confirm written authorization and allowed targets"],
      ["Test", "Run approved web, API, or binary checks"],
      ["Document", "Record finding, impact, reproduction, and limits"],
      ["Handoff", "Prepare remediation guidance and retest notes"]
    ],
    links: [["View demo", "demo.html?id=pentest"], ["Case study", "case-studies.html#systems"], ["Portfolio", "index.html#projects"]]
  },
  {
    id: "optimization",
    title: "Optimization Algorithms Assignment",
    eyebrow: "Academic Python algorithms",
    image: "assets/classvision-research-process.png",
    alt: "Process figure used as an academic project visual",
    summary: "Python examples and explanations for Genetic Algorithms, Markov Decision Processes, and Particle Swarm Optimization using the standard library.",
    status: "Public GitHub repo",
    category: "Algorithms",
    stack: ["Python", "Genetic Algorithms", "Markov Decision Processes", "Particle Swarm Optimization", "Standard library"],
    metrics: [
      ["Language", "Python"],
      ["GA examples", "String and knapsack"],
      ["MDP examples", "Gridworld and inventory"],
      ["PSO", "Function optimization"],
      ["Dependencies", "Standard library"],
      ["Repo", "Public"]
    ],
    work: [
      "Implemented examples for string evolution, knapsack optimization, gridworld value iteration, inventory decisions, and PSO functions.",
      "Kept the scripts easy to run for classroom review and explanation.",
      "Wrote academic descriptions that connect the code to the algorithm behavior.",
      "Published the assignment repository on GitHub."
    ],
    previewTitle: "Algorithm set preview",
    preview: [
      ["GA", "Evolve candidate solutions through selection and mutation"],
      ["MDP", "Evaluate states and policies over repeated decisions"],
      ["PSO", "Move particles through a search space toward better scores"],
      ["Output", "Readable console examples for study and review"]
    ],
    links: [["View demo", "demo.html?id=optimization"], ["GitHub repo", "https://github.com/De1m0z/ai_optimization_algorithms_assignment"], ["Portfolio", "index.html#projects"]]
  },
  {
    id: "rest-api",
    title: "Student REST API",
    eyebrow: "ASP.NET Core API lab",
    image: "assets/classvision-research-process.png",
    alt: "Process figure used as an API project visual",
    summary: "An ASP.NET Core 7 REST API lab using controllers, DTOs, EF Core migrations, SQLite persistence, Swagger/OpenAPI, and a student data model.",
    status: "Public GitHub repo",
    category: "API fundamentals",
    stack: ["C#", "ASP.NET Core 7", "EF Core", "SQLite", "Swagger", "OpenAPI"],
    metrics: [
      ["Framework", "ASP.NET Core 7"],
      ["Database", "SQLite"],
      ["ORM", "EF Core"],
      ["Docs", "Swagger/OpenAPI"],
      ["Pattern", "DTOs and controllers"],
      ["Repo", "Public"]
    ],
    work: [
      "Practiced REST API structure using controllers, DTOs, persistence, and documented endpoints.",
      "Used EF Core design-time tools and migrations for the student data model.",
      "Kept the project small and focused on API fundamentals.",
      "Published the API lab repository on GitHub."
    ],
    previewTitle: "API workflow preview",
    preview: [
      ["Model", "Student data entity and persistence"],
      ["Controller", "REST endpoints for records"],
      ["DTO", "Request and response boundaries"],
      ["Docs", "Swagger/OpenAPI for endpoint review"]
    ],
    links: [["View demo", "demo.html?id=rest-api"], ["GitHub repo", "https://github.com/De1m0z/REST"], ["Portfolio", "index.html#projects"]]
  }
];
