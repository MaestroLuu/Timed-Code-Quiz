
var secondsLeft = 60;
var startBtn = $(".start-button");
var questions = $(".questions");
var answers = $(".answers");
var timerEl = $(".timer-count");
var isWin = false;
var timerCount;
var answerList = $(".answerList");

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



function startGame() {
    // isWin = false;
    timerCount = 60;
    startBtn.disabled = true;
    startTimer();
    displayAnswer();
}
  
function displayAnswer () {
    for (var i = 0; i < questionList.length; i++) {
    
        questions.text(questionList[i].question);
        var answerChoice1 = $("<li>");

        answerChoice1.text(questionList[i].answer1);
        answerChoice1.append("<button class='answer-button correct-answer'>1</button>");
        answerList.append(answerChoice1);
    
        var answerChoice2 = $("<li>");
        answerChoice2.text(questionList[i].answer2);
        answerChoice2.append("<button class='answer-button incorrect-answer'>2</button>");
        answerList.append(answerChoice2);
    
        var answerChoice3 = $("<li>");
        answerChoice3.text(questionList[i].answer3);
        answerChoice3.append("<button class='answer-button incorrect-answer'>3</button>");
        answerList.append(answerChoice3);    
      } 
    
    // When the user clicks on the button that correlates with their selected answer
    // if the class = correct-answer, the display function will move to the next
    // question in the array w/o penalty. If it is an incorrect-answer, the timer
    // will lose 10s and the display function will still move to the next question 

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

function endGame() {
    prompt("What are your first and last initials?");
}

startBtn.on("click", startGame);

// localStorage.setItem("initials", scores);

// check answer function
// input function for local storage
// remove question&answers and replace with new questions function

// answers.on("click", checkAnswer);
// 
// function checkAnswer(event) {
//     var btnClick = $(event.target);

// }
// 