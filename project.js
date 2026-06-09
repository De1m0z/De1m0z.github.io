const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id") || "classvision";
const projects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
const project = projects.find((item) => item.id === requestedId) || projects[0];

const setText = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = value || "";
};

const renderList = (selector, items, mapper) => {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = "";
  items.forEach((item) => node.appendChild(mapper(item)));
};

const makeElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

if (!project) {
  setText("#project-title", "Project not found");
} else {
  document.title = `${project.title} - Russel Jhon C. Buisan`;
  setText("#project-eyebrow", project.eyebrow);
  setText("#project-title", project.title);
  setText("#project-summary", project.summary);
  setText("#project-status", project.status);
  setText("#project-category", project.category);
  setText("#preview-title", project.previewTitle);

  const image = document.querySelector("#project-image");
  if (image) {
    image.src = project.image;
    image.alt = project.alt;
  }

  renderList("#project-stack", project.stack, (item) => makeElement("span", "", item));

  renderList("#project-metrics", project.metrics, ([label, value]) => {
    const card = makeElement("article", "metric-card");
    card.appendChild(makeElement("span", "", label));
    card.appendChild(makeElement("strong", "", value));
    return card;
  });

  renderList("#project-work", project.work, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  renderList("#project-preview", project.preview, ([label, value]) => {
    const card = makeElement("article", "preview-step");
    card.appendChild(makeElement("span", "", label));
    card.appendChild(makeElement("p", "", value));
    return card;
  });

  renderList("#project-links", project.links, ([label, href]) => {
    const link = makeElement("a", "button secondary", label);
    link.href = href;
    return link;
  });
}
