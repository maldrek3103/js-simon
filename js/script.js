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
const maxAttempts = 5;
let timeLeft = 3;


// CHANGING VARIABLES
const rngNumbers = [];
const userNumbers = [];



//CHECKING VARIABLES
let isRight = false;



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
console.log(rngNumbers);
// COUNTDOWN WITH DISPLAY ON PAGE
var countdownTimer = setInterval(function () {
    //Brings the HTML element
    const getCountdown = document.getElementById("countdowntimer");
    //Stops the countdown one ended
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        alert("STOP!");
        while (userNumbers.length != 5) {
            if (isNumber) {
                userNumbers.push(getUserNumber(1, totalNumbers));
            }
        }
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

/**
 * Ask user a number until it is not a valid element (between min and max)
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getUserNumber(min, max) {
    //Ask user number
    let number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    while (!isNumber(number) || number < 1 || number > max) {
        number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    }
    return parseInt(number);
}

/**
 * Checks if a value is a number
 * @param {*} num 
 * @returns 
 */
function isNumber(num) {
    if (!num || num.trim() === '' || isNaN(num)) {
        alert('Devi inserire un valore valido!');
        return false;
    }
    return true;
}