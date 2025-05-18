document.addEventListener("DOMContentLoaded", () => {
  // === 1. TOOLKIT TOGGLE ===
  const toggleBtn = document.getElementById("toggle-btn");
  const toolkit = document.getElementById("toolkit");
  toolkit.classList.add("hidden");

  toggleBtn.addEventListener("click", () => {
    const isHidden = toolkit.classList.contains("hidden");
    toolkit.classList.toggle("hidden", !isHidden);
    toolkit.classList.toggle("visible", isHidden);
    toggleBtn.textContent = isHidden ? "Close Toolkit" : "Open Toolkit";
  });

  // === 2. STAGGER + FADE-IN ===
  function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    // Fade in everything that's not a project card
    document.querySelectorAll(".fade-in:not(.project-card)").forEach(el => {
      if (el.getBoundingClientRect().top < triggerPoint) {
        el.classList.add("visible");
      }
    });

    // Staggered fade-in for .project-card
    const cards = document.querySelectorAll(".project-card.fade-in");
    cards.forEach((el, index) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerPoint) {
        setTimeout(() => {
          el.classList.add("visible");
        }, index * 150); // Stagger delay
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load

  // === 3. TIME-BASED GREETING ===
  const hour = new Date().getHours();
  let greeting = "🔥 Keep going, creator.";

  if (hour < 2) greeting = "🌌 Midnight strikes. Reset. Refocus.";
  else if (hour < 4) greeting = "🕑 Still awake? Legends are built at 2AM.";
  else if (hour < 6) greeting = "⚒️ The Unchained rise early or don’t sleep.";
  else if (hour < 10) greeting = "🌞 Morning, creator. Build with fire.";
  else if (hour < 12) greeting = "☕ Coffee break? Stay sharp.";
  else if (hour < 14) greeting = "🌤️ Afternoon, keep pushing.";
  else if (hour < 17) greeting = "🍽️ Don't forget to eat, warrior.";
  else if (hour < 20) greeting = "🧘 Time to slow the pace, not the vision.";
  else if (hour < 22) greeting = "🌙 Wind down with pride in your craft.";
  else greeting = "🛡️ Rest well, tomorrow we strike again.";

  const greetDiv = document.createElement("div");
  greetDiv.textContent = greeting;
  greetDiv.classList.add("creed");

  const greetingTarget = document.getElementById("greeting-placeholder");
  greetingTarget.appendChild(greetDiv);
});
