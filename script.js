// ============================================================
// Filter logic
// ============================================================
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const projectCards  = Array.from(document.querySelectorAll(".project-card"));
const projectCount  = document.querySelector("#project-count");

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
});

updateProjectCount();

// ============================================================
// Scroll-in animations (IntersectionObserver)
// ============================================================
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

// Staggered card children
document.querySelectorAll(".project-grid .project-card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 55}ms`;
});

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hover micro-animation
  scrollTopBtn.addEventListener("mouseenter", () => {
    scrollTopBtn.style.transform = "translateY(-3px) scale(1.08)";
    scrollTopBtn.style.boxShadow = "0 8px 30px rgba(59,130,246,0.5)";
  });
  scrollTopBtn.addEventListener("mouseleave", () => {
    scrollTopBtn.style.transform = "";
    scrollTopBtn.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
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
          link.style.color = active ? "var(--ink)" : "";
          link.style.background = active ? "rgba(59,130,246,0.12)" : "";
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
  if (!sunIcon || !moonIcon) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  sunIcon.style.display = isDark ? "none" : "block";
  moonIcon.style.display = isDark ? "block" : "none";
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
