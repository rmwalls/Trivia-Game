$(document).ready(function() {
    var gameStats = {
        right: 0,
        wrong: 0,
        unanswered: 0
    } //end gameStats

    var intervalId; //holds the intervalID
    var number = 11; //Set counter countdown 
    $("#showQA").hide(); //keep the other buttons hidden until Start clicked

    // When button is clicked run function timer
    $("#button-start").click(timer); 

    // start timer, hide button, display 1st question    
    function timer() {
        console.log("I'm in the timer function");
        $("#button-start").hide();
        intervalId = setInterval(decrement, 1000);
        displayQandA();
    } //end timer

    // decrement function to count DOWN, also handles a timeout
    function decrement() {
        number--;
        $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display timer on page
            if (number === 0) { //Once number hits zero, stop the timer 
                stop();
                $("#resultMessage").show(); // allow the time's up message to show up
                $("#resultMessage").html("<h2><p>Oops! Time's Up! <br> The correct answer was: <br>" + QuestionsArr[indexQuestion].answer + "</p></h2>");
                gameStats.unanswered++; //increase the unanswered score
                console.log("unanswered count is " + gameStats.unanswered);
                setTimeout(nextQuestion, 3000); //in 3 secs go to nextQuestion
            } //end if
    } //end decrement

    function stop() { //stop and clear the timer
        clearInterval(intervalId);
    } //end stop

    function restartTimer() { //restart the timer for new question
        clearInterval(intervalId);
        number=11;
        intervalId = setInterval(decrement, 1000);
    } //end restartTimer

    // Object for each question and its potential answers. Gives question number, choices, correct answer, image & index
    let q1 = {
        qNumber: 1, 
        question: "The founder of Netscape was:",
        choices: ["A. Al Gore", "B. Marc Andreesen", "C. Steve Case", "D. Elon Musk"],
        answer: "B. Marc Andreesen",
        correctAnswer: 1,
        image: "assets/images/andreessen.jpg"
    } // end Q1


    // question2
    let q2 = {
        qNumber: 2, 
        question: "The M in HTML stands for:",
        choices: [" A. Marking ", " B. Markle ", " C. Markup ", " D. Marketing "],
        answer: "C. Markup",
        correctAnswer: 2,
        image: "assets/images/markup.jpg"
    }

    // question3
    let q3 = {
        qNumber: 3, 
        question: "CSS stands for:",
        choices: [" A. Cascading Style Sheets ", " B. Clever Style Sheets ", " C. Collapsing Style Sheets ", " D. Cascading Style Syntax "],
        answer: "A. Cascading Style Sheets",
        correctAnswer: 0,
        image: "assets/images/css.jpg"
    }

    // question4
    let q4 = {
        qNumber: 4, 
        question: "Bootstrap is owned by:",
        choices: [" A. Microsoft ", " B. Facebook ", " C. Sun Microsystems ", " D. Twitter "],
        answer: "D. Twitter",
        correctAnswer: 3,
        image: "assets/images/bootstrap.jpg"
    }

    // question5
    let q5 = {
        qNumber: 5, 
        question: "Which of the following is NOT a web browser?",
        choices: [" A. SeaMonkey ", " B. Lynx ", " C. SpeedWeb ", " D. Voyager "],
        answer: "C. SpeedWeb",
        correctAnswer: 2,
        image: "assets/images/browser.jpg"
    }

    // question6
    let q6 = {
        qNumber: 6, 
        question: "JAVA stands for:",
        choices: [" A. Nothing, it's a reference to coffee ", " B. Just-in-time All-Code Verification Application ", " C. James's Application Virtual Applets ", " D. Justified Automatic Version Anywhere "],
        answer: "A. Nothing, it's a reference to coffee",    
        correctAnswer: 0,
        image: "assets/images/java.jpg"
    }

    // question7
    let q7 = {
        qNumber: 7, 
        question: "Which is NOT a shade of white recognized in HTML?",
        choices: [" A. AntiqueWhite ", " B. GhostWhite ", " C. FloralWhite ", " D. LilyWhite "],
        answer: "D.	LilyWhite",
        correctAnswer: 3,
        image: "assets/images/white.jpg."
    }

    // question8
    let q8 = {
        qNumber: 8, 
        question: "Which was NOT the name of an early internet search engine?",
        choices: [" A. Betty ", " B. Veronica ", " C. Archie ", " D. Jughead "],
        answer: "A. Betty",
        correctAnswer: 0,
        image: "assets/images/search.jpg"
    }

    // question9
    let q9 = {
        qNumber: 9, 
        question: "This is/was the name of an HTML editor:",
        choices: [" A. HTML-it! ", " B. Hotdog ", " C. Web-A-Roo ", " D. FrameItUp "],
        answer: "B. Hotdog",
        correctAnswer: 1,
        image: "assets/images/hotdog.jpg"
    } //end of last object

    //Array of questions to cycle through
    let QuestionsArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
    var indexQuestion = 0;

    function displayQandA() {  //this displays the questions with answer choices
        console.log("I got to function displayQanA");
        $("#showQA").show();
        $("#questionText").show(); // show question
        $("#answerChoices").show(); // show answers
        $(".btn").show();
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
		        $("#questionText").hide(); //hide the question
		        $("#resultMessage").show(); //confirm the correct answer
                $("#resultMessage").html("<h2><p>Correct! <br> the answer is "  + QuestionsArr[indexQuestion].answer + "<p><img src='" + QuestionsArr[indexQuestion].image + "' height = 400px width = auto alt='Correct'><p>");
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

           // make sure this stuff is hidden until needed
            $(".timer").hide();
            $(".gameOver").hide();
            $(".btn").hide();

            setTimeout(nextQuestion, 3000); // after 3 secs, go to nextQuestion
        } //end first if
    }); //end of answer processing

    function nextQuestion() { //determine if there are more questions and move to next one
        indexQuestion++;
    console.log("indexQustion is " + indexQuestion);
        if (indexQuestion < QuestionsArr.length) {
            displayQandA();
	        $("#questionText").show(); //display the next question
            $("#resultMessage").hide(); //hide previous result
            $("#timerDisplay").show(); //show the new timer
            $(".btn").show(); //show the answer buttons
            stop(); //stop and restart the timer
            restartTimer();
        } else	{ //Display scores when game ends
	        console.log("Got to game ends");
            
            $(".gameOver").show(); //allow game over info to show
            $("#showQA").hide(); //game over, hide last QandA
            $(".gameOver").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
            "<div>"+ "Correct Answers: " + gameStats.right +"</div>" + 
            "<div>"+ "Wrong Answers: " + gameStats.wrong +"</div>" +
            "<div>"+ "Unanswered Questions: " + gameStats.unanswered +"</div>");
            //display a restart button without erasing scores until it's clicked
            $(".gameOver").append('<button type="button" class="restartMe" id="reset">Restart Game</button>');
            $(".restartMe").on("click",restartGame); // when button is clicked, send to restart function
        } //end if
    } //end nextQuestion
    
    function restartGame() {
        gameStats.right=0;
        gameStats.wrong=0;
        gameStats.unanswered=0;
        indexQuestion=0;
        $("#resultMessage").hide(); // hide resultMessage
        $(".gameOver").hide(); // hide gameOver info
        //$("#answerChoices").hide(); // restart, hide last QandA
        $("#questionText").hide(); // restart, hide last QandA
        stop();
        //clearInterval(intervalId);
        number=11;
        timer();
    } // end restartGame

}); //end document.ready