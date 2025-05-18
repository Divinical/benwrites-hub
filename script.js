document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const toggleBtn = document.getElementById("toggle-btn");
  const toolkit = document.getElementById("toolkit");
  const faders = document.querySelectorAll(".fade-in");

  // 1. Make sure toolkit is hidden by default
  toolkit.classList.add("hidden");

  // 2. Toggle toolkit with proper visibility handling
  toggleBtn.addEventListener("click", () => {
    console.log("Toolkit toggle button clicked");

    toolkit.classList.toggle("hidden");

    const isVisible = !toolkit.classList.contains("hidden");

    // Control the 'visible' animation class manually
    if (isVisible) {
      toolkit.classList.add("visible");
      toggleBtn.textContent = "Close Toolkit";
    } else {
      toolkit.classList.remove("visible");
      toggleBtn.textContent = "Open Toolkit";
    }
  });

  // 3. Change title on click
  title.addEventListener("click", () => {
    title.textContent = "🔥 Forged Anew";
  });

  // 4. Handle fade-in animations on scroll
  function appearOnScroll() {
    faders.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", appearOnScroll);

  // 5. Custom motivational greeting based on time of day
  const hour = new Date().getHours();
  let greeting;

  if (hour >= 0 && hour < 2) {
    greeting = "🕛 Midnight reset. Fresh day, fresh chance.";
  } else if (hour >= 2 && hour < 4) {
    greeting = "🌘 Still grinding? Rest earns power.";
  } else if (hour >= 4 && hour < 6) {
    greeting = "⚔️ Early bird or night warrior — you're Unchained.";
  } else if (hour >= 6 && hour < 10) {
    greeting = "🌅 Good morning, creator. Let’s build something legendary.";
  } else if (hour >= 10 && hour < 12) {
    greeting = "☕ Time for a deep breath and maybe a coffee break.";
  } else if (hour >= 12 && hour < 14) {
    greeting = "🌞 Good afternoon — pace yourself, but don’t stop.";
  } else if (hour >= 14 && hour < 17) {
    greeting = "🍽️ Reminder: You need fuel too — have you eaten?";
  } else if (hour >= 17 && hour < 20) {
    greeting = "🌇 Slow it down. Review what you’ve forged today.";
  } else if (hour >= 20 && hour < 22) {
    greeting = "🌙 Wind down. Stillness sharpens the next strike.";
  } else {
    greeting = "🛌 Good night, champion. Rest is part of the ritual.";
  }

  const contactSection = document.querySelector("#contact");
  const greetDiv = document.createElement("div");
  greetDiv.textContent = greeting;
  contactSection.prepend(greetDiv);
});
