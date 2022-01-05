// var scores = localStorage.setItem("");
var secondsLeft = 60;
var startBtn = $(".start-button");
var questions = $(".questions");
var answers = $(".answers");
var timerEl = $(".timer-count");
var isWin = false;
var timerCount;

var questionList = [
    {
        question: "What basic language does web development utilize?",
        answer1: "CSS",
        answer2: "HTML",
        answer3: "JS"
    }, 
    {
        question: "How much coffee do you get in a tall Starbucks?",
        answer1: "12oz",
        answer2: "16oz",
        answer3: "24oz"
    }
];

    // questions.text(JSON.stringify(questionList[1].question));
    
    // var answerChoice = $("<li>");
    // answerChoice.text(JSON.stringify(questions.children[0].children[0]));
    // answerChoice.append("<button></button>");
    // answers.append(answerChoice);
    // answers.text = answerChoice;
    // });


function startGame() {
    // isWin = false;
    timerCount = 60;
    startBtn.disabled = true;
    questions.text(JSON.stringify(questionList[1].question));
    startTimer();
}
  

function startTimer() {
    var timer = setInterval(function() {
      timerEl.text(timerCount);
      timerCount--;
    //   if (timerCount >= 0) {
    //     if (isWin && timerCount > 0) {
    //        clearInterval(timer);
    //       winGame();
    //     // }
    //   }
      
    //   if (timerCount <= 0) {
    //     clearInterval(timer);
    //     // loseGame();
    //   }
    }, 1000);
} 

startBtn.on("click", startGame);


// check answer function
// input function for local storage
// remove question&answers and replace with new questions function

// answers.on("click", checkAnswer);
// 
// function checkAnswer(event) {
//     var btnClick = $(event.target);

// }
// 