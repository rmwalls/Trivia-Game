$(document).ready(function() {
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; //holds the intervalID
var userAnswer;
var number = 34; //Set counter to countdown from 34.

    // object for 1st question
    let Q1 = {
    qNumber: 1, 
    question: "The founder of Netscape was:",
    answers: [
        { label: "A. ", result: "wrong", a1: "Al Gore"},
        { label: "B. ", result: "right", a2: "Marc Andreesen"},
        { label: "C. ", result: "wrong", a3: "Steve Case"},
        { label: "D. ", result: "wrong", a4: "Elon Musk"}
        ],
        working(){
        const questionNum = Q1.qNumber;
        console.log(Q1, "number: " + questionNum);
        $(".qNumb").html("Question # " + questionNum);
        } //end working
    } // end Q1
    Q1.working();

    // When the button is clicked, the timer starts. Eventually the 1st quest will also display
    $("#button-start").click(timer); 
   
    // start timer, fade the button away, eventually display 1st question    
    function timer() {
        $("#button-start").fadeOut(500);
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

    
    //$(".qNumb").html("Question # " + qNumber);
    //var qNumb = document.querySelector(".qNumb");
    //console.log("this is qNumber " + qNumber);
    

    function stop() {
        clearInterval(intervalId);
    } //end stop

}); //end document.ready