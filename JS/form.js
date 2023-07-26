//Gettings Elements from HTML for creating new Question
const newQuestionForm = document.querySelector('[data-js="form"]');
const bodyForm = document.querySelector('[data-js="body-form"]');

//Gettings Elements from HTML for counting Text
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const countParagraphQuestion = document.querySelector(
  '[data-js="question-count"]'
);
const countParagraphAnswer = document.querySelector('[data-js="answer-count"]');

//Add Eventlistener to Submit-Button
newQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const newCard = document.createElement("section");
  newCard.innerHTML = `
  <button class="card__bookmark" data-js="bookmark">
    <svg
      data-js="bookmark-icon"
      role="img"
      aria-label="Bookmark this question"
      xmlns="http://www.w3.org/2000/svg"
      height="1.5rem"
      viewBox="0 0 384 512"
    >
      <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        fill="#083248"
        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
      />
    </svg>
    <svg
      class="invisible"
      data-js="bookmarked-icon"
      role="img"
      aria-label="Bookmarked question"
      xmlns="http://www.w3.org/2000/svg"
      height="1.5rem"
      viewBox="0 0 384 512"
    >
      <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        fill="#083248"
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      />
    </svg>
  </button>
  <span>${data.question}</span>
  <button class="button-card" data-js="show-answer-button">
    Show answer
  </button>
  <button class="button-card invisible" data-js="hide-answer-button">
    Hide answer
  </button>
  <p class="card__answer invisible" data-js="answer">${data.answer}</p>
  <ul class="card__list">
    <li class="list__item html">${data.tag}</li>
  </ul>
  `;
  newCard.classList.add("card", "card-new");
  newCard.setAttribute("data-js", "card");
  bodyForm.append(newCard);
});

//Funktion for Counting Question-Input
function characterCountQuestion() {
  const maxLength = 150;
  const inputLength = questionInput.value.length;
  // inputLength = answerInput.value.length;
  const remainingLength = maxLength - inputLength;
  countParagraphQuestion.textContent = `${remainingLength} of 150 characters`;
}

//Funktion for Counting Answer-Input
function characterCountAnswer() {
  const maxLength = 150;
  inputLength = answerInput.value.length;
  const remainingLength = maxLength - inputLength;
  countParagraphAnswer.textContent = `${remainingLength} of 150 characters`;
}

// Input Event for Question
question.addEventListener("input", (event) => {
  characterCountQuestion();
});

// Input Event for Answer
answer.addEventListener("input", (event) => {
  characterCountAnswer();
});
