const demoParams = new URLSearchParams(window.location.search);
const demoId = demoParams.get("id") || "classvision";
const demoRoot = document.querySelector("#project-demo");
const demoTitle = document.querySelector("#demo-title");
const demoCopy = document.querySelector("#demo-copy");

const demoData = {
  classvision: {
    title: "Classroom activity review",
    copy: "Choose a room and run a sample review to see activity counts, accepted detections, and a room-level summary.",
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
    title: "Defense booking board",
    copy: "Book a sample defense slot and watch the panel, room, and schedule record update.",
    students: ["Russel Jhon C. Buisan", "Maria Santos", "John Carlo Reyes"],
    slots: [
      ["June 17, 2026", "9:00 AM", "ICT Conference Room", "Available"],
      ["June 17, 2026", "1:30 PM", "CS Laboratory", "Available"],
      ["June 18, 2026", "10:00 AM", "Dean's Office", "Reserved"]
    ],
    panel: ["Dr. Garcia", "Prof. Dela Cruz", "Prof. Manalo"]
  },
  gym: {
    title: "Scanner and attendance log",
    copy: "Run sample scans for members and see the attendance log update like a front-desk scanner workflow.",
    members: [
      ["M-1024", "Ariane Lopez", "Active", "Monthly"],
      ["M-1042", "Ken Bautista", "Active", "Annual"],
      ["M-1088", "Lara Gomez", "Needs payment", "Monthly"]
    ]
  },
  cheentea: {
    title: "Kiosk order demo",
    copy: "Add sample drinks to the cart, change quantities, and send a sample order to the kitchen queue.",
    menu: [
      ["Classic Milk Tea", 89, "500ml"],
      ["Brown Sugar Latte", 109, "500ml"],
      ["Matcha Cream", 119, "500ml"],
      ["Wintermelon Tea", 79, "500ml"]
    ]
  },
  usmctf: {
    title: "CTF challenge board",
    copy: "Open sample challenges, submit sample flags, and watch the scoreboard update.",
    challenges: [
      ["welcome", "Welcome Flag", "Warm-up", 50, "usm{welcome}"],
      ["web-101", "Cookie Check", "Web", 120, "usm{cookie}"],
      ["crypto-01", "Shifted Text", "Crypto", 150, "usm{shift}"],
      ["forensics-01", "Hidden Note", "Forensics", 180, "usm{metadata}"]
    ]
  },
  pentest: {
    title: "Finding tracker",
    copy: "Create sample findings with severity, target area, and remediation status for a safe reporting workflow.",
    targets: ["Student portal", "Admin login", "Public API", "File upload"],
    severities: ["Low", "Medium", "High", "Critical"]
  },
  optimization: {
    title: "Algorithm run viewer",
    copy: "Select an algorithm and run sample iterations to compare how the score changes over time.",
    algorithms: {
      "Genetic Algorithm": [12, 19, 25, 31, 37, 42],
      "Value Iteration": [0.18, 0.34, 0.49, 0.61, 0.72, 0.81],
      "Particle Swarm Optimization": [88, 64, 41, 29, 18, 11]
    }
  },
  "rest-api": {
    title: "Student records API demo",
    copy: "Add and remove sample student records to preview the API data shape and CRUD workflow.",
    students: [
      [1, "Ana Cruz", "BSCS", "3rd Year"],
      [2, "Mark Villanueva", "BSIT", "2nd Year"],
      [3, "Russel Buisan", "BSCS", "4th Year"]
    ]
  }
};

const clearDemo = () => {
  if (!demoRoot) return;
  demoRoot.innerHTML = "";
};

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const button = (label, className = "demo-button") => {
  const node = el("button", className, label);
  node.type = "button";
  return node;
};

const renderTable = (headers, rows) => {
  const wrap = el("div", "demo-table-wrap");
  const table = el("table", "demo-table");
  const thead = el("thead");
  const headRow = el("tr");
  headers.forEach((header) => headRow.appendChild(el("th", "", header)));
  thead.appendChild(headRow);
  const tbody = el("tbody");
  rows.forEach((row) => {
    const tr = el("tr");
    row.forEach((cell) => tr.appendChild(el("td", "", String(cell))));
    tbody.appendChild(tr);
  });
  table.append(thead, tbody);
  wrap.appendChild(table);
  return wrap;
};

const renderEmptyState = (text) => {
  const box = el("div", "demo-empty", text);
  return box;
};

const setDemoIntro = (data) => {
  if (demoTitle) demoTitle.textContent = data.title;
  if (demoCopy) demoCopy.textContent = data.copy;
};

const renderClassVision = (data) => {
  clearDemo();
  setDemoIntro(data);
  const controls = el("div", "demo-controls");
  const select = el("select", "demo-input");
  Object.keys(data.rooms).forEach((room) => {
    const option = el("option", "", room);
    option.value = room;
    select.appendChild(option);
  });
  const run = button("Run sample review");
  controls.append(select, run);
  const output = el("div", "demo-output");
  demoRoot.append(controls, output);

  const draw = () => {
    const rows = data.rooms[select.value];
    const total = rows.reduce((sum, item) => sum + item[2], 0);
    output.innerHTML = "";
    output.appendChild(metricStrip([
      ["Room", select.value],
      ["Accepted detections", String(total)],
      ["Review mode", "Activity only"]
    ]));
    output.appendChild(renderTable(["Timestamp", "Activity", "Count", "Confidence"], rows));
  };
  run.addEventListener("click", draw);
  draw();
};

const renderScheduler = (data) => {
  clearDemo();
  setDemoIntro(data);
  let selectedSlot = data.slots[0];
  const form = el("div", "demo-controls stacked");
  const student = el("select", "demo-input");
  data.students.forEach((name) => {
    const option = el("option", "", name);
    option.value = name;
    student.appendChild(option);
  });
  const title = el("input", "demo-input");
  title.value = "YOWOv2-Based Student Activity Detection Framework";
  const slotList = el("div", "demo-choice-grid");
  const result = el("div", "demo-output");

  data.slots.forEach((slot, index) => {
    const item = button(`${slot[0]} - ${slot[1]}`, "demo-choice");
    if (index === 0) item.classList.add("active");
    if (slot[3] !== "Available") item.disabled = true;
    item.addEventListener("click", () => {
      selectedSlot = slot;
      slotList.querySelectorAll(".demo-choice").forEach((node) => node.classList.remove("active"));
      item.classList.add("active");
      draw();
    });
    slotList.appendChild(item);
  });

  form.append(labelWrap("Student", student), labelWrap("Research title", title), slotList);
  demoRoot.append(form, result);

  const draw = () => {
    result.innerHTML = "";
    result.appendChild(metricStrip([
      ["Student", student.value],
      ["Room", selectedSlot[2]],
      ["Panel", data.panel.join(", ")]
    ]));
    result.appendChild(renderTable(["Date", "Time", "Status", "Schedule record"], [[selectedSlot[0], selectedSlot[1], "Reserved for sample review", title.value]]));
  };
  student.addEventListener("change", draw);
  title.addEventListener("input", draw);
  draw();
};

const renderGym = (data) => {
  clearDemo();
  setDemoIntro(data);
  let index = 0;
  const log = [];
  const scan = button("Scan next member");
  const output = el("div", "demo-output");
  demoRoot.append(scan, output);

  const draw = () => {
    output.innerHTML = "";
    output.appendChild(renderTable(["ID", "Name", "Status", "Plan"], data.members));
    output.appendChild(log.length ? renderTable(["Time", "Member", "Action", "Result"], log) : renderEmptyState("No sample scans yet."));
  };

  scan.addEventListener("click", () => {
    const member = data.members[index % data.members.length];
    const result = member[2] === "Active" ? "Time-in recorded" : "Manual review needed";
    log.unshift([new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), member[1], "Face scan", result]);
    index += 1;
    draw();
  });
  draw();
};

const renderCheenTea = (data) => {
  clearDemo();
  setDemoIntro(data);
  const cart = new Map();
  const menu = el("div", "demo-card-grid");
  const cartBox = el("div", "demo-output");

  data.menu.forEach((item) => {
    const card = el("article", "demo-menu-card");
    card.appendChild(el("h3", "", item[0]));
    card.appendChild(el("p", "", `${item[2]} - PHP ${item[1]}`));
    const add = button("Add to cart");
    add.addEventListener("click", () => {
      cart.set(item[0], (cart.get(item[0]) || 0) + 1);
      drawCart();
    });
    card.appendChild(add);
    menu.appendChild(card);
  });

  const send = button("Send sample order");
  send.addEventListener("click", () => {
    if (cart.size === 0) return;
    const status = el("div", "demo-success", "Sample order sent to kitchen queue.");
    cartBox.appendChild(status);
  });

  demoRoot.append(menu, cartBox);

  const drawCart = () => {
    cartBox.innerHTML = "";
    const rows = [...cart.entries()].map(([name, qty]) => {
      const item = data.menu.find((entry) => entry[0] === name);
      return [name, qty, `PHP ${item[1] * qty}`];
    });
    const total = rows.reduce((sum, row) => sum + Number(row[2].replace("PHP ", "")), 0);
    cartBox.appendChild(rows.length ? renderTable(["Drink", "Qty", "Subtotal"], rows) : renderEmptyState("Cart is empty."));
    cartBox.appendChild(metricStrip([["Total", `PHP ${total}`], ["Order type", "Take-out"], ["Queue", rows.length ? "Ready to send" : "Waiting"]]));
    cartBox.appendChild(send);
  };
  drawCart();
};

const renderUsmCtf = (data) => {
  clearDemo();
  setDemoIntro(data);
  const solved = new Set();
  const board = el("div", "demo-card-grid");
  const score = el("div", "demo-output");

  const drawScore = () => {
    const points = data.challenges.filter((challenge) => solved.has(challenge[0])).reduce((sum, challenge) => sum + challenge[3], 0);
    score.innerHTML = "";
    score.appendChild(metricStrip([["Solved", `${solved.size}/${data.challenges.length}`], ["Score", String(points)], ["Team", "Sample Team"]]));
  };

  data.challenges.forEach((challenge) => {
    const card = el("article", "demo-menu-card");
    card.appendChild(el("h3", "", challenge[1]));
    card.appendChild(el("p", "", `${challenge[2]} - ${challenge[3]} pts`));
    const input = el("input", "demo-input");
    input.setAttribute("aria-label", "Sample flag");
    const submit = button("Submit flag");
    const note = el("p", "demo-note", "");
    submit.addEventListener("click", () => {
      if (input.value.trim() === challenge[4]) {
        solved.add(challenge[0]);
        note.textContent = "Correct sample flag.";
        note.className = "demo-note success";
      } else {
        note.textContent = `Try ${challenge[4]} for this sample challenge.`;
        note.className = "demo-note";
      }
      drawScore();
    });
    card.append(input, submit, note);
    board.appendChild(card);
  });

  demoRoot.append(board, score);
  drawScore();
};

const renderPentest = (data) => {
  clearDemo();
  setDemoIntro(data);
  const findings = [["Student portal", "Medium", "Missing rate limit on login", "Open"]];
  const form = el("div", "demo-controls stacked");
  const target = selectFrom(data.targets);
  const severity = selectFrom(data.severities);
  const title = el("input", "demo-input");
  title.value = "Sample access-control finding";
  const add = button("Add sample finding");
  const output = el("div", "demo-output");
  form.append(labelWrap("Target", target), labelWrap("Severity", severity), labelWrap("Finding", title), add);
  demoRoot.append(form, output);

  const draw = () => {
    output.innerHTML = "";
    output.appendChild(renderTable(["Target", "Severity", "Finding", "Status"], findings));
  };
  add.addEventListener("click", () => {
    findings.unshift([target.value, severity.value, title.value || "Untitled sample finding", "Open"]);
    draw();
  });
  draw();
};

const renderOptimization = (data) => {
  clearDemo();
  setDemoIntro(data);
  const picker = selectFrom(Object.keys(data.algorithms));
  const run = button("Run sample iterations");
  const output = el("div", "demo-output");
  demoRoot.append(labelWrap("Algorithm", picker), run, output);

  const draw = () => {
    const values = data.algorithms[picker.value];
    output.innerHTML = "";
    output.appendChild(renderTable(["Iteration", "Score"], values.map((value, index) => [index + 1, value])));
    const bars = el("div", "demo-bars");
    const max = Math.max(...values);
    values.forEach((value, index) => {
      const row = el("div", "demo-bar-row");
      row.appendChild(el("span", "", `#${index + 1}`));
      const bar = el("div", "demo-bar");
      bar.style.width = `${Math.max(8, (value / max) * 100)}%`;
      row.appendChild(bar);
      bars.appendChild(row);
    });
    output.appendChild(bars);
  };
  run.addEventListener("click", draw);
  picker.addEventListener("change", draw);
  draw();
};

const renderRestApi = (data) => {
  clearDemo();
  setDemoIntro(data);
  let nextId = Math.max(...data.students.map((student) => student[0])) + 1;
  const students = data.students.map((student) => [...student]);
  const form = el("div", "demo-controls stacked");
  const name = el("input", "demo-input");
  name.value = "New Student";
  const course = el("input", "demo-input");
  course.value = "BSCS";
  const year = el("input", "demo-input");
  year.value = "1st Year";
  const add = button("POST sample student");
  const output = el("div", "demo-output");
  form.append(labelWrap("Name", name), labelWrap("Course", course), labelWrap("Year", year), add);
  demoRoot.append(form, output);

  const draw = () => {
    output.innerHTML = "";
    const rows = students.map((student) => [...student, "DELETE"]);
    const table = renderTable(["ID", "Name", "Course", "Year", "Action"], rows);
    [...table.querySelectorAll("tbody tr")].forEach((row, index) => {
      const action = row.lastElementChild;
      action.textContent = "";
      const remove = button("Delete", "demo-small-button");
      remove.addEventListener("click", () => {
        students.splice(index, 1);
        draw();
      });
      action.appendChild(remove);
    });
    output.appendChild(table);
  };

  add.addEventListener("click", () => {
    students.push([nextId, name.value || "Student", course.value || "BSCS", year.value || "1st Year"]);
    nextId += 1;
    draw();
  });
  draw();
};

const labelWrap = (label, control) => {
  const wrap = el("label", "demo-label");
  wrap.appendChild(el("span", "", label));
  wrap.appendChild(control);
  return wrap;
};

const selectFrom = (items) => {
  const select = el("select", "demo-input");
  items.forEach((item) => {
    const option = el("option", "", item);
    option.value = item;
    select.appendChild(option);
  });
  return select;
};

const metricStrip = (items) => {
  const strip = el("div", "demo-metric-strip");
  items.forEach(([label, value]) => {
    const card = el("article", "demo-mini-metric");
    card.appendChild(el("span", "", label));
    card.appendChild(el("strong", "", value));
    strip.appendChild(card);
  });
  return strip;
};

const demoRenderers = {
  classvision: renderClassVision,
  scheduler: renderScheduler,
  gym: renderGym,
  cheentea: renderCheenTea,
  usmctf: renderUsmCtf,
  pentest: renderPentest,
  optimization: renderOptimization,
  "rest-api": renderRestApi
};

const activeDemo = demoData[demoId] || demoData.classvision;
const activeRenderer = demoRenderers[demoId] || renderClassVision;
if (demoRoot) activeRenderer(activeDemo);
