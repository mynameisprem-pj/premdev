// =====================================================
// SPLASH SCREEN LOGIC
// Waits for the entry animation to finish, then fades
// the splash screen out and reveals the main site.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  const SPLASH_DURATION = 3500; // total time (ms) splash stays visible
  const taglineText = "</> Welcome to my world";
let charIndex = 0;
const typedEl = document.getElementById("typed-text");

function typeTagline() {
  if (charIndex < taglineText.length) {
    typedEl.textContent += taglineText.charAt(charIndex);
    charIndex++;
    setTimeout(typeTagline, 70);
  }
}

setTimeout(typeTagline, 1500); // starts typing after name finishes animating// total time (ms) splash stays visible

  setTimeout(() => {
    splash.classList.add("hide");

    // once the fade-out transition finishes, remove splash from DOM
    // and reveal the real site content
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 800); // matches the CSS transition time

  }, SPLASH_DURATION);
});