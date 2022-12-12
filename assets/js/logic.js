//Acceptance criteria
//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Bringing in HTML as variables to use in JS
let startScreen = document.getElementById("start-screen");
let endScreen = document.getElementById("end-screen");
let feedbackDiv = document.getElementById("feedback");
let startBtnEl = document.getElementById("start");
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
let timeLeft = 15;

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
    console.log(correctAnswer);
  }
}

// function removeBtns(event) {
//   questions[currentQuestionIndex].splice(event.target.getAttribute("index"), 1);
// }

// function resetQuestions(event) {
//   let choicesBtn = documentQuerySelectorAll("choices-button");
//   for (let i = 0; i < question.choices.length; i++) {
//     let text = i + 1 + ". " + question.choices[i];
//     choicesBtn.textContent = text;
//   }
// }

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
    score += 1;
    setTimeout(nextQuestion, 2000);
    return;
  } else {
    feedbackText.textContent = "You're wrong!";
    feedbackDiv.appendChild(feedbackText);
    feedbackDiv.classList.remove("hide");
    if (score > 0) score -= 1;
    setTimeout(nextQuestion, 2000);
    return;
  }
  console.log(score);

  // Move user onto next question

  showQuestions();
  return score, submittedAnswer, correctAnswer;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
  } else if (currentQuestionIndex === questions.length) {
    //Store score
    //Allow user to input initials
    //Display end screen
  }
  showQuestions();
}

//

// calcScore(){
//   let score = 0;
// };

// console.log(questions.answer[0]);

// function displayQuestion(questionsArr) {
//   let firstQuestion = questions[0];
// }

// let choicesEntries = Object.entries(questions);
// for (let [key, { title, choices, answer }] of choicesEntries) {
//   let firstChoices = questions[0];
//   console.log(firstChoices.choices);
//   firstChoices.choices.forEach((choice) => {
//     console.log(choice);
//   });
//   console.log(`${key}:${choices}`);
// }
// Object.entries(questions.choices).forEach(([key, value]) => {
//   console.log(key, value);
// });

// let questionIndex = 0;
// let questionsEntries = Object.entries(questions);
// for (let [key, { title, choices, answer }] of questionsEntries) {
//   // console.log(`${key}:${title}`);
//   let keyAsInt = parseInt(key);
//   console.log(keyAsInt);
//   if (keyAsInt === questionIndex) {
//     console.log(`${keyAsInt + 1}: ${title}`);
//   }
// }

// Setting up function that loads first question.  Need to figure out where to get questions
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
function displayQuestions() {
  //load first question.  HTML class set up to show.  Need to add class for hide.
  // hide each question classlist.add('hide');
  // for (let questionText of Object.keys(questionsText)) {
  //   // let currentQuestion = questionsText.question[i];
  //   // let { answers, correctAnswer, question } = currentQuestion;
  //   console.log(questionText);
}

// for (i = 0; i < questionsText.length; i++) {
//   let currentQuestion = questionsText.question[i];
//   let currentOptions = questionsText.answers[i];
//   let btnEl = document.createElement("button");
//   btnEl.dataset.index = i;
//   currentOptions.appendChild(btnEl);
//   choices.appendChild(currentOptions);
//   // btnEl.textContent = `${i + 1}${currentQuestion}`;
// }
//let currentQuestion = questions[i];
// classlist.add('show') for question in array based on array index
//Set up buttons for each choice - looks like there are 4 choices for each question. Need to append buttons to heading.
//Add eventlistener to choice which takes the user to the next question.
//Take away time from timeLeftEl each time answer incorrect
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
}
// When the game ends, it should display their score and give the user the ability to save their initials and their score
// function displayScore() {
//   //End quiz when timer reaches zero if(timeEl===0){end game; display score, let user save initials and their score}

// if ((currentQuestionIndex = currentQuestionIndex.length)) {
//   endScreen.classList.remove("hide");
//   let initialInput = document.createElement("input");
// }
//   let finalScore = prompt(`Your score is ${score}!\nEnter your initials here:`);
//   console.log(finalScore);
// }

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
