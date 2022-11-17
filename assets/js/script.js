var inputHSEl = document.querySelector("#inputHS");
document.querySelector('#inputHS').style.display = 'none';
var headerEl = document.querySelector("#header");
var displayMessageEl = document.querySelector("#displayMessage");
var currentScoreEl = document.querySelector("#currentScore");
var introEl = document.querySelector("#intro");
var initialsEL = document.querySelector("#initials");
// Buttons
var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var submitInitialsBtnEl = document.querySelector("#submitInitials-btn");
// Quiz Controls
var quizEl = document.querySelector("#quizContainer");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
// Global Variables 
var totalTime = 60;
var score = 0;
var highScores = [];
var interval;
// Quiz Questions
var quizQuestions = [
    {
        title: "What do you call a function contained in a object?",
        choices: ["function", "array", "property", "method"],
        answer: [3] 
    },
    {
        title: "Which operator is used to determine strict equal?",
        choices: ["==", "!==", "===", "="],
        answer: [2]
    },
    {
        title: "What data type returns a true or false value?",
        choices: ["boolean", "string", "number", "undefined"],
        answer: [0]
    },
    {
        title: "Which character terminates a statement?",
        choices: ["!", ";", ".", "^"],
        answer: [1] 
    }, 
    {
        title: "What method do you use to generate a random number between 0 and 1?",
        choices: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"],
        answer: [3]
    }, 
    
]
var questionAskedIndex = 0;


startBtnEl.addEventListener("click", function () {
    startTimer();
    startQuiz();
    show(timerEl);
});

function startTimer() {
    timerEl.textContent = "Timer " + totalTime;
    interval = setInterval(function() {
        if (totalTime > 0) {
        timerEl.textContent = "Timer " + totalTime;
        totalTime--;
        } 
        else if (totalTime===0) {
            timerEl.textContent = "Timer " + totalTime;
            hide(quizEl);
            show(inputHSEl);
            stopTimer();
        }
    }, 700);
}

function stopTimer() {
    clearInterval(interval);
}

function startQuiz() {
    hide(startBtnEl);
    hide(introEl);
    show(quizEl);
    show(headerEl);
    startQuestions();
}
function startQuestions() {
    var currentQuestion = quizQuestions[questionAskedIndex].title;
    questionsEl.textContent = currentQuestion;
    var CurrentQuestionAnswers = quizQuestions[questionAskedIndex].choices;
    for (i = 0; i < choicesEl.children.length; i++) {
        choicesEl.children[i].textContent = `${quizQuestions[questionAskedIndex].choices[i]}`;
    }
}

function checkAnswer(answer) {
    if (quizQuestions[questionAskedIndex].answer == answer.id) {
        score += 100;
        currentScoreEl.textContent = "Score " + score;
        displayMessageEl.textContent = "Correct!"; 
        setTimeout(() => {
            displayMessageEl.textContent = " ";
        }, 200); 
    }
    else {
        totalTime -= 10;
        displayMessageEl.textContent = "Incorrect!";
        setTimeout(() => {
            displayMessageEl.textContent = " ";
        }, 200); 
    }
}

choicesEl.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});

function nextQuestion() {
    questionAskedIndex++;
    if (questionAskedIndex < quizQuestions.length) {
        startQuestions();
    } else {
        stopTimer();
        hide(quizEl);
        document.querySelector('#inputHS').style.display = 'flex';
        hide(timerEl);
        currentScoreEl.innerHTML = "Final Score " + score;
    }
}

submitInitialsBtnEl.addEventListener("click", function() {
    var userInitials = initialsEL.value.trim();
    if (userInitials) {
        var userScore = {
            userInitials: userInitials,
            finalScore: score
        };
       var highScores = JSON.parse(localStorage.getItem("highscores"));
       if (!highScores) {
        highScores = [];
       }
       highScores.push(userScore);
       localStorage.setItem("highscores", JSON.stringify(highScores));
       window.location.href="index-scores.html";
    }
}
)

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}
