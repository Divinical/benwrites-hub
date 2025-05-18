// 1. Grab the DOM elements we'll need
const title = document.querySelector("h1");
const toggleBtn = document.getElementById("toggle-btn");
const toolkit = document.getElementById("toolkit");
const faders = document.querySelectorAll('.fade-in');

// 2. Add click functionality to toggle the toolkit section
toggleBtn.addEventListener("click", () => {
  const isHidden = toolkit.style.display === "none";
  toolkit.style.display = isHidden ? "block" : "none";
});

// 3. Make the title text change when clicked
title.addEventListener("click", () => {
  title.textContent = "🔥 Forged Anew";
});
// adding fade-in effect to the toolkit section
function appearOnScroll() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
// 4. Add scroll event listener to trigger the fade-in effect
  window.addEventListener('scroll', appearOnScroll);
  
  // 5. Add time-based greeting above contact section
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

