// ======== SCRIPT.JS ========

// ===== LOADER =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  // Fade out loader after 2 seconds
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000);
});

// ===== DARK MODE TOGGLE WITH LOCAL STORAGE =====
const darkToggleBtn = document.querySelector(".dark-toggle");

// Initialize dark mode from localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkToggleBtn.textContent = "☀️ Light";
} else {
  darkToggleBtn.textContent = "🌙 Dark";
}

darkToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkToggleBtn.textContent = "☀️ Light";
    localStorage.setItem("dark-mode", "enabled");
  } else {
    darkToggleBtn.textContent = "🌙 Dark";
    localStorage.setItem("dark-mode", "disabled");
  }
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== AOS INITIALIZATION =====
AOS.init({
  duration: 800,  // animation duration in ms
  once: true,     // animation occurs only once
  easing: "ease-in-out",
});

// ===== OPTIONAL: STAGGERED CARD ANIMATION =====
const achievementCards = document.querySelectorAll(".achievement-card");
achievementCards.forEach((card, index) => {
  card.style.setProperty("--i", index); // For CSS animation-delay
});

// ===== OPTIONAL: SMOOTH SCROLL FOR NAV LINKS =====
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
