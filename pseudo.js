// Pick a theme
// Initial page has a Start button
// upon clicking start, count down timer shown (restarts with each question)
    // need questions each with 1 correct answer & 3 wrong answers - use arrays??
    // need image for each correct answer
// show first question, with 4 answers to choose from 
    // only allow one selection
    // as soon as answer is clicked, 
        // stop time
        // show right or wrong
        // show correct answer with image
        // store count of right, wrong answers, get # of unanswered questions
        // after a few seconds
            //reset timer and redisplay
            //display new question with answers
    // if time expires before question is answered
        // stop timer
        // display "Time's up" message
        // display correct answer
        // increase wrong answer count
        // after a few seconds
            //reset timer and redisplay
            // display new questions with answers
    //After final question
        //stop timer
        //display a message
        //display # of right, wrong and unanswered questions
        //provide Play Again button
            //reset parameters
            //restart game


// Thoughts:
// use classes
    // questions
    // answers - assign numbers to answers to ease comparisons (right/wrong)
    // images
// Potential functions
    // startGame
    // resetGame
    // displayCorrectAnwer
    // showStats
    // displayQuestions
    // determineResult
// Timers needed
    //per question
    //display result
// When Start is pressed, the page content is just replaced, doesn't go to a new page