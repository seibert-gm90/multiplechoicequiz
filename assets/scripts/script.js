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
     choices: ["i=0", "i<n", "i++","var" ],
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
   {
     title: "Objects are "
   }


 
 ]


//listener to start quiz questions//
document.getElementById("startbtn").addEventListener("click", showQuestions)


//start timer//
document.getElementById("startbtn").addEventListener("click", pomodoro)


var seconds = 75;
var timer= document.getElementById("timer")
var interval ;
timer.innerText='75';

function pomodoro() {
   seconds = 1*60 || 0; 

   interval = setInterval(function() {
        seconds--;
        if(!seconds){
             clearInterval(interval); 
        }
   },1000)
}

function startTimer(){
   initializeTimer();
   setInterval(function(){

   secondsElapsed++; 

   renderTimer();

}, 1000)
}

function renderTimer(){
   
   var secondsRemaining= totalSeconds - secondsElapsed;

   var minutes = math.floor(secondsRemaining/ 60);
   var seconds= secondsRemaining % 60;

   timer.textContent = seconds
   
}


function showQuestions() {
   while (var i = 0; i < questions.length; i++) {
     document.getElementById("title").textContent = questions[i].title;
     document.getElementById("choice1").textContent = questions[i].choices[0];
     document.getElementById("choice2").textContent = questions[i].choices[1];
     document.getElementById("choice3").textContent = questions[i].choices[2];
     document.getElementById("choice4").textContent = questions[i].choices[3];
     break;
      }
      
   

quizContainer.innerHTML= output

}




