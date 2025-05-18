document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const toggleBtn = document.getElementById("toggle-btn");
  const toolkit = document.getElementById("toolkit");
  const faders = document.querySelectorAll('.fade-in');

  // Ensure it's hidden on load
  toolkit.classList.add("hidden");

  toggleBtn.addEventListener("click", () => {
    console.log("Toolkit toggle button clicked");
    toolkit.classList.toggle("hidden");
    const isVisible = !toolkit.classList.contains("hidden");
    toggleBtn.textContent = isVisible ? "Close Toolkit" : "Open Toolkit";
  });

  title.addEventListener("click", () => {
    title.textContent = "🔥 Forged Anew";
  });

  function appearOnScroll() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', appearOnScroll);

  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "🌞 Good morning, creator.";
  } else if (hour < 18) {
    greeting = "🔥 Keep forging, warrior.";
  } else {
    greeting = "🌙 Time to reflect, not retreat.";
  }

  const contactSection = document.querySelector("#contact");
  const greetDiv = document.createElement("div");
  greetDiv.textContent = greeting;
  contactSection.prepend(greetDiv);
});