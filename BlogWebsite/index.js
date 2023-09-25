const burgerEl = document.querySelector("#burger");
const menuEl = document.querySelector("#menu");

burgerEl.addEventListener("click", () => {
  if (menuEl.classList.contains("hidden")) {
    menuEl.classList.remove("hidden");
  } else {
    menuEl.classList.add("hidden");
  }
});
