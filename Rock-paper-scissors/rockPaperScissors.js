"use strict";
// create tree type of game
var TypesGame = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};
// messages
var massagesAllert = {
    'start': 'Try to win...:`)',
    'papRoc': 'Paper covers rock.',
    'papSci': 'Scissors cut the paper.',
    'rocSci': 'Rock breack the scissors.',
    'papPap': 'Oops, Again'
};
var countUser = 0;
var countComputer = 0;
// set number and messages on front
var countUserTxt = document.querySelector(".countUser");
countUserTxt.textContent = countUser.toString();
var countComputerTxt = document.querySelector(".countComputer");
countComputerTxt.textContent = countComputer.toString();
var messgesTxt = document.querySelector(".messges");
messgesTxt.textContent = massagesAllert.start;
// select Rock,Paper,Scissors
var scissorsBtn = document.querySelector(".scissors");
var rockBtn = document.querySelector(".rock");
var paperBtn = document.querySelector(".paper");
// select random by computer
var selectOn = function () {
    return Math.floor(Math.random() * Object.keys(TypesGame).length);
};
var proccessOn = function (randNum, clickNum) {
    if (randNum == 1 && clickNum == 2 || randNum == 2 && clickNum == 1) {
        scissorsBtn.getElementsByTagName('img')[0].setAttribute("class", "los-selected");
        rockBtn.getElementsByTagName('img')[0].setAttribute("class", "win-selected");
        messgesTxt.textContent = massagesAllert.rocSci;
        if (clickNum == 2) {
            countComputer++;
            countComputerTxt.textContent = countComputer.toString();
        }
        else {
            countUser++;
            countUserTxt.textContent = countUser.toString();
        }
    }
    else if (randNum == 0 && clickNum == 2 || randNum == 2 && clickNum == 0) {
        scissorsBtn.getElementsByTagName('img')[0].setAttribute("class", "win-selected");
        paperBtn.getElementsByTagName('img')[0].setAttribute("class", "los-selected");
        messgesTxt.textContent = massagesAllert.papSci;
        if (clickNum == 2) {
            countUser++;
            countUserTxt.textContent = countUser.toString();
        }
        else {
            countComputer++;
            countComputerTxt.textContent = countComputer.toString();
        }
    }
    else if (randNum == 0 && clickNum == 1 || randNum == 1 && clickNum == 0) {
        rockBtn.getElementsByTagName('img')[0].setAttribute("class", "los-selected");
        paperBtn.getElementsByTagName('img')[0].setAttribute("class", "win-selected");
        messgesTxt.textContent = massagesAllert.papRoc;
        if (clickNum == 1) {
            countComputer++;
            countComputerTxt.textContent = countComputer.toString();
        }
        else {
            countUser++;
            countUserTxt.textContent = countUser.toString();
        }
    }
    else if (randNum == 2 && clickNum == 2) {
        scissorsBtn.getElementsByTagName('img')[0].setAttribute("class", "eql-selected");
        messgesTxt.textContent = massagesAllert.papPap;
    }
    else if (randNum == 1 && clickNum == 1) {
        rockBtn.getElementsByTagName('img')[0].setAttribute("class", "eql-selected");
        messgesTxt.textContent = massagesAllert.papPap;
    }
    else if (randNum == 0 && clickNum == 0) {
        paperBtn.getElementsByTagName('img')[0].setAttribute("class", "eql-selected");
        messgesTxt.textContent = massagesAllert.papPap;
    }
    setInterval(function () {
        paperBtn.getElementsByTagName('img')[0].setAttribute("class", "def-selected");
        scissorsBtn.getElementsByTagName('img')[0].setAttribute("class", "def-selected");
        rockBtn.getElementsByTagName('img')[0].setAttribute("class", "def-selected");
    }, 2000);
};
scissorsBtn.addEventListener("click", function () {
    proccessOn(selectOn(), 2);
});
rockBtn.addEventListener("click", function () {
    proccessOn(selectOn(), 1);
});
paperBtn.addEventListener("click", function () {
    proccessOn(selectOn(), 0);
});
