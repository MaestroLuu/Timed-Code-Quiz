// var scores = localStorage.setItem("");
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
    questions.text(JSON.stringify(questionList[1].question));
    startTimer();
    displayAnswer();
}
  
function displayAnswer () {
    var answerChoice1 = $("<li>");
    answerChoice1.text(questionList[1].answer1);
    answerChoice1.append("<button class='answer-button'>1</button>");
    answerList.append(answerChoice1);

    var answerChoice2 = $("<li>");
    answerChoice2.text(questionList[1].answer2);
    answerChoice2.append("<button class='answer-button'>2</button>");
    answerList.append(answerChoice2);

    var answerChoice3 = $("<li>");
    answerChoice3.text(questionList[1].answer3);
    answerChoice3.append("<button class='answer-button'>3</button>");
    answerList.append(answerChoice3);

    
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