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
  let storedScoresArray = JSON.parse(localStorage.getItem("scoresArrayKey"));
  //if highScores is undefined, return empty array
  if (storedScoresArray) {
    return storedScoresArray;
  }
  //else return highScores
  else {
    return [];
  }
}

function addHighScore(initials, score) {
  //get current high score list from local storage by calling above method
  let storedScoresArray = getHighScores();
  //push new score object (like the question object) onto array
  storedScoresArray.push({ initials, score });
  //store new highScores array in local storage
  localStorage.setItem("scoresArrayKey", JSON.stringify(storedScoresArray));
}

function displayHighScores() {
  //get current highScores (call above method)
  let highScores = getHighScores();
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  //loop and display
  for (let i = 0; i < highScores.length; i++) {
    let curHighScore = highScores[i];

    let li = document.createElement("li");
    li.textContent = `${curHighScore.initials.toUpperCase().trim()} - ${
      curHighScore.score
    }`;
    highscoresOlEl.appendChild(li);
  }
}

function clearHighScores() {
  localStorage.removeItem("scoresArrayKey");
  highscoresOlEl.textContent = "";
}

if (highscoresOlEl) {
  displayHighScores();
}

if (clearBtn) {
  clearBtn.addEventListener("click", clearHighScores);
}
