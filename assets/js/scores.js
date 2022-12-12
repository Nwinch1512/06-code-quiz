let highscoresOlEl = document.getElementById("highscores");
let clearBtn = document.getElementById("clear");

// function storeHighScores() {
//   let storedScore = JSON.parse(localStorage.getItem("finalScore"));
//   let storedInitial = JSON.parse(localStorage.getItem("initialsInput"));
//   let scoreEl = document.createElement("li");
//   scoreEl.setAttribute("id", highscore);
//   scoreEl.textContent = storedInitial + "- " + storedScore;
// }
// localStorage.setItem("storeHighScores", storeHighScores());

function getHighScores() {
  //retrieve highScores from local storage
  //if highScores is undefined, return empty array
  //else return highScores
}

function addHighScore(initials, score) {
  //get current highScores (call above method)
  //push new score object (like the question object) onto array
  //store new highScores array in local storage
}

function displayHighScores() {
  //get current highScores (call above method)
}

function clearHighScores(event) {
  //This is only needed if the button click would perform an action e.g. submit a form
  event.preventDefault();
  highscoresOlEl.textContent = "";
}

if (highscoresOlEl) {
  displayHighScores();
}

if (clearBtn) {
  clearBtn.addEventListener("click", clearHighScores);
}
