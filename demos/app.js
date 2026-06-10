const appId = window.PROJECT_APP_ID || "classvision";
const root = document.querySelector("#demo-app-root");

const state = {
  classvision: { room: "ICT 1" },
  scheduler: { selectedSlot: 0, student: "Russel Jhon C. Buisan", title: "YOWOv2-Based Student Activity Detection Framework" },
  gym: { scanIndex: 0, logs: [] },
  agapay: { nextId: 105 },
  usmctf: { solved: new Set(), selected: "welcome" },
  pentest: { filter: "All" },
  optimization: { algorithm: "Genetic Algorithm" },
  restApi: { nextId: 4 }
};

const data = {
  classvision: {
    title: "ClassVision Monitor",
    subtitle: "Student activity detection dashboard",
    nav: ["Live Review", "Rooms", "Detections", "Reports"],
    rooms: {
      "ICT 1": [
        ["00:00:06", "studying", 18, "0.71"],
        ["00:00:10", "collaborative", 5, "0.64"],
        ["00:00:14", "idle", 3, "0.58"],
        ["00:00:22", "arriving/leaving", 2, "0.62"]
      ],
      "ICT 2": [
        ["00:00:05", "studying", 14, "0.68"],
        ["00:00:09", "collaborative", 8, "0.61"],
        ["00:00:17", "idle", 4, "0.55"],
        ["00:00:25", "arriving/leaving", 1, "0.59"]
      ],
      "Computer Lab": [
        ["00:00:04", "studying", 21, "0.74"],
        ["00:00:11", "collaborative", 3, "0.57"],
        ["00:00:19", "idle", 2, "0.53"],
        ["00:00:28", "arriving/leaving", 0, "0.00"]
      ]
    }
  },
  scheduler: {
    title: "Defense Scheduler",
    subtitle: "Academic defense booking and panel management",
    nav: ["Dashboard", "Requests", "Calendar", "Panels"],
    slots: [
      ["June 17, 2026", "9:00 AM", "ICT Conference Room", "Available"],
      ["June 17, 2026", "1:30 PM", "CS Laboratory", "Available"],
      ["June 18, 2026", "10:00 AM", "Dean's Office", "Reserved"],
      ["June 18, 2026", "2:00 PM", "ICT Conference Room", "Available"],
      ["June 19, 2026", "8:30 AM", "CS Laboratory", "Available"]
    ],
    requests: [
      ["DF-2041", "Russel Jhon C. Buisan", "BSCS", "Pending schedule"],
      ["DF-2040", "Maria Santos", "BSIT", "Panel assigned"],
      ["DF-2039", "John Carlo Reyes", "BSCS", "Approved"]
    ],
    panel: ["Dr. Garcia", "Prof. Dela Cruz", "Prof. Manalo"]
  },
  gym: {
    title: "RAK Fitness Console",
    subtitle: "Member management, payments, and attendance scanner",
    nav: ["Scanner", "Members", "Payments", "Reports"],
    members: [
      ["M-1024", "Ariane Lopez", "Active", "Monthly", "Paid"],
      ["M-1042", "Ken Bautista", "Active", "Annual", "Paid"],
      ["M-1088", "Lara Gomez", "Needs payment", "Monthly", "Due"],
      ["M-1107", "Paolo Menor", "Active", "Walk-in", "Paid"]
    ]
  },
  agapay: {
    title: "USM Agapay",
    subtitle: "University service desk and staff queue",
    nav: ["Dashboard", "Tickets", "Queue", "Reports", "Admin"],
    tickets: [
      ["AGP-104", "Jessa M.", "Registrar", "Transcript request", "Normal", "Open", "2 days"],
      ["AGP-103", "Karl R.", "ICT Office", "Student portal access", "High", "In progress", "6 hours"],
      ["AGP-102", "Nica P.", "Accounting", "Payment validation", "Normal", "Resolved", "Met"],
      ["AGP-101", "Miguel T.", "Student Affairs", "Scholarship inquiry", "Low", "Open", "3 days"]
    ],
    offices: ["Registrar", "Student Affairs", "Accounting", "ICT Office"],
    services: ["Transcript request", "ID replacement", "Enrollment concern", "Scholarship inquiry"]
  },
  usmctf: {
    title: "USMctf",
    subtitle: "Capture-the-flag player portal",
    nav: ["Challenges", "Scoreboard", "Team", "Submissions"],
    challenges: [
      ["welcome", "Welcome Flag", "Warm-up", 50, "usm{welcome}", "Read the rules and submit the sample flag."],
      ["web-101", "Cookie Check", "Web", 120, "usm{cookie}", "Inspect a sample cookie and recover the value."],
      ["crypto-01", "Shifted Text", "Crypto", 150, "usm{shift}", "Decode a Caesar-shifted classroom note."],
      ["forensics-01", "Hidden Note", "Forensics", 180, "usm{metadata}", "Review sample metadata from a file export."]
    ],
    teams: [
      ["Byte Knights", 500],
      ["Kernel Panic", 350],
      ["Sample Team", 0],
      ["USM Root", 120]
    ]
  },
  pentest: {
    title: "Security Research Workspace",
    subtitle: "Authorized finding tracker and remediation board",
    nav: ["Findings", "Scope", "Evidence", "Remediation"],
    findings: [
      ["PT-018", "Student portal", "Medium", "Missing login rate limit", "Open"],
      ["PT-017", "Public API", "Low", "Verbose error message", "Review"],
      ["PT-016", "File upload", "High", "Weak extension validation", "Open"],
      ["PT-015", "Admin login", "Critical", "Sample access-control issue", "Retest"]
    ]
  },
  optimization: {
    title: "Optimization Lab",
    subtitle: "GA, MDP, and PSO algorithm run viewer",
    nav: ["Runs", "Datasets", "Charts", "Console"],
    algorithms: {
      "Genetic Algorithm": [12, 19, 25, 31, 37, 42],
      "Value Iteration": [0.18, 0.34, 0.49, 0.61, 0.72, 0.81],
      "Particle Swarm Optimization": [88, 64, 41, 29, 18, 11]
    }
  },
  restApi: {
    title: "Student REST API",
    subtitle: "Student records API console",
    nav: ["Console", "Students", "Endpoints", "Schema"],
    students: [
      [1, "Ana Cruz", "BSCS", "3rd Year"],
      [2, "Mark Villanueva", "BSIT", "2nd Year"],
      [3, "Russel Buisan", "BSCS", "4th Year"]
    ],
    endpoints: [
      ["GET", "/api/students", "List student records"],
      ["POST", "/api/students", "Create a student record"],
      ["GET", "/api/students/{id}", "Read a student record"],
      ["PUT", "/api/students/{id}", "Update a student record"],
      ["DELETE", "/api/students/{id}", "Delete a student record"]
    ]
  }
};

const html = (strings, ...values) => strings.reduce((out, item, index) => out + item + (values[index] ?? ""), "");
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
const statusClass = (value) => `status-${String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
const pill = (value) => `<span class="status-pill ${statusClass(value)}">${escapeHtml(value)}</span>`;
const button = (label, action, extra = "") => `<button class="app-button ${extra}" type="button" data-action="${action}">${label}</button>`;

function metric(label, value, note = "") {
  return html`<article class="app-card metric"><span>${label}</span><strong>${value}</strong>${note ? `<small>${note}</small>` : ""}</article>`;
}

function table(headers, rows) {
  return html`<div class="app-table-wrap"><table class="app-table"><thead><tr>${headers.map((item) => `<th>${item}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function shell(app, content) {
  return html`
    <div class="app-shell">
      <aside class="app-sidebar">
        <div class="app-brand">
          <span>Sample Data Frontend</span>
          <strong>${app.title}</strong>
        </div>
        <nav class="app-nav">${app.nav.map((item, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}</nav>
        <div class="app-sidebar-footer">
          <a href="../">All live frontends</a>
          <a href="../../index.html#projects">Portfolio</a>
        </div>
      </aside>
      <main class="app-main">
        <header class="app-topbar">
          <div>
            <h1>${app.title}</h1>
            <p>${app.subtitle}</p>
          </div>
          <div class="app-badge-row">
            <span class="app-badge">Sample Data</span>
            <span class="app-badge status-open">GitHub Pages</span>
          </div>
        </header>
        <section class="app-content">${content}</section>
      </main>
    </div>
  `;
}

function renderClassVision() {
  const app = data.classvision;
  const room = state.classvision.room;
  const rows = app.rooms[room];
  const total = rows.reduce((sum, row) => sum + row[2], 0);
  const bars = rows.map((row) => {
    const width = total ? Math.max(6, Math.round((row[2] / total) * 100)) : 0;
    return `<div class="bar-row"><span>${row[1]}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><strong>${row[2]}</strong></div>`;
  }).join("");
  const controls = Object.keys(app.rooms).map((item) => `<option value="${item}" ${item === room ? "selected" : ""}>${item}</option>`).join("");
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Selected room", room, "activity-only monitoring")}
      ${metric("Accepted detections", total, "sample review")}
      ${metric("Model", "YOWOv2", "epoch 19 checkpoint")}
      ${metric("Privacy", "No identity", "no face matching")}
      <article class="app-card span-8">
        <div class="app-actions" style="justify-content:space-between;margin-bottom:14px">
          <h2>Live activity review</h2>
          <select class="app-select" style="max-width:220px" data-action="classvision-room">${controls}</select>
        </div>
        <div class="video-panel">
          <span class="video-label">${room} / sample CCTV frame</span>
          <div class="detection-box" style="left:14%;top:35%;width:16%;height:32%"><span>studying 0.71</span></div>
          <div class="detection-box" style="left:43%;top:30%;width:14%;height:30%"><span>collaborative 0.64</span></div>
          <div class="detection-box" style="left:68%;top:42%;width:12%;height:26%"><span>idle 0.58</span></div>
        </div>
      </article>
      <article class="app-card span-4">
        <h2>Activity distribution</h2>
        <div class="bar-list" style="margin-top:16px">${bars}</div>
      </article>
      <article class="app-card span-12">
        <h2>Detection timeline</h2>
        <div style="margin-top:14px">${table(["Timestamp", "Class", "Count", "Confidence"], rows.map((row) => [row[0], row[1], row[2], row[3]]))}</div>
      </article>
    </div>
  `);
}

function renderScheduler() {
  const app = data.scheduler;
  const selected = app.slots[state.scheduler.selectedSlot];
  const slotCards = app.slots.map((slot, index) => `<button class="slot-card ${index === state.scheduler.selectedSlot ? "selected" : ""}" type="button" data-action="scheduler-slot" data-index="${index}" ${slot[3] !== "Available" ? "disabled" : ""}><strong>${slot[0]}</strong><span>${slot[1]}</span><span>${slot[2]}</span>${pill(slot[3])}</button>`).join("");
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Pending requests", "12", "college-wide")}
      ${metric("Available slots", app.slots.filter((slot) => slot[3] === "Available").length, "this week")}
      ${metric("Panel members", app.panel.length, "assigned")}
      ${metric("Generated forms", "18", "sample PDFs")}
      <article class="app-card span-5">
        <h2>Defense request</h2>
        <div class="app-field" style="margin-top:14px"><label>Student</label><input class="app-input" data-action="scheduler-student" value="${escapeHtml(state.scheduler.student)}"></div>
        <div class="app-field" style="margin-top:12px"><label>Research title</label><textarea class="app-textarea" data-action="scheduler-title">${escapeHtml(state.scheduler.title)}</textarea></div>
        <div class="app-actions" style="margin-top:14px">${button("Reserve selected slot", "scheduler-book")}${button("Generate form", "scheduler-form", "secondary")}</div>
      </article>
      <article class="app-card span-7">
        <h2>Calendar slots</h2>
        <div class="calendar-grid" style="margin-top:14px">${slotCards}</div>
      </article>
      <article class="app-card span-12">
        <h2>Schedule record</h2>
        <div style="margin-top:14px">${table(["Student", "Date", "Time", "Room", "Panel", "Status"], [[escapeHtml(state.scheduler.student), selected[0], selected[1], selected[2], app.panel.join(", "), pill("Reserved")], ...app.requests.map((row) => [row[1], "June 2026", "Assigned", "TBA", "For review", pill(row[3])])])}</div>
      </article>
    </div>
  `);
}

function renderGym() {
  const app = data.gym;
  const logs = state.gym.logs;
  const active = app.members.filter((member) => member[2] === "Active").length;
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Active members", active, "sample records")}
      ${metric("Due payments", app.members.filter((member) => member[4] === "Due").length, "needs follow-up")}
      ${metric("Today check-ins", logs.length, "scanner log")}
      ${metric("Fallback", "Manual", "available")}
      <article class="app-card span-5">
        <h2>Face attendance scanner</h2>
        <div class="scanner" style="margin-top:14px"><div class="scanner-ring"><strong>Scanner Ready</strong><small>local sample mode</small></div></div>
        <div class="app-actions" style="margin-top:14px">${button("Scan next member", "gym-scan")}${button("Manual time-in", "gym-manual", "secondary")}</div>
      </article>
      <article class="app-card span-7">
        <h2>Member directory</h2>
        <div style="margin-top:14px">${table(["ID", "Name", "Status", "Plan", "Payment"], app.members.map((member) => [member[0], member[1], pill(member[2]), member[3], pill(member[4])]))}</div>
      </article>
      <article class="app-card span-12">
        <h2>Attendance log</h2>
        <div style="margin-top:14px">${logs.length ? table(["Time", "Member", "Action", "Result"], logs) : `<p>No sample attendance events yet.</p>`}</div>
      </article>
    </div>
  `);
}

function renderAgapay() {
  const app = data.agapay;
  const open = app.tickets.filter((ticket) => ticket[5] === "Open").length;
  const active = app.tickets.filter((ticket) => ticket[5] === "In progress").length;
  const resolved = app.tickets.filter((ticket) => ticket[5] === "Resolved").length;
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Open tickets", open, "service queue")}
      ${metric("In progress", active, "claimed")}
      ${metric("Resolved", resolved, "sample total")}
      ${metric("Offices", app.offices.length, "configured")}
      <article class="app-card span-4">
        <h2>Create ticket</h2>
        <div class="app-field" style="margin-top:14px"><label>Requester</label><input class="app-input" id="agapay-requester" value="Sample Student"></div>
        <div class="app-field" style="margin-top:12px"><label>Office</label><select class="app-select" id="agapay-office">${app.offices.map((item) => `<option>${item}</option>`).join("")}</select></div>
        <div class="app-field" style="margin-top:12px"><label>Service</label><select class="app-select" id="agapay-service">${app.services.map((item) => `<option>${item}</option>`).join("")}</select></div>
        <div class="app-actions" style="margin-top:14px">${button("Create ticket", "agapay-create")}</div>
      </article>
      <article class="app-card span-8">
        <div class="app-actions" style="justify-content:space-between;margin-bottom:14px"><h2>Staff queue</h2><div class="app-actions">${button("Claim next", "agapay-claim", "secondary")}${button("Resolve active", "agapay-resolve", "secondary")}</div></div>
        ${table(["Ticket", "Requester", "Office", "Service", "Priority", "Status", "SLA"], app.tickets.map((ticket) => [ticket[0], ticket[1], ticket[2], ticket[3], pill(ticket[4]), pill(ticket[5]), pill(ticket[6])]))}
      </article>
      <article class="app-card span-12">
        <h2>Office performance</h2>
        <div class="bar-list" style="margin-top:14px">${app.offices.map((office, index) => `<div class="bar-row"><span>${office}</span><div class="bar-track"><div class="bar-fill" style="width:${72 + index * 5}%;background:var(--app-cyan)"></div></div><strong>${72 + index * 5}%</strong></div>`).join("")}</div>
      </article>
    </div>
  `);
}

function renderUsmCtf() {
  const app = data.usmctf;
  const selected = app.challenges.find((challenge) => challenge[0] === state.usmctf.selected) || app.challenges[0];
  const score = app.challenges.filter((challenge) => state.usmctf.solved.has(challenge[0])).reduce((sum, challenge) => sum + challenge[3], 0);
  const challengeCards = app.challenges.map((challenge) => `<button class="challenge-card ${state.usmctf.solved.has(challenge[0]) ? "solved" : ""}" type="button" data-action="ctf-select" data-id="${challenge[0]}"><strong>${challenge[1]}</strong><span>${challenge[2]} / ${challenge[3]} pts</span>${state.usmctf.solved.has(challenge[0]) ? pill("Solved") : pill("Open")}</button>`).join("");
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Team score", score, "Sample Team")}
      ${metric("Solved", `${state.usmctf.solved.size}/${app.challenges.length}`, "challenges")}
      ${metric("Rank", score > 0 ? "#2" : "#3", "sample board")}
      ${metric("Categories", "4", "warm-up to forensics")}
      <article class="app-card span-7">
        <h2>Challenges</h2>
        <div class="challenge-grid" style="margin-top:14px">${challengeCards}</div>
      </article>
      <article class="app-card span-5">
        <h2>${selected[1]}</h2>
        <p>${selected[5]}</p>
        <div class="terminal-box" style="margin-top:14px">category: ${selected[2]}\npoints: ${selected[3]}\nformat: usm{...}</div>
        <div class="app-field" style="margin-top:14px"><label>Flag</label><input class="app-input" id="ctf-flag" placeholder="usm{flag}"></div>
        <div class="app-actions" style="margin-top:14px">${button("Submit flag", "ctf-submit")}${button("Load sample flag", "ctf-load", "secondary")}</div>
        <p id="ctf-result"></p>
      </article>
      <article class="app-card span-12">
        <h2>Scoreboard</h2>
        <div style="margin-top:14px">${table(["Team", "Score"], app.teams.map((team) => [team[0], team[0] === "Sample Team" ? score : team[1]]).sort((a, b) => b[1] - a[1]))}</div>
      </article>
    </div>
  `);
}

function renderPentest() {
  const app = data.pentest;
  const filter = state.pentest.filter;
  const findings = filter === "All" ? app.findings : app.findings.filter((finding) => finding[2] === filter);
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Findings", app.findings.length, "sample workspace")}
      ${metric("High+", app.findings.filter((finding) => ["High", "Critical"].includes(finding[2])).length, "priority")}
      ${metric("Scope", "Written", "before testing")}
      ${metric("Status", "Safe PoC", "non-destructive")}
      <article class="app-card span-4">
        <h2>Add finding</h2>
        <div class="app-field" style="margin-top:14px"><label>Target</label><input class="app-input" id="pentest-target" value="Student portal"></div>
        <div class="app-field" style="margin-top:12px"><label>Severity</label><select class="app-select" id="pentest-severity"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
        <div class="app-field" style="margin-top:12px"><label>Finding</label><input class="app-input" id="pentest-title" value="Sample access-control finding"></div>
        <div class="app-actions" style="margin-top:14px">${button("Add finding", "pentest-add")}</div>
      </article>
      <article class="app-card span-8">
        <div class="app-actions" style="justify-content:space-between;margin-bottom:14px"><h2>Finding tracker</h2><select class="app-select" style="max-width:180px" data-action="pentest-filter">${["All", "Low", "Medium", "High", "Critical"].map((item) => `<option ${item === filter ? "selected" : ""}>${item}</option>`).join("")}</select></div>
        ${table(["ID", "Target", "Severity", "Finding", "Status"], findings.map((finding) => [finding[0], finding[1], pill(finding[2]), finding[3], pill(finding[4])]))}
      </article>
      <article class="app-card span-12">
        <h2>Remediation board</h2>
        <div class="bar-list" style="margin-top:14px">${["Validate uploads", "Add login throttling", "Reduce verbose errors", "Retest access control"].map((item, index) => `<div class="bar-row"><span>${item}</span><div class="bar-track"><div class="bar-fill" style="width:${35 + index * 18}%;background:var(--app-purple)"></div></div><strong>${35 + index * 18}%</strong></div>`).join("")}</div>
      </article>
    </div>
  `);
}

function renderOptimization() {
  const app = data.optimization;
  const values = app.algorithms[state.optimization.algorithm];
  const max = Math.max(...values);
  const rows = values.map((value, index) => [index + 1, value, index === values.length - 1 ? pill("Best") : ""]);
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Algorithm", state.optimization.algorithm.replace("Particle Swarm Optimization", "PSO"), "selected")}
      ${metric("Iterations", values.length, "sample run")}
      ${metric("Start", values[0], "score")}
      ${metric("Latest", values[values.length - 1], "score")}
      <article class="app-card span-4">
        <h2>Run controls</h2>
        <div class="app-field" style="margin-top:14px"><label>Algorithm</label><select class="app-select" data-action="optimization-select">${Object.keys(app.algorithms).map((item) => `<option ${item === state.optimization.algorithm ? "selected" : ""}>${item}</option>`).join("")}</select></div>
        <div class="app-actions" style="margin-top:14px">${button("Run sample iterations", "optimization-run")}</div>
        <div class="terminal-box" style="margin-top:14px">seed = 42\nmode = classroom assignment\nbackend = browser sample</div>
      </article>
      <article class="app-card span-8">
        <h2>Score chart</h2>
        <div class="bar-list" style="margin-top:16px">${values.map((value, index) => `<div class="bar-row"><span>#${index + 1}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(8, (value / max) * 100)}%"></div></div><strong>${value}</strong></div>`).join("")}</div>
      </article>
      <article class="app-card span-12">
        <h2>Run table</h2>
        <div style="margin-top:14px">${table(["Iteration", "Score", "Note"], rows)}</div>
      </article>
    </div>
  `);
}

function renderRestApi() {
  const app = data.restApi;
  const json = JSON.stringify({ data: app.students.map(([id, name, course, year]) => ({ id, name, course, year })) }, null, 2);
  root.innerHTML = shell(app, html`
    <div class="app-grid">
      ${metric("Records", app.students.length, "SQLite sample")}
      ${metric("Endpoints", app.endpoints.length, "REST routes")}
      ${metric("Docs", "Swagger", "OpenAPI")}
      ${metric("Pattern", "DTO", "controllers")}
      <article class="app-card span-4">
        <h2>Create student</h2>
        <div class="app-field" style="margin-top:14px"><label>Name</label><input class="app-input" id="api-name" value="New Student"></div>
        <div class="app-field" style="margin-top:12px"><label>Course</label><input class="app-input" id="api-course" value="BSCS"></div>
        <div class="app-field" style="margin-top:12px"><label>Year</label><input class="app-input" id="api-year" value="1st Year"></div>
        <div class="app-actions" style="margin-top:14px">${button("POST student", "api-add")}</div>
      </article>
      <article class="app-card span-8">
        <h2>Student records</h2>
        <div style="margin-top:14px">${table(["ID", "Name", "Course", "Year", "Action"], app.students.map((student) => [student[0], student[1], student[2], student[3], `<button class="app-button secondary" type="button" data-action="api-delete" data-id="${student[0]}">DELETE</button>`]))}</div>
      </article>
      <article class="app-card span-5">
        <h2>Endpoints</h2>
        <div style="margin-top:14px">${table(["Method", "Route", "Purpose"], app.endpoints.map((item) => [`<span class="method">${item[0]}</span>`, item[1], item[2]]))}</div>
      </article>
      <article class="app-card span-7">
        <h2>Response preview</h2>
        <pre class="json-box" style="margin-top:14px">${escapeHtml(json)}</pre>
      </article>
    </div>
  `);
}

const renderers = {
  classvision: renderClassVision,
  scheduler: renderScheduler,
  gym: renderGym,
  agapay: renderAgapay,
  usmctf: renderUsmCtf,
  pentest: renderPentest,
  optimization: renderOptimization,
  "rest-api": renderRestApi
};

function render() {
  const renderer = renderers[appId] || renderClassVision;
  renderer();
}

document.addEventListener("change", (event) => {
  const action = event.target.dataset.action;
  if (action === "classvision-room") state.classvision.room = event.target.value;
  if (action === "scheduler-student") state.scheduler.student = event.target.value;
  if (action === "scheduler-title") state.scheduler.title = event.target.value;
  if (action === "pentest-filter") state.pentest.filter = event.target.value;
  if (action === "optimization-select") state.optimization.algorithm = event.target.value;
  if (action) render();
});

document.addEventListener("input", (event) => {
  const action = event.target.dataset.action;
  if (action === "scheduler-student") state.scheduler.student = event.target.value;
  if (action === "scheduler-title") state.scheduler.title = event.target.value;
});

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;

  if (action === "scheduler-slot") state.scheduler.selectedSlot = Number(control.dataset.index);

  if (action === "gym-scan" || action === "gym-manual") {
    const app = data.gym;
    const member = app.members[state.gym.scanIndex % app.members.length];
    const result = member[2] === "Active" ? "Time-in recorded" : "Manual review needed";
    state.gym.logs.unshift([new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), member[1], action === "gym-scan" ? "Face scan" : "Manual entry", result]);
    state.gym.scanIndex += 1;
  }

  if (action === "agapay-create") {
    const app = data.agapay;
    const requester = document.querySelector("#agapay-requester")?.value || "Sample Student";
    const office = document.querySelector("#agapay-office")?.value || "Registrar";
    const service = document.querySelector("#agapay-service")?.value || "Transcript request";
    app.tickets.unshift([`AGP-${state.agapay.nextId}`, requester, office, service, "Normal", "Open", "2 days"]);
    state.agapay.nextId += 1;
  }

  if (action === "agapay-claim") {
    const ticket = data.agapay.tickets.find((item) => item[5] === "Open");
    if (ticket) {
      ticket[5] = "In progress";
      ticket[6] = "Claimed";
    }
  }

  if (action === "agapay-resolve") {
    const ticket = data.agapay.tickets.find((item) => item[5] === "In progress");
    if (ticket) {
      ticket[5] = "Resolved";
      ticket[6] = "Met";
    }
  }

  if (action === "ctf-select") state.usmctf.selected = control.dataset.id;

  if (action === "ctf-load") {
    const selected = data.usmctf.challenges.find((challenge) => challenge[0] === state.usmctf.selected);
    const input = document.querySelector("#ctf-flag");
    if (input && selected) input.value = selected[4];
    return;
  }

  if (action === "ctf-submit") {
    const selected = data.usmctf.challenges.find((challenge) => challenge[0] === state.usmctf.selected);
    const input = document.querySelector("#ctf-flag");
    if (selected && input?.value.trim() === selected[4]) state.usmctf.solved.add(selected[0]);
  }

  if (action === "pentest-add") {
    const target = document.querySelector("#pentest-target")?.value || "Student portal";
    const severity = document.querySelector("#pentest-severity")?.value || "Medium";
    const title = document.querySelector("#pentest-title")?.value || "Sample finding";
    data.pentest.findings.unshift([`PT-${String(data.pentest.findings.length + 19).padStart(3, "0")}`, target, severity, title, "Open"]);
  }

  if (action === "optimization-run") {
    const values = data.optimization.algorithms[state.optimization.algorithm];
    const latest = values[values.length - 1];
    const next = state.optimization.algorithm === "Particle Swarm Optimization" ? Math.max(1, latest - 5) : Number((latest + (latest < 1 ? 0.04 : 4)).toFixed(2));
    values.push(next);
  }

  if (action === "api-add") {
    const app = data.restApi;
    const name = document.querySelector("#api-name")?.value || "New Student";
    const course = document.querySelector("#api-course")?.value || "BSCS";
    const year = document.querySelector("#api-year")?.value || "1st Year";
    app.students.push([state.restApi.nextId, name, course, year]);
    state.restApi.nextId += 1;
  }

  if (action === "api-delete") {
    const id = Number(control.dataset.id);
    data.restApi.students = data.restApi.students.filter((student) => student[0] !== id);
  }

  render();
});

render();
