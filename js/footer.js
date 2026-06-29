// =====================================================
// FOOTER LOGIC
// Auto-fills the current year so it never goes stale
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
