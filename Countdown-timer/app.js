"use strict";
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 5;
// select element on Front and Change them.
var secondsTxt = document.querySelector('.seconds');
var minutesTxt = document.querySelector('.minutes');
var hoursTxt = document.querySelector('.hours');
var daysTxt = document.querySelector('.days');
// function Timer
var fTimer = function () {
    secondsTxt.textContent = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
    minutesTxt.textContent = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
    hoursTxt.textContent = (hours < 10) ? "0" + hours.toString() : hours.toString();
    daysTxt.textContent = (days < 10) ? "0" + days.toString() : days.toString();
    if (seconds == 0 && minutes != 0) {
        minutes--;
        seconds = 60;
    }
    else if (seconds == 0 && minutes == 0 && hours != 0) {
        minutes = 60;
        seconds = 60;
        hours--;
        console.log('Omad Injast ...');
    }
    else if (seconds == 0 && minutes == 0 && hours == 0 && days != 0) {
        minutes = 60;
        seconds = 60;
        hours = 24;
        days--;
    }
    else if (seconds == 0 && minutes == 0 && hours == 0 && days == 0) {
        clearInterval(countdownTimer);
    }
    seconds--;
};
// Timer
var countdownTimer = setInterval(fTimer, 1000);
