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
