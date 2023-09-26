const typewriterContainer = document.getElementById("intro-container");
const typewriterText = document.getElementById("intro-text");

typewriterContainer.style.visibility='visible'
// Set the initial text content of the typewriter text element
typewriterText.textContent = "";
let text =
  "Hi👋,I'm Umer Shah MERN Stack Developer a passionate MERN (MongoDB,Express.js, React, Node.js) Stack Developer on a mission to craft remarkable digital experiences and solutions.";
// Split the text into characters
const characters = text.split("");
let index = 0;

// Function to add characters with typewriter effect
function typeCharacter() {
  if (index < characters.length) {
    typewriterText.textContent += characters[index];
    index++;
    setTimeout(typeCharacter, 50); // Adjust the typing speed here (in milliseconds)
  }
}

// Start the typewriter effect
typeCharacter();

window.onload = function () {
  // Select the profile image
  const profileImage = document.querySelector(".image");
  console.log(profileImage);

  // Show the profile image with a fade-in effect
  profileImage.style.opacity = 1;
};

const burgerIconEl = document.getElementById("burger");
const navBarEl = document.getElementById("nav-bar");
burgerIconEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (navBarEl.classList.contains("hidden")) {
    navBarEl.classList.remove("hidden");
  } else {
    navBarEl.classList.add("hidden");
  }
});
