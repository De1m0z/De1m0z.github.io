const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.split(" ").includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

projectCards.forEach((card) => {
  const projectId = card.dataset.projectId;
  if (!projectId) return;

  const openProject = () => {
    window.location.href = `project.html?id=${encodeURIComponent(projectId)}`;
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openProject();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  });
});

const interviewDemoGrid = document.querySelector("#interview-demo-grid");
const portfolioProjects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];

const findDemoHref = (project) => {
  const links = Array.isArray(project.links) ? project.links : [];
  const demoLink = links.find(([label, href]) => /demo|sample/i.test(label) || /demo\.html|chantea-kiosk/.test(href));
  return demoLink ? demoLink[1] : `demos/${encodeURIComponent(project.id)}/`;
};

if (interviewDemoGrid && portfolioProjects.length) {
  interviewDemoGrid.innerHTML = "";
  portfolioProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "interview-demo-card";

    const eyebrow = document.createElement("span");
    eyebrow.textContent = project.eyebrow;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.textContent = project.summary;

    const actions = document.createElement("div");
    actions.className = "project-card-actions";

    const demo = document.createElement("a");
    demo.href = findDemoHref(project);
    demo.textContent = "Open frontend";

    const details = document.createElement("a");
    details.href = `project.html?id=${encodeURIComponent(project.id)}`;
    details.textContent = "Details";

    actions.append(details, demo);
    card.append(eyebrow, title, summary, actions);
    interviewDemoGrid.appendChild(card);
  });
}
