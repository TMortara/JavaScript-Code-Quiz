var headerEl = document.querySelector("#header");
var displayMessageEl = document.querySelector("#displayMessage");
var currentScoreEl = document.querySelector("#currentScore");
var introEl = document.querySelector("#intro");
var inputHSEl = document.querySelector("#inputHS");
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
    // setNextQuestion();
    // renderQuestion();
    // show(quizEl);
});

function startTimer() {
    timerEl.textContent = "Timer " + totalTime;
    interval = setInterval(function() {
        if (totalTime >= 0) {
        timerEl.textContent = "Timer " + totalTime;
        totalTime--;
        } 
    }, 500); 
//CHANGE TIMER INTERVAL
}

function stopTimer() {
    clearInterval(interval);
}

function startQuiz() {
    hide(startBtnEl);
    hide(introEl);
    show(quizEl);
    show(header);
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
        score += 1;
        currentScoreEl.textContent = "Current Score " + score;
        displayMessageEl.textContent = "Correct!";
    }
    else {
        totalTime -= 10;
        displayMessageEl.textContent = "Incorrect!";
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
        show(inputHSEl);
        hide(timerEl);
        currentScoreEl.innerHTML = "Final Score " + score;
    }
}









function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}