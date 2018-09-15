// Setup variables
// Store wins
// store losses
// current random number between 19-120
// current user number
// diamond 1 - 4  random number between 1-12

//On SetUp
//Game is going to pick random number between 19-120 and set current number to that value.
//Pick random numbers for each diamond and store in diamond value. Select a number in array. Prevent two diamons being same value.
//Then update html to show number on screen in random-number div.
//make user number 0

//Onclick of diamonds add button amount to user count
//update html to show user numer
//Check if user number is equal to computer number.
//If so add 1 to win. and reset
//if not check if user number is over computer number
//if so add 1 to losses and reset.

var wins = 0;
var losses = 0;
var randomNumber = 0;
var userNumber = 0;

var diamOne;
var diamTwo;
var diamThree;
var diamFour;
var diamonds = [diamOne, diamTwo, diamThree, diamFour];

// Gives unique number to each diamond value betewen 1 and 12.
function diamondSetup() {
    var diamondChoices = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    for (i = 0; i < diamonds.length; i++) {
        var selectedNumber = diamondChoices[Math.floor(Math.random()*diamondChoices.length)];
        diamonds[i] = parseInt(selectedNumber);
        diamondChoices.splice(diamondChoices.indexOf(selectedNumber), 1);
        console.log("Diamond Value-" + (i + 1) +  " is " + diamonds[i]);
    }
}

// Sets up defaults for game.
function setupGame() {
    userNumber = 0;
    randomNumber = Math.floor(Math.random()* (121 - 19) + 19);
    console.log("Random Number: " + randomNumber);
    diamondSetup();
    $("#random-number").text(randomNumber);
    $("#user-number").text(userNumber);
}

function gameStatus() {
    if (userNumber === randomNumber) {
        wins++;
        $("#wins").text(wins);
        setupGame();
    } else if (userNumber > randomNumber) {
        losses++;
        $("#losses").text(losses);
        setupGame();
    }
}

setupGame();
console.log(userNumber);
console.log(diamonds[0]);

$("#diamond-one").on("click", function() {
    userNumber = userNumber + diamonds[0];
    $("#user-number").text(userNumber);
    gameStatus();
});
$("#diamond-two").on("click", function() {
    userNumber = userNumber + diamonds[1];
    $("#user-number").text(userNumber);
    gameStatus();
});
$("#diamond-three").on("click", function() {
    userNumber = userNumber + diamonds[2];
    $("#user-number").text(userNumber);
    gameStatus();
});
$("#diamond-four").on("click", function() {
    userNumber = userNumber + diamonds[3];
    $("#user-number").text(userNumber);
    gameStatus();
});