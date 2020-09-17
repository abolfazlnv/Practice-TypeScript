let days:number = 0;
let hours:number = 0;
let minutes:number = 0;
let seconds:number = 5;

// select element on Front and Change them.
let secondsTxt: Element = document.querySelector('.seconds')!;
let minutesTxt: Element = document.querySelector('.minutes')!;
let hoursTxt: Element = document.querySelector('.hours')!;
let daysTxt: Element = document.querySelector('.days')!;

// function Timer
let fTimer = ()=>{
    secondsTxt.textContent= (seconds <10) ? `0${seconds.toString()}` : seconds.toString();
    minutesTxt.textContent = (minutes <10) ? `0${minutes.toString()}` : minutes.toString();
    hoursTxt.textContent = (hours <10) ? `0${hours.toString()}` : hours.toString();
    daysTxt.textContent = (days <10) ? `0${days.toString()}` : days.toString();
    if(seconds==0 && minutes != 0){
        minutes--;
        seconds=60;
    } else if(seconds==0 && minutes == 0 && hours != 0) {
        minutes = 60;
        seconds = 60;
        hours--;
        console.log('Omad Injast ...');
    }else if(seconds==0 && minutes == 0 && hours == 0 && days != 0){
        minutes = 60;
        seconds = 60;
        hours = 24;
        days--;
    }else if(seconds==0 && minutes == 0 && hours == 0 && days == 0){
        clearInterval(countdownTimer)
    }
    seconds--;
}

// Timer
let countdownTimer = setInterval(fTimer,1000)
