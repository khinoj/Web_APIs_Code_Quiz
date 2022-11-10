//selecting card-bottom from the html
var cardBtnContainer = document.querySelector(".card-bottom");

//selecting start-button from the html
// var startBtnContainer = document.querySelector(".start-button");

//makes a button
var questionBtn = document.createElement("button");

const questions = [
    {
    Question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<script>","<scripting>","<js>"],
    answer: "<script>"
  },
  {
    Question: "How do you write Hello World in an alert box?",
    choices: ["alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')", "alert('Hello World')"],
    answer: "alert('Hello World')"
  },
  {
    Question: "How do you call a function named myFunction?",
    choices: ["call myFunction()", "myFunction()", "call function myFunction()", "callfunction[]"],
    answer: "myFunction()"
  }
];

var questionAnswer = "";

var questionIndex = 0;

// console.log(cardBtnContainer);

// function startbutton () {
//   var startButtonEl = document.querySelector('.start-button');
//   var starttext = document.createElement("button")
//   starttext.innerHTML = "Start The Quiz";
//   startButtonEl.appendChild(starttext);
//   starttext.addEventListener("onclick", startingGame);
// };


function startingGame () {

//  cardText is js var. looks for card-content in html
var cardText = document.querySelector(".card-content");

//clear the content for next questions and the card-content class and card bottom
cardBtnContainer.innerHTML = " ";
cardText.innerHTML = " ";

// creates and h2
var questionText = document.createElement("h2");

// taking the h2 and filling it with the Question array (object) text.
questionText.textContent = questions[questionIndex].Question;

// push the h2 to html and questiontext content.
cardText.appendChild(questionText);

for ( var i =0; i < questions[questionIndex].choices.length; i++) {
  var questionBtn = document.createElement("button");
  questionBtn.textContent = questions[questionIndex].choices[i];
  questionBtn.setAttribute("onclick", "questionClick(event)");
  cardBtnContainer.appendChild(questionBtn);
}
};

function questionClick(event) {
  var answerCheck = event.target;
  // console.log(answerCheck);
  // console.log(answerCheck.innerText, questions[questionIndex].answer)
  if (answerCheck.innerText !== questions[questionIndex].answer) {
    console.log("Wrong!")
  } else {
    var correctEl = document.createElement("p");
    correctEl.innerText = "Correct" 
    console.log("Correct")
  }
  questionIndex++
  startingGame();
}

// function btnclick () {
//   questionIndex++
//   console.log("Hello");
//   // if for answer.
//   startingGame();
//  }


// startbutton();
startingGame();

//put text inside button
// questionBtn.textContent = questions[questionIndex].choices[2]; 
//adds button to view on screen
// cardBtnContainer.appendChild(questionBtn); 