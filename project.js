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
  (items || []).forEach((item, index) => node.appendChild(mapper(item, index)));
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
  const description = project.summary || "Project detail page for Russel Jhon C. Buisan.";
  const pageUrl = `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(project.id)}`;
  const absoluteImage = new URL(project.image, window.location.href).href;

  const setMeta = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  };

  const canonical = document.querySelector("link[rel='canonical']");
  if (canonical) canonical.href = pageUrl;

  setMeta("meta[name='description']", description);
  setMeta("meta[property='og:title']", `${project.title} - Russel Jhon C. Buisan`);
  setMeta("meta[property='og:description']", description);
  setMeta("meta[property='og:url']", pageUrl);
  setMeta("meta[property='og:image']", absoluteImage);
  setMeta("meta[name='twitter:title']", `${project.title} - Russel Jhon C. Buisan`);
  setMeta("meta[name='twitter:description']", description);
  setMeta("meta[name='twitter:image']", absoluteImage);

  setText("#project-eyebrow", project.eyebrow);
  setText("#project-title", project.title);
  setText("#project-summary", project.summary);
  setText("#project-overview", project.overview);
  setText("#project-problem", project.problem);
  setText("#project-status", project.status);
  setText("#project-category", project.category);
  setText("#project-updated", project.lastUpdated);
  setText("#preview-title", project.previewTitle);

  const image = document.querySelector("#project-image");
  if (image) {
    image.src = project.image;
    image.alt = project.alt;
  }
  setText("#project-image-caption", project.alt);

  renderList("#project-stack", project.stack, (item) => makeElement("span", "", item));

  renderList("#project-metrics", project.metrics, ([label, value]) => {
    const card = makeElement("article", "metric-card");
    card.appendChild(makeElement("span", "", label));
    card.appendChild(makeElement("strong", "", value));
    return card;
  });

  renderList("#project-work", project.responsibilities || project.work, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  renderList("#project-features", project.features, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  renderList("#project-talking-points", project.talkingPoints, (item) => {
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

  renderList("#project-links", project.links, ([label, href], index) => {
    const link = makeElement("a", index === 0 ? "button primary" : "button secondary", label);
    link.href = href;
    if (/^https?:\/\//.test(href)) {
      link.rel = "noopener";
    }
    return link;
  });
}
