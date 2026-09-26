(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeLabel = themeButton?.querySelector('.theme-label');
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('antarktida-ui-theme'); } catch (_) { /* Theme still works when storage is unavailable. */ }

  if (storedTheme === 'dark') root.dataset.theme = 'dark';
  if (themeButton) {
    const syncThemeControl = () => {
      const isDark = root.dataset.theme === 'dark';
      themeButton.setAttribute('aria-pressed', String(isDark));
      themeButton.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
      if (themeLabel) themeLabel.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
    };
    syncThemeControl();
    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('antarktida-ui-theme', root.dataset.theme); } catch (_) { /* Keep the current page usable without storage. */ }
      syncThemeControl();
    });
  }

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const feedback = document.querySelector('.tab-feedback');
  const selectTab = (tab) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.classList.toggle('is-selected', selected);
      item.tabIndex = selected ? 0 : -1;
    });
    if (feedback) feedback.textContent = `Показан период: ${tab.textContent.trim()}`;
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      tabs[next].focus();
      selectTab(tabs[next]);
    });
  });

  const notice = document.querySelector('.notice');
  notice?.querySelector('button')?.addEventListener('click', () => notice.remove());

  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => {
      const active = link.hash === `#${visible.target.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-22% 0px -68% 0px', threshold: [0, .1, .5] });
  sections.forEach((section) => observer.observe(section));
})();
