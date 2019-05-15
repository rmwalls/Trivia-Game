// Some variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; //holds the intervalID
var number = 34; //Set counter to countdown from 34.



$(document).ready(function(){

 // object for 1st question
 let Q1 = {
    qNumber: 1, 
    question: "The founder of Netscape was:",
    answers: [
        { label: "A. ", result: "wrong", a1: "Al Gore"},
        { label: "B. ", result: "right", a2: "Marc Andreesen"},
        { label: "C. ", result: "wrong", a3: "Steve Case"},
        { label: "D. ", result: "right", a4: "Elon Musk"}
    ],
    test(){
    console.log(Q1);
   } //end test
} // end Q1
Q1.test();

    // When the button is clicked, the timer starts. Eventually the 1st quest will also display
    $("#button-start").click(timer); 
   
    // start timer, fade the button away, eventually display 1st question    
    function timer() {
        $("#button-start").fadeOut(800);
        clearInterval(intervalId);  
        intervalId = setInterval(decrement, 1000);
        decrement();
    } //end timer

    // decrement function (to countDOWN (not like a stopwatch))
    function decrement() {
        number--;
        $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display number on page

            if (number === 0) { //Once number hits zero, run stop 
                stop();
                console.log("Time's Up!");
            } //end if
    } //end decrement

    function stop() {
        clearInterval(intervalId);
    } //end stop

}); //end document.ready