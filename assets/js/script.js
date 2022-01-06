var secondsLeft = 60;
var startBtn = document.querySelector(".start-button");
var questions = document.querySelector(".questions");
var scoresList = document.querySelector(".scores");
var answers = document.querySelector(".answers");
var timerEl = document.querySelector(".timer-count");
var answerBtn = document.querySelectorAll(".answer-button");
var submitBtn = document.querySelector("#submit");
var isWin = false;
var index = 0;
var timerCount;
var questionList = [
    {
        question: "What basic language does web development utilize?",
        options: ["CSS", "HTML", "JS", "English"],
        answer: "HTML",
    }, 
    {
        question: " The terms 'function' and 'var' are known as:",
        options: ["Keywords", "Data types", "Declaration Statements", "Prototype"],
        answer: "Declaration Statements",
    },
    {
        question: "What information can you store in a variable?",
        options: ["Strings", "Numbers", "Boolean", "All of the Above"],
        answer: "All of the Above",
    },
    {
        question: "How do you create an array?",
        options: ["var name = ('1,2,3')", "var name = ['1','2','3']", "var name = {'1', '2', '3'}"],
        answer: "var name = ['1','2','3']",
    },
    {
        question: "What are 'for' loops used for?",
        options: ["To iterate over arrays", "To target a specific var", "To designate an 'html' element"],
        answer: "To iterate over arrays",
    },

];

function startGame() {
    timerCount = 100;
    startBtn.disabled = true;
    startTimer();
    displayQuestion();
}
  
function displayQuestion () {
    questions.innerHTML = "";
    
    if (index >= questionList.length) {
        alert("Game over!");
        return;
    }
    
    // sets variable to account for changing array index
    var questionCheck = questionList[index];
    
    // displays first question within array
    var h2 = document.createElement("h2");
    h2.textContent = questionList[index].question;
    questions.append(h2);

    //creates new elements from 
    var optionsList = document.createElement("div");
    optionsList.classList.add("optionsList");
    questions.appendChild(optionsList);

    for (var i = 0; i < questionCheck.options.length; i++) {    
        var optionText = questionCheck.options[i];
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("answer-button");
        answerBtn.textContent = optionText;

        optionsList.appendChild(answerBtn);
    }
}

function startTimer() {
    var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        if (index >= questionList.length && timerCount > 0) {
           clearInterval(timer);
           var score = timerCount;
           localStorage.setItem("scores", score);
           endGame();
        }
      }
      
      if (timerCount <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
} 

function endGame() {
    questions.innerHTML = "";
    // reveals hidden display with initials input when game ends
    document.getElementById("initialsInput").style.display = "unset";
}

function checkConditions(event) {
    if (event.target.matches(".answer-button")) {
        index += 1;
        timerCount = timerCount - 10;
    }
    
    displayQuestion();
}  

startBtn.addEventListener("click", startGame);
questions.addEventListener("click", checkConditions);

// when submit button is clicked, values will be stored in the local storage and retrieved
// values from the localStorage are displayed on scores section within web application
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = document.getElementById("initials").value;
    localStorage.setItem("initials", initials);

    var score = localStorage.getItem("scores");

    var scoreLi = document.createElement("h4");
    scoreLi.classList.add("scoreList");
    scoreLi.textContent = (initials + " " + score);


    scoresList.appendChild(scoreLi);

    if (initials === "") {
        alert("error", "initials cannot be blank");
    } 

});

// known issues needed to debug:
// - scores are saved within localStorage, but are not remaining on screen during reboot
// - when selecting answers, all button selections within the quiz will penalize user irregardless of correctness