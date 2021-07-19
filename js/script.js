// generare 5 numeri casuali
// far vedere i numeri generati tramite un alert
// creare un timer di 30 secondi
// far partire il timer non appena l'utente prende 'ok'
// EXTRA far vedere il countdown
// al termine dei 30 secondi l'utente dovrà inserire i numeri tramite un 'prompt'
// far vedere il risultato all'utente tramite 'alert'
// EXTRA il risultatò dovrà essere stampato direttamente in pagina



//FIXED VARIABLES
const totalNumbers = 100;
const totalNumbersToGenerate = 5;
var timeLeft = 30;



// CHANGING VARIABLES
const rngNumbers = [];





// GAME
while (rngNumbers.length < totalNumbersToGenerate) {

    // Generates a random number between 1 and 100
    let randomNumber = getRandomNumber(1, totalNumbers);

    // Verify that the generated number is not in the array yet
    if (!isInArray(randomNumber, rngNumbers)) {
        rngNumbers.push(randomNumber);
    }
}

myAlert(rngNumbers);

// COUNTDOWN WITH DISPLAY ON PAGE
var countdownTimer = setInterval(function () {
    //Brings the HTML element
    const getCountdown = document.getElementById("countdowntimer");
    //Stops the countdown one ended
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        getCountdown.innerHTML = "STOP!";

    } else {
        getCountdown.innerHTML = timeLeft + " seconds remaining";
    }
    return timeLeft -= 1;
}, 1000);



//FUNCTIONS DECLARATIONS
/**
 * Generates a random number between min and max
 * @param {number} min 
 * @param {number} max 
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Checks if a element is in an array
 * @param {*} element 
 * @param {*} arr 
 */
function isInArray(element, arr) {
    let found = false;
    let i = 0;
    while (!found && i < arr.length) {
        if (element === arr[i]) {
            found = true;
        }
        i++;
    }
    return found;
}

/**
 * // Display alert based on function condition
 * @param {*} value 
 */
function myAlert(value) {
    return alert('Questi sono i tuoi numeri: ' + value);
}
