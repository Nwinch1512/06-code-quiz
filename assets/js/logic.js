//Acceptance criteria
//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Bringing in HTML as variables to use in JS
let startBtnEl = document.getElementById("start");
//This is from highscores.html file
// let highScoresEl = document.getElementById("highscores");
let timeLeftEl = document.getElementById("time");
// let questions = getElementById("questions");
// let choices = getElementById("choices");
let score = 0;

startBtnEl.addEventListener("click", timerCountdown, displayQuestions);

// Setting up function that loads first question.  Need to figure out where to get questinos from.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
function displayQuestions() {
  //load first question
  //Set up buttons for each choice - looks like there are 4 choices for each question.
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
}

function timerCountdown() {
  let timeLeft = 5;
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
      enterScore();
      //Use clear interval to stop timer
      clearInterval(setTimer);
      //Call displayQuestions function
      //displayQuestions();
    }
  }, 1000);
}

// When the game ends, it should display their score and give the user the ability to save their initials and their score
function enterScore() {
  //End quiz when timer reaches zero if(timeEl===0){end game; display score, let user save initials and their score}
  let finalScore = prompt(`Your score is ${score}!\nEnter your initials here:`);
  console.log(finalScore);
}

// function checkAnswer() {
//   let timeLeft = timerCountdown();
//   if (answer === true) {
//     score = score + 1;
//   } else {
//     score = score - 1;
//     timeLeft = timeLeft - 20;
//   }
// }

function displayScore() {}

// NW. Need to develop high scores section.  Maybe use document.create to create li elements under ol.  Use append child method to append to ol.  Look back at append child activities from week 6 class 1.  Use el.textContent to set value for each score element within loop.  Set up as node list for all high score elements.  Then loop over node list and populate high scores based on min max if logic.  e.g.
// let currScore = 0; let maxScore = 0; (if currScore > maxScore) {maxScore = currScore}
// el.textContent = maxScore;
