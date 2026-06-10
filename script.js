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
