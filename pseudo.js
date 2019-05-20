// 5/19/19 TODO still
//make restart button work
// make timer restart correctly
//clear out previous response and answer info
// work on css of text and image size
//get image for question 5

//BONUS
// get sounds working
//fix width of container



// Pick a theme  DONE
// Initially, page has a Start button DONE
// upon clicking start, 
// Start button goes away DONE
//count down timer shown DONE
// Show question number (1 of 10, etc,)
//(restarts with each question)
    // need questions each with 1 correct answer & 3 wrong answers - use arrays??
    // need image for each correct answer DONE
// show first question, with 4 answers to choose from 
    // only allow one selection
    // as soon as answer is clicked, 
        // stop timer  
        // determine if userAnswer is correct
        // show right or wrong
        // show correct answer with image
        // store count of right, wrong answers, get # of unanswered questions
        // after a few seconds
            //reset timer and redisplay
            //display new question with answers
    // if time expires before question is answered
        // stop timer DONE
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
    //while displaying result
// When Start is pressed, the page content is just replaced, doesn't go to a new page

// Each question needs to have:
    // 3 wrong answers
    // 1 right answer
    // image 
    // sounds
    