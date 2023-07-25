//Gettings Elements from HTML
const bodyElement = document.querySelector('[data-js="body"]');
const darkModeOn = document.querySelector('[data-js="darkmode-on"]');
const darkModeOff = document.querySelector('[data-js="darkmode-off"]');
const buttonAddDarkMode = document.querySelector(
  '[data-js="button-dark-mode"]'
);
const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const bookmarkedIcon = document.querySelector('[data-js="bookmarked-icon"]');

const showAnswer = document.querySelector('[data-js="show-answer-button"]');
const hideAnswer = document.querySelector('[data-js="hide-answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

//Button for Bookmark
bookmarkButton.addEventListener("click", () => {
  bookmarkedIcon.classList.toggle("invisible");
  bookmarkIcon.classList.toggle("invisible");
});

//Show answer
showAnswer.addEventListener("click", () => {
  answer.classList.toggle("invisible");
  showAnswer.classList.toggle("invisible");
  hideAnswer.classList.toggle("invisible");
});
//Hide answer
hideAnswer.addEventListener("click", () => {
  answer.classList.toggle("invisible");
  showAnswer.classList.toggle("invisible");
  hideAnswer.classList.toggle("invisible");
});

//Button for Darkmode
// buttonAddDarkMode.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark");
//   if (darkModeOn.classList.contains("invisible")) {
//     darkModeOn.classList.remove("invisible");
//     darkModeOff.classList.add("invisible");
//   } else {
//     darkModeOn.classList.add("invisible");
//     darkModeOff.classList.remove("invisible");
//   }
// });
