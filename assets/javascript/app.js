$(document).ready(function() {
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; //holds the intervalID
var userAnswer;
var number = 24; //Set counter to countdown from 34.

// When the button is clicked, the timer starts. Eventually the 1st quest will also display
$("#button-start").click(timer); 

// start timer, fade the button away, +display 1st question    
function timer() {
    $("#button-start").fadeOut(100);
    clearInterval(intervalId);  
    intervalId = setInterval(decrement, 1000);
    decrement();
    displayQandA();
} //end timer

// decrement function (to countDOWN (not like a stopwatch))
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display timer on page
        if (number === 0) { //Once number hits zero, run stop 
            stop();
            console.log("Time's Up!");
        } //end if
} //end decrement

function stop() {
    clearInterval(intervalId);
} //end stop

// object for 1st question
let q1 = {
qNumber: 1, 
question: "The founder of Netscape was:",
answer: "B. Marc Andreesen",
choices: ["A. Al Gore", "B. Marc Andreesen", "C. Steve Case", "D. Elon Musk"],
correctAnswer: 1,
        
    //working(){
    //$(".qNumb").html("Question # " + Q1.qNumber + " of 10");
    //$("#questionText").html("<h3>" + Q1.question);
    //$("#answerChoices").html(this.choices[0] + this.choices[1] + this.choices[2] + this.choices[3]);
   // } //end working
} // end Q1

//Q1.working();

// object for question2
let q2 = {
    qNumber: 2, 
    question: "The M in HTML stands for:",
    answer: "C. Markup",
    choices: [" A. Marking ", " B. Markle ", " C. Markup ", " D. Marketing "],
    correctAnswer: 2,
}

// object for question3
let q3 = {
    qNumber: 3, 
    question: "CSS stands for:",
    answer: "A. Cascading Style Sheets",
    choices: [" A. Cascading Style Sheets ", " B. Clever Style Sheets ", " C. Collapsing Style Sheets ", " D. Cascading Style Syntax "],
    correctAnswer: 0,
}

// object for question4
let q4 = {
    qNumber: 4, 
    question: "Bootstrap is owned by:",
    answer: "D. Twitter",
    choices: [" A. Microsoft ", " B. Facebook ", " C. Sun Microsystems ", " D. Twitter "],
    correctAnswer: 3,
}

// object for question5
let q5 = {
    qNumber: 5, 
    question: "Which of the following is NOT a web browser?",
    answer: "C. SpeedWeb",
    choices: [" A. SeaMonkey ", " B. Lynx ", " C. SpeedWeb ", " D. Voyager "],
    correctAnswer: 2,
}

// object for question6
let q6 = {
    qNumber: 6, 
    question: "Which of the following will correctly call a function in Javascript:",
    answer: "B.	functionName();",
    choices: [" A. call.FunctionName(); ", " B.	functionName(); ", " C. FunctionName.call(); ", " D. my.functionname.call(); "],
    correctAnswer: 1,
}

// object for question7
let q7 = {
    qNumber: 7, 
    question: "Which is NOT a shade of white recognized in HTML?",
    answer: "D.	LilyWhite",
    choices: [" A. AntiqueWhite ", " B. GhostWhite ", " C. FloralWhite ", " D. LilyWhite "],
    correctAnswer: 3,
}

// object for question8
let q8 = {
    qNumber: 8, 
    question: "Which was NOT the name of an early internet search engine?",
    answer: "A. Betty",
    choices: [" A. Betty ", " B. Veronica ", " C. Archie ", " D. Jughead "],
    correctAnswer: 0,
}

// object for question9
let q9 = {
    qNumber: 9, 
    question: "This is/was the name of an HTML editor:",
    answer: "B. Hotdog",
    choices: [" A. HTML-it! ", " B. Hotdog ", " C. Web-A-Roo ", " D. FrameItUp "],
    correctAnswer: 1,
}

// object for question10
let q10 = {
    qNumber: 10, 
    question: "JAVA stands for:",
    answer: "A. Nothing, it's a reference to coffee",
    choices: [" A. Nothing, it's a reference to coffee ", " B. Just-in-time All-Code Verification Application ", " C. James’s Application Virtual Applets ", " D. Justified Automatic Version Anywhere "],
    correctAnswer: 1,
}

//Array of questions
let QuestionsArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var indexQuestion = 0;

function displayQandA() {
	$("#questionText").html("<h3>" + QuestionsArr[indexQuestion].question + "</h3>");
	$("#button0").text(QuestionsArr[indexQuestion].choices[0]);
	$("#button1").text(QuestionsArr[indexQuestion].choices[1]);
	$("#button2").text(QuestionsArr[indexQuestion].choices[2]);
	$("#button3").text(QuestionsArr[indexQuestion].choices[3]);
	} //end QanA


}); //end document.ready