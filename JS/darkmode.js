//Getting Elements
const bodyElement = document.querySelector('[data-js="body"]');
const darkModeOn = document.querySelector('[data-js="darkmode-on"]');
const darkModeOff = document.querySelector('[data-js="darkmode-off"]');
const buttonAddDarkMode = document.querySelector(
  '[data-js="button-dark-mode"]'
);

//Button for Darkmode
buttonAddDarkMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  if (darkModeOn.classList.contains("invisible")) {
    darkModeOn.classList.remove("invisible");
    darkModeOff.classList.add("invisible");
  } else {
    darkModeOn.classList.add("invisible");
    darkModeOff.classList.remove("invisible");
  }
});
