$(document).ready(function() {
var gameStats = {
    right: 0,
    wrong: 0,
    unanswered: 0
} //end gameStats

var intervalId; //holds the intervalID
var number = 11; //Set counter countdown 
$("#showQA").hide();

// When button is clicked run function timer
$("#button-start").click(timer); 

// start timer, hide button, display 1st question    
function timer() {
    $("#button-start").hide();
    intervalId = setInterval(decrement, 1000);
    displayQandA();
} //end timer

// decrement function (to countDOWN (not like a stopwatch))
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display timer on page
        if (number === 0) { //Once number hits zero, stop the timer 
            stop();
	    $("#resultMessage").show();
	    $("#resultMessage").html("<h2><p>Oops! Time's Up! <br> The correct answer was: <br>" + QuestionsArr[indexQuestion].answer + "</p></h2>");
	    gameStats.unanswered++;
            setTimeout(nextQuestion, 2000);
        } //end if
} //end decrement

function stop() {
    clearInterval(intervalId);
} //end stop

function restartTimer() {
    clearInterval(intervalId);
    number=11;
    intervalId = setInterval(decrement, 1000);
} //end restartTimer

// object for 1st question
let q1 = {
    qNumber: 1, 
    question: "The founder of Netscape was:",
    choices: ["A. Al Gore", "B. Marc Andreesen", "C. Steve Case", "D. Elon Musk"],
    answer: "B. Marc Andreesen",
    correctAnswer: 1,
    image: "assets/images/andreessen.jpg"
} // end Q1


// object for question2
let q2 = {
    qNumber: 2, 
    question: "The M in HTML stands for:",
    choices: [" A. Marking ", " B. Markle ", " C. Markup ", " D. Marketing "],
    answer: "C. Markup",
    correctAnswer: 2,
    image: "assets/images/markup.jpg"
}

// object for question3
let q3 = {
    qNumber: 3, 
    question: "CSS stands for:",
    choices: [" A. Cascading Style Sheets ", " B. Clever Style Sheets ", " C. Collapsing Style Sheets ", " D. Cascading Style Syntax "],
    answer: "A. Cascading Style Sheets",
    correctAnswer: 0,
    image: "assets/images/css.jpg"
}

// object for question4
let q4 = {
    qNumber: 4, 
    question: "Bootstrap is owned by:",
    choices: [" A. Microsoft ", " B. Facebook ", " C. Sun Microsystems ", " D. Twitter "],
    answer: "D. Twitter",
    correctAnswer: 3,
    image: "assets/images/bootstrap.jpg"
}

// object for question5
let q5 = {
    qNumber: 5, 
    question: "Which of the following is NOT a web browser?",
    choices: [" A. SeaMonkey ", " B. Lynx ", " C. SpeedWeb ", " D. Voyager "],
    answer: "C. SpeedWeb",
    correctAnswer: 2,
    image: "assets/images/browser.jpg"
}

// object for question6
let q6 = {
    qNumber: 6, 
    question: "JAVA stands for:",
    choices: [" A. Nothing, it's a reference to coffee ", " B. Just-in-time All-Code Verification Application ", " C. James's Application Virtual Applets ", " D. Justified Automatic Version Anywhere "],
    answer: "A. Nothing, it's a reference to coffee",    
    correctAnswer: 0,
    image: "assets/images/java.jpg"
}

// object for question7
let q7 = {
    qNumber: 7, 
    question: "Which is NOT a shade of white recognized in HTML?",
    choices: [" A. AntiqueWhite ", " B. GhostWhite ", " C. FloralWhite ", " D. LilyWhite "],
    answer: "D.	LilyWhite",
    correctAnswer: 3,
    image: "assets/images/white.jpg."
}

// object for question8
let q8 = {
    qNumber: 8, 
    question: "Which was NOT the name of an early internet search engine?",
    choices: [" A. Betty ", " B. Veronica ", " C. Archie ", " D. Jughead "],
    answer: "A. Betty",
    correctAnswer: 0,
    image: "assets/images/search.jpg"
}

// object for question9
let q9 = {
    qNumber: 9, 
    question: "This is/was the name of an HTML editor:",
    choices: [" A. HTML-it! ", " B. Hotdog ", " C. Web-A-Roo ", " D. FrameItUp "],
    answer: "B. Hotdog",
    correctAnswer: 1,
    image: "assets/images/hotdog.jpg"
}


//Array of questions to cycle through
let QuestionsArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
var indexQuestion = 0;

function displayQandA() {
	console.log("I got to function displayQanA");
        $("#showQA").show();
	$("#questionText").html("<h3>" + QuestionsArr[indexQuestion].question + "</h3>");
	$("#button0").text(QuestionsArr[indexQuestion].choices[0]);
	$("#button1").text(QuestionsArr[indexQuestion].choices[1]);
	$("#button2").text(QuestionsArr[indexQuestion].choices[2]);
	$("#button3").text(QuestionsArr[indexQuestion].choices[3]);
	} //end QanA

    //User input check answer
    $(".btn").click(function() {
        if (indexQuestion < QuestionsArr.length) {
            //Which answer was clicked
            var userButtonValue = ($(this).attr("data-value"));
            console.log("user button " + userButtonValue);
            
            //Check for right/wrong
            if (userButtonValue == QuestionsArr[indexQuestion].correctAnswer) {
		$("#questionText").hide();
		$("#resultMessage").show();
        $("#resultMessage").html("<h2><p>Correct! <br> the answer is "  + QuestionsArr[indexQuestion].answer + "<img src='" + QuestionsArr[indexQuestion].image + "' height = 200 width = 350 alt='Correct'>");
                gameStats.right ++; //increment score
                console.log("correct answers now = " + gameStats.right);
                //audio = new Audio("assets/sounds/ding.mp3");
                //audio.play();
                stop(); //stop timer              					

            } else {
            	$("#resultMessage").show();
                $("#resultMessage").html("<h2><p>Oops! Wrong! <br> The correct answer was: <br>" + QuestionsArr[indexQuestion].answer);
                gameStats.wrong ++;
                console.log("wrong answers now = " + gameStats.wrong);
                //audio = new Audio("assets/sounds/Buzzer.mp3");
                //audio.play();
                stop();	//stop timer
            } //end second if

            $(".timer").hide();
            $(".gameOver").hide();
            $(".btn").hide();

            setTimeout(nextQuestion, 2000);
            
        } //end first if
    }); 

    function nextQuestion() {
        indexQuestion++;
    
        if (indexQuestion < QuestionsArr.length) {
            displayQandA();
	$("#questionText").show();
            $("#resultMessage").hide();
            $("#timerDisplay").show();
            $(".btn").show();
            stop();
            restartTimer();
        } else	{ //Display scores when game ends
	console.log("Got to game ends");
            $("#showQA").hide();
	    $(".gameOver").show();
            $(".gameOver").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
            "<div>"+ "Correct Answers: " + gameStats.right +"</div>" + 
            "<div>"+ "Wrong Answers: " + gameStats.wrong +"</div>" +
            "<div>"+ "Unanswered Questions: " + gameStats.unanswered +"</div>");
           $(".gameOver").append('<button type="reset" class="restartMe" id="reset" value=reset>Restart Game</button>');
	$("#restartMe").click(restartGame); 
        } //end if
    } //end nextQuestion
    
function restartGame() {
	gameStats.right=0;
	gameStats.wrong=0;
	gameStats.unanswered=0;
	indexQuestion=0;
	timer();
} // end restartGame

}); //end document.ready