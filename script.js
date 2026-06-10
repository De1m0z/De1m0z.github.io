const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectCount = document.querySelector("#project-count");

const updateProjectCount = () => {
  if (!projectCount) return;

  const visibleCount = projectCards.filter((card) => !card.classList.contains("hidden")).length;
  projectCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.split(" ").includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });

    updateProjectCount();
  });
});

updateProjectCount();
