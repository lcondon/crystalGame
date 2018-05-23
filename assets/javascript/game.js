var goalScore = $("#randomNumber");
var red = $("#redGem");
var blue = $("#blueGem");
var yellow = $("#yellowGem");
var green = $("#greenGem");
var user = $("#userScore");
var wins = $("#winCount");
var losses = $("#lossCount");
var rando = 0;
var score = 0;
var greenNumber = 0;
var blueNumber = 0;
var redNumber = 0;
var yellowNumber = 0;
var winTotal = 0;
var lossTotal = 0;

$(document).on("load", startNewGame());

function startNewGame () {
    rando = Math.floor(Math.random() * 101) + 19;
    goalScore.text(rando);
    score = 0;
    user.text(score);
    greenNumber = Math.floor(Math.random() * 11) + 1;
    blueNumber = Math.floor(Math.random() * 11) + 1;
    redNumber = Math.floor(Math.random() * 11) + 1;
    yellowNumber = Math.floor(Math.random() * 11) + 1;
}

function didYouWin () {
    if (score === rando) {
        alert("You win!");
        winTotal++;
        wins.text(winTotal);
        startNewGame();
    } else if (score > rando) {
        alert("You lose");
        lossTotal++;
        losses.text(lossTotal);
        startNewGame();
    }
}

green.on("click", function() {
    score = Number(score) + greenNumber;
    user.text(score);
    didYouWin();
});

red.on("click", function() {
    score = Number(score) + redNumber;
    user.text(score);
    didYouWin();
});

blue.on("click", function() {
    score = Number(score) + blueNumber;
    user.text(score);
    didYouWin();
});

yellow.on("click", function() {
    score = Number(score) + yellowNumber;
    user.text(score);
    didYouWin();
});