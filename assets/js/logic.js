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
let timeLeft = 25;
let scoresArray = [];

// Set up a function that loops over questions array and prints question text out to console
console.log(questions);
console.log(questions.length);
let text;
startBtnEl.addEventListener("click", startQuiz);

function startQuiz() {
  timerCountdown();
  showQuestions();
}

//Trying out forEach
// questions.forEach(myFunction);
// function myFunction(question, index) {
//   text += index + ": " + question + "<br>";
//   console.log(text);
// }

// for (let question of Object.values(questions)) {
//   console.log(Object.values(question));
//   let individualQuestion = Object.values(question);
//   let { question, answer, correctAnswer } = individualQuestion;
//   console.log(question);
// }

//Accessing questions from object
let firstQuestion = questions[0];
let secondQuestion = questions[1];
let thirdQuestion = questions[2];
let fourthQuestion = questions[3];
let fifthQuestion = questions[4];

function displayChoices(choicesArr) {
  choicesArr.choices.forEach((choice) => {
    console.log(choice);
  });
  return;
}

console.log(firstQuestion.title);
let firstChoices = displayChoices(questions[0]);
console.log(secondQuestion.title);
let secondChoices = displayChoices(questions[1]);
console.log(thirdQuestion.title);
let thirdChoices = displayChoices(questions[2]);
console.log(fourthQuestion.title);
let fourthChoices = displayChoices(questions[3]);
console.log(fifthQuestion.title);
let fifthChoices = displayChoices(questions[4]);

console.log(questions.length);

function showQuestions() {
  choices.textContent = "";
  feedbackDiv.textContent = "";
  feedbackDiv.classList.add("hide");
  startScreen.textContent = "";
  endScreen.classList.add("hide");
  let question = questions[currentQuestionIndex];
  questionTitle.textContent = question.title;
  let correctAnswer = question.answer;
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
  // localStorage.getItem("choicesBtn");
  let question = questions[currentQuestionIndex];
  let correctAnswer = question.answer;
  let answerIndex = event.target.getAttribute("index");
  let feedbackText = document.createElement("p");
  console.log(answerIndex);
  let submittedAnswer = question.choices[answerIndex];
  console.log(submittedAnswer);
  //Need to append message to div as per demo and play sound file.  Need to remove time from time element if answer wrong.
  if (submittedAnswer === correctAnswer) {
    feedbackText.textContent = "You're correct!";
    feedbackDiv.appendChild(feedbackText);
    feedbackDiv.classList.remove("hide");
    setTimeout(nextQuestion, 2000);
    return;
  } else {
    feedbackText.textContent = "You're wrong!";
    feedbackDiv.appendChild(feedbackText);
    feedbackDiv.classList.remove("hide");
    timeLeft > 15 ? (timeLeft = timeLeft - 15) : (timeLeft = 0);
    setTimeout(nextQuestion, 2000);
    return timeLeft;
  }

  let finalScore = submitAnswer();
  console.log(finalScore);

  // // Move user onto next question

  // showQuestions();
  // return score, submittedAnswer, correctAnswer;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
  }
  if (currentQuestionIndex === questions.length) {
    finalScore = timeLeft;
    displayEndScreen();
    return finalScore;
    //Store score
    //Allow user to input initials
    //Display end screen
  }
  showQuestions();
}

function displayEndScreen() {
  timeLeftEl = finalScore;
  questionTitle.classList.add("hide");
  questionsDiv.classList.add("hide");
  endScreen.classList.remove("hide");
  submitInitialsBtn.addEventListener("click", submitInitials);
}

function submitInitials() {
  let finalScore = nextQuestion();
  console.log(finalScore);
  let initialsInput = document.getElementById("initials").value;
  if (initialsInput === "") {
    return;
  }
  console.log(initialsInput);
}
// scoresArray.push(intialsEntered, finalScore);
// initialsEntered = "";

// calcScore(){
//   let score = 0;
// };
let questionCount = 0;
// Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
let questionInterval = setInterval(function () {
  // If there are no more words left in the message
  if (questions[questionCount] === undefined) {
    // Use `clearInterval()` to stop the timer
    clearInterval(questionInterval);
  } else {
    // Display one word of the message
    questions.textContent = questions[questionCount];
    questionCount++;
  }
}, 1000);

function timerCountdown() {
  timeLeftEl.textContent = timeLeft;

  let setTimer = setInterval(function () {
    //When timeleft is great than 0 second
    if (timeLeft > 0) {
      //Decrement timeleft down
      timeLeft--;
      timeLeftEl.textContent = timeLeft;
    } else {
      // When timeleft gets to 0, set timeleftel to empty string
      timeLeftEl = "";
      // displayScore();
      //Use clear interval to stop timer
      clearInterval(setTimer);
      //Call displayQuestions function
      //displayQuestions();
    }
  }, 1000);
}

//function to check high score
function checkScore(score, highScore) {
  if (score > highScore) {
    highScore = score;
  } else highScore = highScore;
  console.log(`The highest score is ${highScore}`);
  return highScore;
}

let high = checkScore(12, 32);
console.log(high);

// When the game ends, it should display their score and give the user the ability to save their initials and their score
// function displayScore() {
//   //End quiz when timer reaches zero if(timeEl===0){end game; display score, let user save initials and their score}

// function checkAnswer() {
//   let timeLeft = timerCountdown();
//   if (answer === true) {
//     score = score + 1;
//   } else {
//     score = score - 1;
//     timeLeft = timeLeft - 20;
//   }
// }

// function displayScore() {}

// NW. Need to develop high scores section.  Maybe use document.create to create li elements under ol.  Use append child method to append to ol.  Look back at append child activities from week 6 class 1.  Use el.textContent to set value for each score element within loop.  Set up as node list for all high score elements.  Then loop over node list and populate high scores based on min max if logic.  e.g.
// let currScore = 0; let maxScore = 0; (if currScore > maxScore) {maxScore = currScore}
// el.textContent = maxScore;
