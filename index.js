const bodyElement = document.querySelector('[data-js="body"]');
const cardElement = document.querySelector('[data-js="card"]');
const addDarkMode = document.querySelector('[data-js="button-dark-mode"]');

addDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  cardElement.classList.add("dark");
});

console.log("Hi");

// darkMode.addEventListener("click", () => {
//     bodyElement.classList.add("dark");
//   });
// function switchDarkmode() {
//     if (buttonDarkMode = true) {

//     } else

// }

// function myFunction() {
//     let text = "Text" ;
//     demoText.textContent = text;
//   }
