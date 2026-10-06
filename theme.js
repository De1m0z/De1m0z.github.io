(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch { /* System preference still works when storage is unavailable. */ }

  const applyTheme = () => {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.textContent = theme === 'dark' ? 'Dark' : 'Light';
      toggle.setAttribute('aria-label', `${theme === 'dark' ? 'Dark' : 'Light'} theme. Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    document.querySelectorAll('[data-light-src][data-dark-src]').forEach(image => {
      image.src = theme === 'dark' ? image.dataset.darkSrc : image.dataset.lightSrc;
    });
  };

  root.classList.add('js');
  applyTheme();
  document.addEventListener('DOMContentLoaded', applyTheme);
  systemTheme.addEventListener('change', () => { if (!preference) applyTheme(); });
  document.addEventListener('click', event => {
    if (!event.target.closest('#theme-toggle')) return;
    preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try { localStorage.setItem('theme', preference); } catch { /* Keep the in-memory choice. */ }
  });
})();
