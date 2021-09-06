import { timeRun } from './functions.js'
import { timePause } from './functions.js'

let buttonRun = document.getElementById("starttime");
let buttonStop = document.getElementById("pausetime");

buttonRun.addEventListener('click', timeRun); 
buttonStop.addEventListener('click', timePause);

let timerShow = document.getElementById("show");

timer = setInterval( function() {
    seconds = timerTime % 60;
    minutes = timerTime / 60 % 60; 
    hours = timerTime / 60 / 60 % 60;

    let audio = new Audio();
    audio.src = 'media/sound1.mp3';
    audio.autoplay = false;

    if (timerTime <= 0) {
        clearInterval(timer);
        audio.autoplay = true;
    } else { 
        let strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timerTime; 

}, 1000)