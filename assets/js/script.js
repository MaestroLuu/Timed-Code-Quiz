var secondsLeft = 60;
var startBtn = document.querySelector(".start-button");
var questions = document.querySelector(".questions");
var answers = document.querySelector(".answers");
var timerEl = document.querySelector(".timer-count");
var answerBtn = document.querySelectorAll(".answer-button");
var isWin = false;
var index = 0;
var timerCount;

var questionList = [
    {
        question: "What basic language does web development utilize?",
        options: ["CSS", "HTML", "JS"],
        answer: "HTML",
    }, 
    {
        question: "How much coffee do you get in a tall Starbucks?",
        options: ["12oz", "16oz", "24oz"],
        answer: "12oz",
    },
];

function startGame() {
    // isWin = false;
    timerCount = 60;
    startBtn.disabled = true;
    startTimer();
    displayQuestion();
}

function checkConditions(event) {
    // IF user clicked an answer-btn
    if (event.target.matches(".answer-button")) {
        alert(event.target.dataset.answer === "1");
        index += 1;
        displayQuestion();
    }
}  
  
function displayQuestion () {
    questions.innerHTML = "";
    
    if (index >= questionList.length) {
        alert("Game over!");
        return;
    }
    
    var questionCheck = questionList[index];

    var h2 = document.createElement("h2");
    h2.textContent = questionList[index].question;
    questions.append(h2);

    var optionsList = document.createElement("div");
    optionsList.classList.add("optionsList");
    questions.appendChild(optionsList);

    for (var i = 0; i < questionCheck.options.length; i++) {    
        var optionText = questionCheck.options[i];
        var btn = document.createElement("button");
        btn.classList.add("answer-button");
        btn.textContent = optionText;

        if (optionText === questionCheck.answer) {
            btn.dataset.answer = 1;
        }   else {
            btn.dataset.answers = 0;
        }
        optionsList.appendChild(btn);
    }
}

function startTimer() {
    var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
           clearInterval(timer);
        //   winGame();
        }
      }
      
      if (timerCount <= 0) {
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
} 

function endGame() {
    prompt("What are your first and last initials?");
}


startBtn.addEventListener("click", startGame);
btn.addEventListener("click", checkConditions);
answerBtn.addEventListener("click", checkConditions);

// localStorage.setItem("initials", scores);

// input function for local storage