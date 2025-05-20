document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const toolkitToggle = document.getElementById("toolkitToggle");
  const toolkitReveal = document.getElementById("toolkitReveal");
  const form = document.getElementById("forgeForm");
  const successMessage = document.getElementById("successMessage");
  const promptText = document.getElementById("challengePrompt");

  document.body.classList.add("fade-in");

  // === THEME SETUP ===
  const isDark = localStorage.getItem("theme") !== "light";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

  toggle.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isCurrentlyDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentlyDark ? "light" : "dark");
  });

// === TOOLKIT TOGGLE ===
const isVisible = toolkitReveal.classList.contains("visible");
toolkitToggle.textContent = isVisible ? "🔒 Lock the Vault" : "🧨 Enter Blacksite";

toolkitToggle.addEventListener("click", () => {
  toolkitReveal.classList.toggle("visible");
  toolkitReveal.classList.toggle("hidden");
  const nowVisible = toolkitReveal.classList.contains("visible");
  toolkitToggle.textContent = nowVisible ? "🔒 Lock the Vault" : "🧨 Enter Blacksite";
});

  // === FORGE FORM SUBMIT ===
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.classList.add("fade");
        setTimeout(() => {
          form.reset();
          form.classList.add("hidden");
          successMessage.classList.remove("hidden");
          document.getElementById("builderTitle").classList.add("hidden");
          document.getElementById("challengeTitle").parentElement.classList.add("hidden");
          document.getElementById("challengePrompt").classList.add("hidden");
          successMessage.classList.add("reveal");
          promptText.classList.add("hidden");
          document.getElementById("challengeTitle").textContent = "🔥 Challenge Logged. Let the sparks decide.";
        }, 700);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  });
});
// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // Optional: trigger once
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));
