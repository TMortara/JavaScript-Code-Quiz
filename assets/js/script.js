var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");

var quizQuestions = [
    {
        question: "What is a function contatined in a object called?",
        answer: [
            {text: "function", correct: false},
            {text: "array", correct: false},
            {text: "property", correct: false},
            {text: "method", correct: true}
        ]
    },
    {
        question: "Which operator is used to determine strict equal?",
        answer: [
            {text: "==", correct: false},
            {text: "!==", correct: false},
            {text: "===", correct: true},
            {text: "=", correct: false}
        ]
    },
    {
        question: "What data type returns a true or false value?",
        answer: [
            {text: "boolean", correct: true},
            {text: "string", correct: false},
            {text: "number", correct: false},
            {text: "undefined", correct: false}
        ]
    },
    {
        question: "Which character terminates a statement?",
        answer: [
            {text: "!", correct: false},
            {text: ";", correct: true},
            {text: ".", correct: false},
            {text: "^", correct: false}
        ]
    }, 
    {
        question: "What method do you use to generate a random number between 0 and 1?",
        answer: [
            {text: "Math.round()", correct: false},
            {text: "Math.ceil()", correct: false},
            {text: "Math.floor()", correct: false},
            {text: "Math.random()", correct: true}
        ]
    }, 
    
]

var timer = 0;
var totalTime = 60;
var score = 0;

//start time after click of start button
function startTimer() {
    timerEl.textContent = totalTime;
    setInterval(function() {
        if (totalTime >= 0) {
        timerEl.textContent = totalTime;
        totalTime--;
        } 
    }, 500);

}

function stopTimer() {
    clearInterval(interval);
}

startBtnEl.addEventListener("click", function () {
    // hide(welcomeEl);
    startTimer();
    // renderQuestion();
    // show(quizEl);
});