document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const toggleBtn = document.getElementById("toggle-btn");
  const toolkit = document.getElementById("toolkit");
  const faders = document.querySelectorAll(".fade-in");

  toolkit.classList.add("hidden");

  toggleBtn.addEventListener("click", () => {
    console.log("Toolkit toggle button clicked");

    const isHidden = toolkit.classList.contains("hidden");

    if (isHidden) {
      toolkit.classList.remove("hidden");
      toolkit.classList.add("visible");
      toggleBtn.textContent = "Close Toolkit";
    } else {
      toolkit.classList.remove("visible");
      toolkit.classList.add("hidden");
      toggleBtn.textContent = "Open Toolkit";
    }
  });

  function appearOnScroll() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", appearOnScroll);
  appearOnScroll();

  const hour = new Date().getHours();
  let greeting = "🔥 Keep going, creator.";

  if (hour >= 0 && hour < 2) {
    greeting = "🌌 Midnight strikes. Reset. Refocus.";
  } else if (hour >= 2 && hour < 4) {
    greeting = "🕑 Still awake? Legends are built at 2AM.";
  } else if (hour >= 4 && hour < 6) {
    greeting = "⚒️ The Unchained rise early or don’t sleep.";
  } else if (hour >= 6 && hour < 10) {
    greeting = "🌞 Morning, creator. Build with fire.";
  } else if (hour >= 10 && hour < 12) {
    greeting = "☕ Coffee break? Stay sharp.";
  } else if (hour >= 12 && hour < 14) {
    greeting = "🌤️ Afternoon, keep pushing.";
  } else if (hour >= 14 && hour < 17) {
    greeting = "🍽️ Don't forget to eat, warrior.";
  } else if (hour >= 17 && hour < 20) {
    greeting = "🧘 Time to slow the pace, not the vision.";
  } else if (hour >= 20 && hour < 22) {
    greeting = "🌙 Wind down with pride in your craft.";
  } else if (hour >= 22) {
    greeting = "🛡️ Rest well, tomorrow we strike again.";
  }

  const greetDiv = document.createElement("div");
  greetDiv.textContent = greeting;
  greetDiv.classList.add("creed");

  const greetingTarget = document.getElementById("greeting-placeholder");
  greetingTarget.appendChild(greetDiv);
});
