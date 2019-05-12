// Some variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; //holds the intervalID
var number = 30; //Set counter to countdown from 30.

$("#button-start").on("click", timer());

console.log("after button click");

function timer() {
    clearInterval(intervalId);  
    intervalId = setInterval(decrement, 1000);
    decrement();
    }

// decrement function (to countDOWN)
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display number on page

    if (number === 0) { //Once number hits zero, run stop 
        stop();
    
    console.log("Time's Up!");
    }}

    function stop() {
        clearInterval(intervalId);
  }