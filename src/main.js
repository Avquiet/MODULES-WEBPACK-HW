import { handleCalcDates }  from "./functions.js";
import { timeRun } from './functions.js'
import { timePause } from './functions.js'


const dateCalcForm = document.getElementById("datecalc");
dateCalcForm.addEventListener("submit", handleCalcDates);

let buttonRun = document.getElementById("starttime");
let buttonStop = document.getElementById("pausetime");
let timerShow = document.getElementById("show");

buttonRun.addEventListener('click', timeRun) 
buttonStop.addEventListener('click', timePause)

timer = setInterval(function () {
    seconds = timerTime % 60
    minutes = timerTime / 60 % 60 
    hours = timerTime / 60 / 60 % 60

    let audio = new Audio();
    audio.src = 'media/tests_audio_sound1.mp3';
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











