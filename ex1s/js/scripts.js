'use strict';

const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const total = document.getElementById("total");
const questions = document.getElementsByTagName("fieldset");

// set total points possible at page load
total.innerText = questions.length;

// call calculateScores function when submit button is clicked
quiz.addEventListener("submit", calculateScores);

function calculateScores(ev) {
  let score = 0;
  // loop through all items in the form
  for (let i = 0; i < quiz.length; i++) {
    // check if a form field is "checked" by the user
    if (quiz[i].checked) {
      // sum up all correct answers
      score += parseInt(quiz[i].value);
    }
  }
  // print final score to html
  result.innerText = score;
  // don't reload page on submit
  ev.preventDefault();
}
