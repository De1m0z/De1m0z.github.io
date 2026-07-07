window.portfolioProjects = [
  {
    id: "classvision",
    title: "ClassVision: YOWOv2 Student Activity Detection Framework",
    eyebrow: "Main thesis project",
    image: "assets/classvision-logo.png",
    alt: "ClassVision project logo",
    summary: "A privacy-conscious classroom video analytics framework for activity-context monitoring in smart academic environments.",
    overview: "ClassVision detects visible classroom activity context from CCTV-derived clips and reports room-level activity summaries. It avoids identity matching, face recognition, biometric profiling, and disciplinary automation.",
    problem: "Room occupancy alone cannot show whether a class is studying, collaborating, waiting, arriving, or leaving. The project focuses on visible activity context instead of identifying individual people.",
    status: "April 2026 manuscript and defense materials",
    category: "Machine learning / computer vision",
    lastUpdated: "July 2026",
    stack: ["Python", "YOWOv2", "CVAT", "PyTorch", "Dataset validation", "Video inference"],
    metrics: [
      ["Label files", "108,116"],
      ["Annotated boxes", "1,951,112"],
      ["Train entries", "72,491"],
      ["Validation entries", "20,679"],
      ["Test entries", "14,661"],
      ["Selected checkpoint", "Epoch 19"]
    ],
    responsibilities: [
      "Prepared classroom CCTV clips, class definitions, annotation rules, and label validation checks.",
      "Built by-video data partitions to reduce leakage from near-duplicate CCTV frames.",
      "Documented YOWOv2 training notes, checkpoint selection, inference review, and post-processing limits.",
      "Produced thesis figures, contact sheets, recorded inference outputs, methodology notes, and defense materials."
    ],
    features: [
      "Four visible activity labels: studying, idle, collaborative, and arriving/leaving.",
      "Privacy boundary that excludes face recognition, identity matching, and student profiling.",
      "Room-level activity summaries rather than personal identity records.",
      "Dataset evidence that can be checked during a thesis or technical interview."
    ],
    talkingPoints: [
      "How by-video splitting reduces leakage compared with random frame splitting.",
      "Why privacy boundaries matter in classroom computer vision.",
      "Where mAP, confidence filtering, and IoU review helped shape the final evaluation.",
      "How the thesis separates research output from disciplinary monitoring."
    ],
    previewTitle: "Activity monitoring process",
    preview: [
      ["Input", "Classroom clips from ICT 1 and ICT 2"],
      ["Classes", "studying, idle, collaborative, arriving/leaving"],
      ["Review", "confidence filtering, IoU checks, duplicate suppression"],
      ["Output", "room-level activity summaries, not identity records"]
    ],
    links: [
      ["Case study", "case-studies.html#classvision"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "usmctf",
    title: "USMctf Platform",
    eyebrow: "Featured full-stack security platform",
    image: "assets/usm-logo.png",
    alt: "USMctf platform project logo",
    summary: "A full-stack CTF platform with a Next.js frontend, Laravel authentication and user management, FastAPI challenge service, scoring flow, Docker Compose, PostgreSQL, Redis, and admin tooling.",
    overview: "USMctf is a multi-service capture-the-flag platform for security learning. The project separates the player/admin interface, authentication and user management, challenge behavior, database storage, cache/scoring state, and local service orchestration.",
    problem: "CTF events need account management, teams, challenge delivery, scoring, and admin control in one deployable stack. A single codebase also needs enough setup notes for another developer to run it locally.",
    status: "Public GitHub repository",
    category: "Full-stack security platform",
    lastUpdated: "July 2026",
    stack: ["Next.js", "Laravel", "FastAPI", "PostgreSQL", "Redis", "Docker Compose"],
    metrics: [
      ["Frontend", "Next.js"],
      ["Auth/users", "Laravel"],
      ["Challenges", "FastAPI"],
      ["Database", "PostgreSQL"],
      ["Cache/scoring", "Redis"],
      ["Runtime", "Docker Compose"]
    ],
    responsibilities: [
      "Built the multi-service project structure across frontend, authentication, challenge service, database, cache, and containers.",
      "Documented setup commands, environment variables, migrations, seeders, service URLs, and development notes.",
      "Kept public repository content focused on platform code, service configuration, and reproducible setup.",
      "Structured the project so platform boundaries can be explained by service responsibility."
    ],
    features: [
      "Next.js interface for player and admin-facing screens.",
      "Laravel service for authentication, users, and platform management concerns.",
      "FastAPI service for challenge behavior and API separation.",
      "PostgreSQL and Redis backing services coordinated through Docker Compose.",
      "Admin tooling and setup notes for local development."
    ],
    talkingPoints: [
      "Why auth, challenge behavior, and scoring state are separated.",
      "How Docker Compose supports local onboarding for a multi-service project.",
      "Where Redis fits into scoring or state-heavy interactions.",
      "What should be validated before turning a project repository into an event platform."
    ],
    previewTitle: "Platform architecture",
    preview: [
      ["Frontend", "Next.js player and admin interface"],
      ["Auth", "Laravel user and team management"],
      ["Challenge API", "FastAPI service for challenge behavior"],
      ["Runtime", "PostgreSQL, Redis, and Docker Compose"]
    ],
    links: [
      ["GitHub repo", "https://github.com/De1m0z/CTF"],
      ["Case study", "case-studies.html#usmctf"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "scheduler",
    title: "Thesis Defense Scheduler",
    eyebrow: "Secure full-stack academic system",
    image: "assets/usm-logo.png",
    alt: "USM thesis defense scheduler project logo",
    summary: "A defense scheduling system for students, faculty, Department Research Coordinators, college admins, and global admins.",
    overview: "The scheduler models academic defense requests from submission to approval, panel assignment, faculty confirmation, signature handling, and generated records.",
    problem: "Defense scheduling involves several user roles, sensitive files, first-come-first-served slot booking, and records that need a traceable approval history.",
    status: "Full-stack system project",
    category: "Secure scheduling system",
    lastUpdated: "July 2026",
    stack: ["React", "Vite", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "ReportLab"],
    metrics: [
      ["User roles", "5"],
      ["Auth", "JWT cookies"],
      ["Sensitive files", "AES-256-GCM"],
      ["Scheduling", "FCFS slots"],
      ["Audit", "Append-only logs"],
      ["PDF", "Generated forms"]
    ],
    responsibilities: [
      "Built role-aware flows for students, faculty, DRC users, college admins, and global admins.",
      "Implemented refresh rotation, signed CSRF tokens, bcrypt, RBAC filters, and audit logging.",
      "Modeled defense slot booking, faculty availability, panel assignment, signatures, and generated PDFs.",
      "Stored sensitive PDF and signature blobs with AES-256-GCM encryption."
    ],
    features: [
      "First-come-first-served defense slot booking with transaction safeguards.",
      "Role-scoped dashboards for academic approval and administration.",
      "PDF generation for defense records and signature-related outputs.",
      "Append-only audit trail for important state changes."
    ],
    talkingPoints: [
      "How serializable transactions reduce double-booking risk.",
      "Why signed CSRF tokens and HTTP-only JWT cookies were used together.",
      "How encrypted blobs and audit logs affect admin troubleshooting.",
      "Where school policy boundaries shape the data model."
    ],
    previewTitle: "Scheduling process",
    preview: [
      ["Student", "Submits defense request and required details"],
      ["DRC", "Reviews availability and assignment constraints"],
      ["Faculty", "Confirms schedule and panel participation"],
      ["Admin", "Tracks approved schedules and produced records"]
    ],
    links: [
      ["Case study", "case-studies.html#scheduler"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "gym",
    title: "Gym Face Management / RAK Fitness",
    eyebrow: "Operations and attendance system",
    image: "assets/gym-logo.png",
    alt: "RAK Fitness project logo",
    summary: "A gym management system with members, plans, payments, attendance logs, reports, and local face-based time-in/time-out.",
    overview: "The gym system combines operations screens with a local face-attendance scanner. It keeps consent, revocation, thresholds, and manual fallback visible in the design.",
    problem: "Gym staff need faster attendance logging, but biometric features must still respect member consent and support manual entry when recognition fails.",
    status: "Implemented project and rewrite documentation",
    category: "Operations system",
    lastUpdated: "July 2026",
    stack: ["Django", "FastAPI", "React", "InsightFace", "SQLite/PostgreSQL patterns", "pytest"],
    metrics: [
      ["Core modules", "7"],
      ["Scanner mode", "Local-first"],
      ["Biometric boundary", "Consent required"],
      ["Fallback", "Manual attendance"],
      ["Reports", "Attendance and payments"],
      ["Rewrite", "React/FastAPI notes"]
    ],
    responsibilities: [
      "Built member enrollment, plans, payments, attendance, scanner, reporting, dashboard, and member portal flows.",
      "Used local InsightFace buffalo_l embeddings for enrollment and recognition testing.",
      "Handled biometric consent, revocation, scanner health, threshold checks, and manual fallbacks.",
      "Prepared intelligent-system report figures and React/FastAPI rewrite documentation."
    ],
    features: [
      "Member account and plan management.",
      "Payment and attendance reporting.",
      "Local camera scanner with confidence and account-state checks.",
      "Manual attendance fallback for consent or scanner edge cases."
    ],
    talkingPoints: [
      "How consent status changes the scanner path.",
      "Why local-first recognition is easier to reason about for privacy.",
      "How threshold checks and manual fallback reduce operational risk.",
      "What changed between the Django version and React/FastAPI rewrite notes."
    ],
    previewTitle: "Attendance process",
    preview: [
      ["Enroll", "Capture member consent and reference embedding"],
      ["Scan", "Run local camera recognition with threshold checks"],
      ["Verify", "Show match confidence and member account state"],
      ["Record", "Save time-in/time-out or use manual entry"]
    ],
    links: [
      ["Case study", "case-studies.html#gym"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "cheentea",
    title: "Cheen Tea Kiosk and API",
    eyebrow: "Kiosk, POS, and staff operations",
    image: "assets/chantea-logo.png",
    alt: "Cheen Tea kiosk project logo",
    summary: "A tea-shop kiosk and POS platform with customer ordering, kitchen queues, cashier views, admin tools, loyalty rewards, QR registration, and voice-order processing.",
    overview: "Cheen Tea connects customer ordering, cashier views, kitchen status, product administration, loyalty, and reporting in a Laravel and Next.js project.",
    problem: "A small shop needs a single system that can handle menu changes, customer orders, staff queues, kitchen state, rewards, and reports without splitting the operation across manual tools.",
    status: "Public repository and documented project",
    category: "Business app",
    lastUpdated: "July 2026",
    stack: ["Next.js", "React", "Tailwind CSS", "Laravel 12", "Sanctum", "Reverb", "Cloudinary"],
    metrics: [
      ["Customer", "Order, cart, rewards"],
      ["Staff", "Cashier and kitchen"],
      ["Admin", "Products and reports"],
      ["Auth", "Sanctum"],
      ["Realtime", "Reverb"],
      ["Uploads", "Cloudinary"]
    ],
    responsibilities: [
      "Built customer-facing dine-in and take-out ordering, cart, rewards, and QR loyalty registration.",
      "Created product, category, modifier, order queue, cashier, kitchen board, customer, and report screens.",
      "Connected Laravel API routes for order management, dashboard summaries, loyalty, uploads, and voice ordering.",
      "Used actual kiosk UI assets instead of placeholder product imagery."
    ],
    features: [
      "Customer ordering flow with drink options, cart review, and order mode.",
      "Cashier and kitchen screens for order handling.",
      "Admin product, category, modifier, customer, reward, and report screens.",
      "Sanctum authentication, Reverb events, and Cloudinary-backed uploads."
    ],
    talkingPoints: [
      "How cashier and kitchen states map to order status.",
      "Where Laravel policies, routes, and seeders support the admin screens.",
      "How realtime updates reduce staff refreshes.",
      "What parts of the UI were designed for repeated staff use."
    ],
    previewTitle: "Order process",
    preview: [
      ["Browse", "Customer chooses drinks, sizes, modifiers, and add-ons"],
      ["Cart", "Order is reviewed for dine-in or take-out"],
      ["Kitchen", "Staff sees queued drinks and order status"],
      ["Admin", "Products, reports, customers, and rewards are maintained"]
    ],
    links: [
      ["GitHub repo", "https://github.com/De1m0z/chantea-kiosk"],
      ["Case study", "case-studies.html#cheentea"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "agapay",
    title: "USM Agapay Service Desk",
    eyebrow: "University service-ticket platform",
    image: "assets/usm-logo.png",
    alt: "USM Agapay service desk project logo",
    summary: "A Laravel and Vue service-desk system for university offices, service requests, staff queues, ticket activity, notifications, evaluations, ARTA metrics, reports, and audit logs.",
    overview: "USM Agapay models university service requests from client submission through office assignment, staff handling, comments, transfers, evaluations, reports, and administrative review.",
    problem: "Service offices need a shared ticket process with staff accountability, attachments, notifications, queue visibility, ARTA metrics, and audit history.",
    status: "Local project with sanitized portfolio description",
    category: "Full-stack service desk",
    lastUpdated: "July 2026",
    stack: ["Laravel", "Vue 3", "Pinia", "Sanctum", "Reverb", "SQL Server", "MinIO/S3 storage", "Docker"],
    metrics: [
      ["User roles", "Client, staff, office admin, system admin"],
      ["Core flow", "Tickets and service queues"],
      ["Realtime", "Ticket and notification events"],
      ["Storage", "MinIO-compatible attachments"],
      ["Reports", "Tickets, ARTA, offices, evaluations"],
      ["Audit", "Admin review logs"]
    ],
    responsibilities: [
      "Modeled office services, ticket submission, staff assignment, comments, attachments, transfers, claims, and status changes.",
      "Built role-aware Vue routes for clients, service staff, office admins, and system admins.",
      "Connected Laravel Sanctum authentication, account-status checks, role middleware, API resources, and security headers.",
      "Prepared Docker-based local setup around SQL Server, MinIO-compatible uploads, queue jobs, and Reverb-style realtime events."
    ],
    features: [
      "Ticket intake with office, service type, priority, comments, and attachment context.",
      "Staff queues for claiming, updating, transferring, and closing service requests.",
      "Office admin reporting for queue health, ARTA metrics, workload, and evaluations.",
      "System admin management for users, offices, services, audit logs, and restrictions."
    ],
    talkingPoints: [
      "How role middleware and Vue route guards divide responsibilities.",
      "Why attachments, status history, and comments need clear ownership.",
      "How service metrics support office-level review.",
      "How a sanitized portfolio description can explain the system without exposing private data."
    ],
    previewTitle: "Service request process",
    preview: [
      ["Client", "Submits a service request with office, service type, priority, and attachment note"],
      ["Staff", "Claims the ticket, updates status, comments, and handles the request"],
      ["Office admin", "Tracks queue health, staff workload, ARTA metrics, and service performance"],
      ["System admin", "Manages users, offices, services, audit logs, and restrictions"]
    ],
    links: [
      ["Case study", "case-studies.html#agapay"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "pentest",
    title: "University Pentest and Vulnerability Research Workspace",
    eyebrow: "Authorized testing workspace",
    image: "assets/usm-logo.png",
    alt: "University security research workspace project logo",
    summary: "A structured workspace for approved security research with scope, methodology, Burp projects, Ghidra tools, findings, PoC safety notes, reporting, and remediation handoff.",
    overview: "The workspace organizes authorized security research into scope, methodology, evidence, tool outputs, safe proof-of-concept notes, findings, reports, and retest guidance.",
    problem: "Security research can become hard to review if scope, evidence, and remediation notes are scattered. This project keeps testing non-destructive and written around approved targets.",
    status: "Documentation and security research workspace",
    category: "Security documentation",
    lastUpdated: "July 2026",
    stack: ["OWASP", "Burp Suite", "Ghidra", "PoC notes", "Reporting", "Remediation tracking"],
    metrics: [
      ["Scope", "Written first"],
      ["Testing", "Non-destructive"],
      ["Tools", "Burp and Ghidra"],
      ["Output", "Findings reports"],
      ["Safety", "PoC guardrails"],
      ["Handoff", "Remediation notes"]
    ],
    responsibilities: [
      "Organized scope, methodology, tool outputs, findings, threat intelligence, PoC notes, reports, and remediation areas.",
      "Framed security work around written authorization and approved targets.",
      "Separated research materials so findings can be reproduced and handed off clearly.",
      "Kept testing non-destructive and suitable for university systems."
    ],
    features: [
      "Scope-first folder and note structure.",
      "Finding templates for impact, reproduction, limits, and remediation.",
      "Separate areas for Burp projects, Ghidra notes, and threat intelligence.",
      "PoC safety notes and retest handoff material."
    ],
    talkingPoints: [
      "How authorization changes the way security work is documented.",
      "How to record evidence without turning a PoC into an unsafe artifact.",
      "Where OWASP-style findings fit into a handoff report.",
      "How retesting notes help close remediation loops."
    ],
    previewTitle: "Research process",
    preview: [
      ["Scope", "Confirm written authorization and allowed targets"],
      ["Test", "Run approved web, API, or binary checks"],
      ["Document", "Record finding, impact, reproduction, and limits"],
      ["Handoff", "Prepare remediation guidance and retest notes"]
    ],
    links: [
      ["Case study", "case-studies.html#pentest"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "optimization",
    title: "Optimization Algorithms Assignment",
    eyebrow: "Academic Python algorithms",
    image: "assets/usm-logo.png",
    alt: "Optimization algorithms assignment project logo",
    summary: "Python examples and explanations for Genetic Algorithms, Markov Decision Processes, and Particle Swarm Optimization using the standard library.",
    overview: "This assignment keeps optimization examples small enough to run and explain during class review while still showing core behavior for each algorithm family.",
    problem: "Algorithm assignments are easier to defend when examples are readable, runnable, and tied to specific decision or search behavior.",
    status: "Public GitHub repository",
    category: "Algorithms",
    lastUpdated: "July 2026",
    stack: ["Python", "Genetic Algorithms", "Markov Decision Processes", "Particle Swarm Optimization", "Standard library"],
    metrics: [
      ["Language", "Python"],
      ["GA examples", "String and knapsack"],
      ["MDP examples", "Gridworld and inventory"],
      ["PSO", "Function optimization"],
      ["Dependencies", "Standard library"],
      ["Repo", "Public"]
    ],
    responsibilities: [
      "Implemented examples for string evolution, knapsack optimization, gridworld value iteration, inventory decisions, and PSO functions.",
      "Kept the scripts easy to run for classroom review and explanation.",
      "Wrote academic descriptions that connect the code to algorithm behavior.",
      "Published the assignment repository on GitHub."
    ],
    features: [
      "Genetic Algorithm examples for candidate evolution.",
      "Markov Decision Process examples for repeated decision evaluation.",
      "Particle Swarm Optimization examples for search-space movement.",
      "Standard-library scripts that do not require extra setup."
    ],
    talkingPoints: [
      "How representation affects GA behavior.",
      "How states, policies, and values map to MDP examples.",
      "How PSO particles move toward better scores.",
      "Why small scripts can make algorithm review easier."
    ],
    previewTitle: "Algorithm set",
    preview: [
      ["GA", "Evolve candidate solutions through selection and mutation"],
      ["MDP", "Evaluate states and policies over repeated decisions"],
      ["PSO", "Move particles through a search space toward better scores"],
      ["Output", "Readable console examples for study and review"]
    ],
    links: [
      ["GitHub repo", "https://github.com/De1m0z/ai_optimization_algorithms_assignment"],
      ["Back to projects", "index.html#projects"]
    ]
  },
  {
    id: "rest-api",
    title: "Student REST API",
    eyebrow: "ASP.NET Core API lab",
    image: "assets/usm-logo.png",
    alt: "Student REST API project logo",
    summary: "An ASP.NET Core 7 REST API lab using controllers, DTOs, EF Core migrations, SQLite persistence, Swagger/OpenAPI, and a student data model.",
    overview: "The API lab demonstrates basic REST structure with a small student record model, persistence, DTOs, and generated endpoint documentation.",
    problem: "API fundamentals need clear model boundaries, request/response DTOs, persistence setup, and a way to inspect endpoints without reading every controller.",
    status: "Public GitHub repository",
    category: "API fundamentals",
    lastUpdated: "July 2026",
    stack: ["C#", "ASP.NET Core 7", "EF Core", "SQLite", "Swagger", "OpenAPI"],
    metrics: [
      ["Framework", "ASP.NET Core 7"],
      ["Database", "SQLite"],
      ["ORM", "EF Core"],
      ["Docs", "Swagger/OpenAPI"],
      ["Pattern", "DTOs and controllers"],
      ["Repo", "Public"]
    ],
    responsibilities: [
      "Practiced REST API structure using controllers, DTOs, persistence, and documented endpoints.",
      "Used EF Core design-time tools and migrations for the student data model.",
      "Kept the project small and focused on API fundamentals.",
      "Published the API lab repository on GitHub."
    ],
    features: [
      "Controller-based REST endpoints.",
      "DTO boundary for request and response shapes.",
      "SQLite persistence through EF Core migrations.",
      "Swagger/OpenAPI endpoint review."
    ],
    talkingPoints: [
      "Why DTOs help separate API contracts from persistence models.",
      "How EF Core migrations support repeatable setup.",
      "How Swagger helps inspect and test API behavior.",
      "What changes would be needed for auth, validation, and production deployment."
    ],
    previewTitle: "API process",
    preview: [
      ["Model", "Student data entity and persistence"],
      ["Controller", "REST endpoints for records"],
      ["DTO", "Request and response boundaries"],
      ["Docs", "Swagger/OpenAPI for endpoint review"]
    ],
    links: [
      ["GitHub repo", "https://github.com/De1m0z/REST"],
      ["Back to projects", "index.html#projects"]
    ]
  }
];
