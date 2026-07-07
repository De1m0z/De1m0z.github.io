// ============================================================
// Filter logic
// ============================================================
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const projectCards  = Array.from(document.querySelectorAll(".project-card"));
const projectCount  = document.querySelector("#project-count");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateProjectCount = () => {
  if (!projectCount) return;
  const n = projectCards.filter(c => !c.classList.contains("hidden")).length;
  projectCount.textContent = `Showing ${n} ${n === 1 ? "project" : "projects"}`;
};

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    projectCards.forEach(card => {
      const cats = card.dataset.category || "";
      const show = filter === "all" || cats.split(" ").includes(filter);
      card.classList.toggle("hidden", !show);
    });

    updateProjectCount();
  });

  button.addEventListener("keydown", (event) => {
    const currentIndex = filterButtons.indexOf(button);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % filterButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + filterButtons.length) % filterButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = filterButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    filterButtons[nextIndex].focus();
  });
});

updateProjectCount();

// ============================================================
// Scroll-in animations (IntersectionObserver)
// ============================================================
if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".fade-in-section").forEach(el => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-section").forEach(el => observer.observe(el));
}

// ============================================================
// Scroll-to-top button
// ============================================================
const scrollTopBtn = document.getElementById("scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 400;
    scrollTopBtn.style.display = show ? "inline-flex" : "none";
  }, { passive: true });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
}

// ============================================================
// Nav active state on scroll
// ============================================================
const sections = document.querySelectorAll("main [id]");
const navLinks  = document.querySelectorAll(".nav a[href^='#']");

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          if (active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach(s => navObserver.observe(s));

// ============================================================
// Theme Toggle Logic
// ============================================================
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

// Initialize icon state
const updateIconState = () => {
  if (!themeToggle || !sunIcon || !moonIcon) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  sunIcon.style.display = isDark ? "none" : "block";
  moonIcon.style.display = isDark ? "block" : "none";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
};
updateIconState();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIconState();
  });
}
