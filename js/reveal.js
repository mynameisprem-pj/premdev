// Fade-and-rise reveal for major sections as they enter the viewport.
(() => {
  const targets = document.querySelectorAll(
    '.about, .skills, .projects, .contact, .skill-card, .project-card'
  );

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    return;
  }

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
