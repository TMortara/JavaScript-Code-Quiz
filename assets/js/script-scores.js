// Buttons
var clearScoresBtnEl = document.querySelector("#clearScores-btn");
var restartBtnEl = document.querySelector("#restart-btn");

// Scores List
var highScoresEl = document.querySelector("#scores-container");

// High scores
function renderHighscores() {
    highScoresEl.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    for (var i = 0; i < highScores.length; i++) {
        var scoreLine = document.createElement("li");
        scoreLine.textContent = `${highScores[i].userInitials} - ${highScores[i].finalScore}`;
        scoreLine.setAttribute("data-index", i);
        highScoresEl.appendChild(scoreLine);
}
}
renderHighscores();

function removeHistory(event){
    event.preventDefault()
    localStorage.setItem('highscores', JSON.stringify([]))
    window.location.reload()
}

document.getElementById('clearScores-btn').addEventListener('click', removeHistory)

// TODO: Set new submission to local storage
