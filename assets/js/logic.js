//Acceptance criteria
//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Bringing in HTML as variables to use in JS
let wrapper = document.getElementById("wrapper");
let startScreen = document.getElementById("start-screen");
let endScreen = document.getElementById("end-screen");
let feedbackDiv = document.getElementById("feedback");
let startBtnEl = document.getElementById("start");
let submitInitialsBtn = document.getElementById("submit");
//This is from highscores.html file
// let highScoresEl = document.getElementById("highscores");
let timeLeftEl = document.getElementById("time");
let questionsDiv = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let score = parseInt(timeLeftEl);
let highScore = 0;
let finalScoreSpan = document.getElementById("final-score");
let currentQuestionIndex = 0;
let timeLeft = 75;

let finalScore = 0;

// Set up a function that loops over questions array and prints question text out to console
console.log(questions);
console.log(questions.length);
let text;
startBtnEl.addEventListener("click", startQuiz);

//Event listener added to test end screen and scores screen
// document
//   .getElementById("skip-to-end")
//   .addEventListener("click", displayEndScreen);

function startQuiz() {
  timerCountdown();
  showQuestions();
}

//Accessing questions from object
let firstQuestion = questions[0];
let secondQuestion = questions[1];
let thirdQuestion = questions[2];
let fourthQuestion = questions[3];
let fifthQuestion = questions[4];

function showQuestions() {
  choices.textContent = "";
  feedbackDiv.textContent = "";
  feedbackDiv.classList.add("hide");
  startScreen.textContent = "";
  endScreen.classList.add("hide");
  let question = questions[currentQuestionIndex];
  questionTitle.textContent = question.title;
  for (let i = 0; i < question.choices.length; i++) {
    let choicesBtn = document.createElement("button");
    choicesBtn.classList.add("choices-button");
    let text = i + 1 + ". " + question.choices[i];
    choicesBtn.textContent = text;
    choicesBtn.setAttribute("index", i);
    choicesBtn.onclick = submitAnswer;
    choices.appendChild(choicesBtn);
  }
}

function submitAnswer(event) {
  let question = questions[currentQuestionIndex];
  let correctAnswer = question.answer;
  let answerIndex = event.target.getAttribute("index");
  let feedbackText = document.createElement("p");
  let submittedAnswer = question.choices[answerIndex];
  //Need to append message to div as per demo and play sound file.  Need to remove time from time element if answer wrong.
  if (submittedAnswer === correctAnswer) {
    feedbackText.textContent = "You're correct!";
    feedbackDiv.appendChild(feedbackText);
    feedbackDiv.classList.remove("hide");
    setTimeout(nextQuestion, 2000);
  } else {
    feedbackText.textContent = "You're wrong!";
    feedbackDiv.appendChild(feedbackText);
    feedbackDiv.classList.remove("hide");
    timeLeft > 15 ? (timeLeft = timeLeft - 15) : (timeLeft = 0);
    setTimeout(nextQuestion, 2000);
  }
}

// Move user onto next question
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestions();
  } else {
    displayEndScreen();
  }
}

function displayEndScreen() {
  stopCountdown();
  finalScore = timeLeft;
  timeLeftEl.textContent = finalScore;
  finalScoreSpan.textContent = finalScore;
  questionTitle.classList.add("hide");
  questionsDiv.classList.add("hide");
  endScreen.classList.remove("hide");
}

submitInitialsBtn.addEventListener("click", submitInitials);

function submitInitials() {
  let initialsInput = document.getElementById("initials").value;

  if (initialsInput === "") {
    return;
  } else {
    addHighScore(initialsInput, finalScore);
    moveToHighScoresPage();
  }
}

function moveToHighScoresPage() {
  window.location.href = "highscores.html";
}

let setTimer;

function timerCountdown() {
  timeLeftEl.textContent = timeLeft;

  setTimer = setInterval(function () {
    //When timeleft is great than 0 second
    if (timeLeft > 0) {
      //Decrement timeleft down
      timeLeft--;
    } else {
      clearInterval(setTimer);
    }
    timeLeftEl.textContent = timeLeft;
  }, 1000);
}

function stopCountdown() {
  clearInterval(setTimer);
}
