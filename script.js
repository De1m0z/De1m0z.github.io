const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const projectCount = document.getElementById('project-count');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionAvailable = typeof Element.prototype.animate === 'function';
const motionEase = 'cubic-bezier(.23, 1, .32, 1)';
const logoStage = document.querySelector('.logo-stage');
const logoWall = document.querySelector('.logo-wall');
const wallPointer = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
const resetLogoWall = () => {
  logoWall?.style.removeProperty('--wall-x');
  logoWall?.style.removeProperty('--wall-y');
};
if (logoStage && logoWall) {
  logoStage.addEventListener('pointermove', event => {
    if (motionPreference.matches || !wallPointer.matches) return;
    const bounds = logoStage.getBoundingClientRect();
    logoWall.style.setProperty('--wall-x', `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 7}deg`);
    logoWall.style.setProperty('--wall-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}deg`);
  });
  logoStage.addEventListener('pointerleave', resetLogoWall);
  logoStage.addEventListener('focusin', resetLogoWall);
  wallPointer.addEventListener('change', resetLogoWall);
}

// Keep each project's position recognizable when the collection is filtered.
const animateProjectLayout = previous => {
  const visible = projectCards.filter(card => !card.hidden);
  const positions = visible.map(card => card.getBoundingClientRect());
  visible.forEach((card, index) => {
    const before = previous.get(card);
    const after = positions[index];
    card.animate([
      { transform: before ? `translate(${before.left - after.left}px, ${before.top - after.top}px)` : 'translateY(16px)', opacity: before ? 1 : .55 },
      { transform: 'none', opacity: 1 },
    ], { id: 'project-reflow', duration: 320, easing: motionEase });
  });
};

const updateProjectCount = () => {
  if (!projectCount) return;
  const count = projectCards.filter(card => !card.hidden).length;
  projectCount.textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}`;
};

filterButtons.forEach((button, index) => {
  button.addEventListener('click', event => {
    const animate = event.detail !== 0 && !motionPreference.matches && motionAvailable;
    const previous = new Map(animate ? projectCards.filter(card => !card.hidden).map(card => [card, card.getBoundingClientRect()]) : []);
    projectCards.forEach(card => card.getAnimations?.().forEach(animation => animation.cancel()));
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && !card.dataset.category.split(' ').includes(button.dataset.filter);
    });
    updateProjectCount();
    if (animate) animateProjectLayout(previous);
  });
  button.addEventListener('keydown', event => {
    const destinations = {
      ArrowRight: (index + 1) % filterButtons.length,
      ArrowLeft: (index - 1 + filterButtons.length) % filterButtons.length,
      Home: 0,
      End: filterButtons.length - 1,
    };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    filterButtons[destinations[event.key]].focus();
  });
});
updateProjectCount();

// One opening sequence; default HTML stays visible when motion is unavailable.
if (!motionPreference.matches && motionAvailable) {
  document.querySelectorAll('.hero-title-line').forEach((line, index) => {
    line.animate([
      { clipPath: 'inset(0 0 100% 0)', transform: 'translateY(32px)' },
      { clipPath: 'inset(0)', transform: 'none' },
    ], { id: 'portfolio-intro', duration: 850, delay: index * 100, fill: 'backwards', easing: motionEase });
  });
  logoWall?.animate([
    { transform: 'perspective(1200px) rotateX(12deg) rotateY(-12deg) translateY(30px) scale(.92)' },
    { transform: 'none' },
  ], { id: 'portfolio-intro', duration: 1100, easing: motionEase });
  document.querySelectorAll('.logo-tile').forEach((tile, index) => {
    tile.animate([
      { transform: 'translateY(26px) scale(.94)', opacity: .3 },
      { transform: 'none', opacity: 1 },
    ], { id: 'portfolio-intro', duration: 900, delay: 150 + Math.min(index * 20, 180), fill: 'backwards', easing: motionEase });
  });
}

const stopPortfolioMotion = () => {
  document.getAnimations?.().filter(animation => ['portfolio-intro', 'project-reflow'].includes(animation.id)).forEach(animation => animation.cancel());
  resetLogoWall();
  logoWall?.getAnimations?.().forEach(animation => animation.cancel());
};
motionPreference.addEventListener('change', event => { if (event.matches) stopPortfolioMotion(); });
document.addEventListener('keydown', event => { if (event.key === 'Tab') stopPortfolioMotion(); });

const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('.site-header');
const nav = document.getElementById('primary-nav');
const narrowScreen = window.matchMedia('(max-width: 1023px)');
const closeMenu = (restoreFocus = false) => {
  if (!menuToggle || !header) return;
  header.removeAttribute('data-menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
  if (restoreFocus) menuToggle.focus();
};
if (menuToggle && header && nav) {
  menuToggle.addEventListener('click', event => {
    const opening = !header.hasAttribute('data-menu-open');
    header.toggleAttribute('data-menu-open', opening);
    menuToggle.setAttribute('aria-expanded', String(opening));
    menuToggle.textContent = opening ? 'Close' : 'Menu';
    if (opening && event.detail === 0) nav.querySelector('a')?.focus();
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.hasAttribute('data-menu-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('focusin', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  narrowScreen.addEventListener('change', () => {
    const focusWillHide = narrowScreen.matches && nav.contains(document.activeElement);
    closeMenu(focusWillHide);
  });
}

const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
if ('IntersectionObserver' in window && navLinks.length) {
  const sections = navLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  let observer;
  const updateCurrentSection = () => {
    const readingLine = header.getBoundingClientRect().height + 24;
    const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    const current = atEnd ? sections.at(-1) : sections.find(section => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= readingLine + 1 && bounds.bottom > readingLine;
    });
    navLinks.forEach(link => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const observeReadingLine = () => {
    observer?.disconnect();
    const top = header.getBoundingClientRect().height + 24;
    observer = new IntersectionObserver(updateCurrentSection, {
      rootMargin: `-${top}px 0px -${Math.max(0, window.innerHeight - top - 1)}px 0px`,
    });
    sections.forEach(section => observer.observe(section));
    updateCurrentSection();
  };
  observeReadingLine();
  window.addEventListener('resize', observeReadingLine);
  const footer = document.querySelector('.site-footer');
  // Match the end-of-page tolerance when the footer has fractional pixel bounds.
  if (footer) new IntersectionObserver(updateCurrentSection, { rootMargin: '0px 0px 2px 0px', threshold: 1 }).observe(footer);
}

// A case-study URL opens its native disclosure before positioning the reader.
const openLinkedStudy = () => {
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
  const entry = document.getElementById(id);
  if (!entry?.matches('.study-entry')) return;
  entry.open = true;
  requestAnimationFrame(() => entry.scrollIntoView({ block: 'start' }));
};
openLinkedStudy();
window.addEventListener('hashchange', openLinkedStudy);
