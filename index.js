//Elements
const bodyElement = document.querySelector('[data-js="body"]');

const buttonAddDarkMode = document.querySelector(
  '[data-js="button-dark-mode"]'
);

buttonAddDarkMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
