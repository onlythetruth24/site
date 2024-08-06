const questions = [
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Opposes family separation and allows spouses to get a green card', value: "Harris" },
      { text: 'Has a full immigration crackdown', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Supports abortion rights', value: "Harris" },
      { text: 'Endorses a national abortion ban', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Adds 3 billion to the Climate Fund', value: "Harris" },
      { text: 'Removes any bans on fossil fuels, oil, and gas projects', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Increases taxes and has no across the board tariffs', value: "Harris" },
      { text: 'Lowers taxes and has across the board tariffs', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Prohibits and confiscates commonly-owned semi-automatic firearms', value: "Harris" },
      { text: 'Protects gun rights', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Forgives student debt', value: "Harris" },
      { text: 'Does not forgive student debt', value: "Trump" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Ends the Israel/Gaza war quickly (no matter the outcome)', value: "Trump" },
      { text: 'Thinks Israel has a right to defend itself', value: "Harris" }
    ]
  },
  {
    question: "Would you rather have a government that...",
    options: [
      { text: 'Increases funding for public education', value: "Harris" },
      { text: 'Cuts the Education Department and lets states handle it', value: "Trump" }
    ]
  }
];

var quizContainer = document.querySelector('#quiz');
var resultsContainer = document.querySelector('#results');
var submitButton = document.querySelector('#submitButton');
var startButton = document.getElementById('start-quiz');
var quizIntro = document.querySelector('#quizIntro');
var resultsContainer = document.getElementById ('other-results'); 


startButton.onclick = function() {
  var words = document.createElement('p'); 
  words.textContent = "results"; 
  resultsContainer.appendChild(words);
  quizIntro.style.display = 'block';
  quizContainer.style.display = 'block';
  submitButton.style.display = 'block';
  quiz(myQuestions, quizContainer, resultsContainer, submitButton);
};

// submitButton.onclick = function() {
//   $("#heading").show();
//   var image = document.getElementById("image");
//   image.style.display = "block";

// }

function image(){
  document.body.style.backgroundImage= "url('result.png')";
}