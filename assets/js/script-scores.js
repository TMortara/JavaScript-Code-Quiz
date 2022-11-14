// Buttons
var clearScoresBtnEl = document.querySelector("#clearScores-btn");
var restartBtnEl = document.querySelector("#restart-btn");

// Scores List
var highScoresEl = document.querySelector("#scores-container");
var scoresInputEl = document.querySelector("#scoresInput");

// High scores
function renderHighscores() {
    scoresInputEl.innerHTML = " ";
    highScores = JSON.parse(localStorage.getItem("highscores"));
    for (var i = 0; i < highScores.length; i++) {
        var scoreLine = highScores[i];
        var li = document.createElement("li");
        li.textContent = highScores;
        li.setAttribute("data-index", i);
        highScoresEl.appendChild(li);
}
}
// TODO: Set new submission to local storage
