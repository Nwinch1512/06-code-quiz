//Acceptance criteria
//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Bringing in HTML as variables to use in JS
let startBtnEl = document.getElementById("start");
//This is from highscores.html file
// let highScoresEl = document.getElementById("highscores");
let timeLeftEl = document.getElementById("time");

startBtnEl.addEventListener("click", loadQuestions);

// Setting up function that starts a time and loads first question
function loadQuestions() {}

function timerCountdown() {
  let timeLeft = 75;
  timeLeftEl.textContent = timeLeft;

  let setTimer = setInterval(function () {
    //When 'timeleft is great than 1 second
    if (timeLeft > 0) {
      //Decrement timeleft down
      timeLeft--;
      timeLeftEl.textContent = timeLeft;
    } else {
      // When timeleft gets to 0, set timeleftel to empty string
      timeLeftEl = "";
      //Use clear interval to stop timer
      clearInterval(setTimer);
    }
  }, 1000);
}

timerCountdown();

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
//NW. Need to use a prompt window to save initials.
// NW. Need to develop high scores section.  Maybe use document.create to create li elements under ol.  Use append child method to append to ol.  Look back at append child activities from week 6 class 1.  Use el.textContent to set value for each score element within loop.  Set up as node list for all high score elements.  Then loop over node list and populate high scores based on min max if logic.  e.g.
// let currScore = 0; let maxScore = 0; (if currScore > maxScore) {maxScore = currScore}
// el.textContent = maxScore;
