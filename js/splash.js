// Shows the splash screen for a minimum time (so it doesn't just flicker
// on fast connections), then fades it out once the page has loaded.
(() => {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MIN_DISPLAY_MS = prefersReducedMotion ? 0 : 700;
  const started = Date.now();

  document.documentElement.classList.add('no-scroll');

  function hideSplash() {
    const elapsed = Date.now() - started;
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);

    setTimeout(() => {
      splash.classList.add('splash--hidden');
      document.documentElement.classList.remove('no-scroll');
      setTimeout(() => splash.remove(), 500);
    }, wait);
  }

  if (document.readyState === 'complete') {
    hideSplash();
  } else {
    window.addEventListener('load', hideSplash);
    // Safety net in case 'load' is delayed by slow external resources.
    setTimeout(hideSplash, 2500);
  }
})();
