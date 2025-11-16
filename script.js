// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Close nav when clicking a link on mobile
nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

// Smooth scroll for same-page links
document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target instanceof HTMLAnchorElement &&
    target.getAttribute("href")?.startsWith("#")
  ) {
    const id = target.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}
