// =====================================================
// NAVBAR LOGIC
// 1. Adds solid background to navbar after scrolling down
// 2. Toggles mobile menu open/close on hamburger click
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navClose = document.getElementById("nav-close");

  // add background once user scrolls past hero a bit
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // mobile menu toggle
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navClose.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

  // close mobile menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});