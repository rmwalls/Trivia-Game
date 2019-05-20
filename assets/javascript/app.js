$(document).ready(function() {
var gameStats = {
    right: 0,
    wrong: 0,
    unanswered: 0
} //end gameStats

var intervalId; //holds the intervalID
var number = 24; //Set counter countdown 

// When the button is clicked, the timer starts. Eventually the 1st quest will also display
$("#button-start").click(timer); 

// start timer, fade the button away, display 1st question    
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
    image: "assets/images/andreessen.jpg"
        
   // working(){
     //   $(".qNumb").html("Question # " + Q1.qNumber + " of 10");
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
    image: "assets/images/markup.jpg"
}

// object for question3
let q3 = {
    qNumber: 3, 
    question: "CSS stands for:",
    answer: "A. Cascading Style Sheets",
    choices: [" A. Cascading Style Sheets ", " B. Clever Style Sheets ", " C. Collapsing Style Sheets ", " D. Cascading Style Syntax "],
    correctAnswer: 0,
    image: "assets/images/css.jpg"
}

// object for question4
let q4 = {
    qNumber: 4, 
    question: "Bootstrap is owned by:",
    answer: "D. Twitter",
    choices: [" A. Microsoft ", " B. Facebook ", " C. Sun Microsystems ", " D. Twitter "],
    correctAnswer: 3,
    image: "assets/images/bootstrap.jpg"
}

// object for question5
let q5 = {
    qNumber: 5, 
    question: "Which of the following is NOT a web browser?",
    answer: "C. SpeedWeb",
    choices: [" A. SeaMonkey ", " B. Lynx ", " C. SpeedWeb ", " D. Voyager "],
    correctAnswer: 2,
    image: ""
}

// object for question6
let q6 = {
    qNumber: 6, 
    question: "JAVA stands for:",
    answer: "A. Nothing, it's a reference to coffee",
    choices: [" A. Nothing, it's a reference to coffee ", " B. Just-in-time All-Code Verification Application ", " C. James’s Application Virtual Applets ", " D. Justified Automatic Version Anywhere "],
    correctAnswer: 1,
    image: "assets/images/java.jpg"
}

// object for question7
let q7 = {
    qNumber: 7, 
    question: "Which is NOT a shade of white recognized in HTML?",
    answer: "D.	LilyWhite",
    choices: [" A. AntiqueWhite ", " B. GhostWhite ", " C. FloralWhite ", " D. LilyWhite "],
    correctAnswer: 3,
    image: "assets/images/white.jpg."
}

// object for question8
let q8 = {
    qNumber: 8, 
    question: "Which was NOT the name of an early internet search engine?",
    answer: "A. Betty",
    choices: [" A. Betty ", " B. Veronica ", " C. Archie ", " D. Jughead "],
    correctAnswer: 0,
    image: "assets/images/search.jpg"
}

// object for question9
let q9 = {
    qNumber: 9, 
    question: "This is/was the name of an HTML editor:",
    answer: "B. Hotdog",
    choices: [" A. HTML-it! ", " B. Hotdog ", " C. Web-A-Roo ", " D. FrameItUp "],
    correctAnswer: 1,
    image: "assets/images/hotdog.jpg"
}


//Array of questions
let QuestionsArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
var indexQuestion = 0;

function displayQandA() {
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
            //Check for win/lose
            if (userButtonValue == QuestionsArr[indexQuestion].correctAnswer) {
                $("#resultMessage").html("<h2><p>Correct!</p></h2><img src='" + QuestionsArr[indexQuestion].image + "' height = 200 width = 350 alt='correct'>");
                gameStats.right ++;//increment score
                console.log("correct answer " + gameStats.right);
                //audio = new Audio("assets/sounds/ding.mp3");
                //audio.play();
                
                //reset timer
                stop();
                //timer.reset();						

            } else {
            
                $("#resultMessage").html("<h2><p>Wrong! <br> The correct answer was: <br>" + QuestionsArr[indexQuestion].answer + "</p></h2>");
                gameStats.wrong ++;
                console.log("wrong answer " + gameStats.wrong);
                //audio = new Audio("assets/Buzzer.mp3");
                //audio.play();

                //reset timer
                stop();
                //timer.reset();	
            } //end second if

            $("#yourResult").show(); //show the correct image div
            $(".timer").hide();
            $("#gameOver").hide();
            $(".btn").hide();

            setTimeout(nextQuestion, 3000);
            
        } //end first if
    }); 

    function nextQuestion() {
        indexQuestion++;
    
        if (indexQuestion < QuestionsArr.length) {
            displayQandA();
            $("#quizMessage").hide();
            $("#timerDisplay").show();
            $(".btn").show();
            stop();
            //timer.reset();
            //timer.start();
        } else	{ //Display scores when game ends
            $("#yourResult").hide();
            $("#question").hide();
            $("#score").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
            "<div>"+ "Correct Answers: " + gameStats.right +"</div>" + 
            "<div>"+ "Wrong Answers: " + gameStats.wrong +"</div>" +
            "<div>"+ "Unanswered Questions: " + gameStats.unanswered +"</div>");
        } //end if
    } //end nextQuestion
    

}); //end document.ready