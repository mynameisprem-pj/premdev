(() => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!nav || !toggle || !links) return;

  // Solid background once the page has scrolled past the hero.
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle.
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('nav__links--open');
    nav.classList.toggle('nav--open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu after a link is tapped.
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('nav__links--open');
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
