// =====================================================
// PROJECT CARD EXPAND
// Clicking a project card reveals its full, untruncated
// description. Clicking an actual link inside the card
// (Live demo / GitHub) still navigates normally.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    const desc = card.querySelector(".project-info p");
    if (!desc) return;

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let links behave normally
      desc.classList.toggle("expanded");
    });
  });
});
