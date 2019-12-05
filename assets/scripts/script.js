var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
   {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
   },
   {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
   },
   {
      title: "Choose the element that is optional in a for loop. ",
      choices: ["i=0", "i<n", "i++", "var"],
      answer: "var"
   },
   {
      title: "What do we use to connect CSS, HTML, and JavaScript?",
      choices: ["VS Code", "Web Browser", "Cookies", "Local Storage"],
      answer: "Web Browser"
   },
   {
      title: "An object in JavaScript is stored in _______-value pairs",
      choices: ["key", "var", "string", "object"],
      answer: "key"
   },



]









var seconds = 75;
var timer = document.getElementById("timer")
var interval;
timer.innerText = '75';


//start timer//
document.getElementById("startbtn").addEventListener("click", startTimer)

function pomodoro() {

   interval = setInterval(function () {
      seconds--;
      if (seconds <= 0) {

         clearInterval(interval);
      }
      timer.textContent = seconds;
      
   }, 1000)
}



function startTimer() {
  
   showQuestions()
   pomodoro()
}



var i = 0

function showQuestions() { 

   if (i === questions.length) {
      document.getElementById("title").textContent = "";
      document.getElementById("choice1").textContent = "";
      document.getElementById("choice2").textContent = "";
      document.getElementById("choice3").textContent = "";
      document.getElementById("choice4").textContent = "";
      return;}

   document.getElementById("title").textContent = questions[i].title;
   document.getElementById("choice1").textContent = questions[i].choices[0];
   document.getElementById("choice2").textContent = questions[i].choices[1];
   document.getElementById("choice3").textContent = questions[i].choices[2];
   document.getElementById("choice4").textContent = questions[i].choices[3];
  
}





document.getElementById("choice1").addEventListener("click", nextQuestion)
document.getElementById("choice2").addEventListener("click", nextQuestion)
document.getElementById("choice3").addEventListener("click", nextQuestion)
document.getElementById("choice4").addEventListener("click", nextQuestion)

var userRightWrong;

function nextQuestion(event) {

   if (event.target.textContent === questions[i].answer) {
      userRightWrong = "Correct"
   }

   else {
      userRightWrong = "Incorrect"
       timer.textContent -= 10
   }

   document.getElementById("correctAnswer").textContent = userRightWrong
   i++;
   showQuestions();

}








