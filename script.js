
// start game button updating the page to show questions and answers 

$('.start-button').click(function() {
    $('.guesses-remaining').removeClass('hidden');
    $('.questions').removeClass('hidden');
    $('.answer-buttons').removeClass('hidden');
    $('.restart-button').removeClass('hidden');
});

// hiding the start game button after it is clicked
$('.start-button').click(function() {
    $('.start-button').addClass('hidden');
});

// restart button to refresh the page and start the game over
$('.restart-button').click(function() {
    location.reload();
});

// questions left counter updating <h3> text for user guesses remaining
$(document).ready(function() {
    questionsCounter();
});

function questionsCounter() {
    let questions = 20;

    $('.answer-buttons').click(function() {
        if (questions > 0) {
            questions--;
            $('.guesses-remaining').text("Questions left: " + questions); 
        }
        
        if (questions === 0) {
            $('.guesses-remaining').text("No more questions left!"); 
        }
    });
}



// Initial boundaries
let lowerBound = 1;
let upperBound = 1000000;
let newestGuess = 500000; // Start with the 500,000 midpoint

function updateGuess() {
    newestGuess = Math.floor((lowerBound + upperBound) / 2); // Midpoint of the current range based on the user's responses
}

// Action for when the lower button is clicked
function questionResponseLower() {
    upperBound = newestGuess - 1; // Update the upper bound
    updateGuess(); // Calculate the new guess
}

// Action for when the higher button is clicked
function questionResponseHigher() {
    lowerBound = newestGuess + 1; // Update the lower bound
    updateGuess(); // Calculate the new guess
}

// Action for clicking the "correct" button
$('.correct-button').click(function() {
    $('.questions').removeClass('hidden questions').addClass('question-correct move');
    $('.question-correct').text(newestGuess + " is your number!");
});

// Action for clicking the "lower" button
$('.lower-button').click(function() {
    questionResponseLower();
    $('.questions').text("Is your number " + newestGuess + "?");
});

// Action for clicking the "higher" button
$('.higher-button').click(function() {
    questionResponseHigher();
    $('.questions').text("Is your number " + newestGuess + "?");
});

