let timerInput = document.querySelector("#timer");
let timerShow = document.querySelector("#show");

let interval;

timerInput.value = 0;
timerShow.innerHTML = 0;

document.querySelector("#startTime").addEventListener('click', () => {
    if (timerInput.value < 0) {
        timerInput.value = 0;
        timerShow.innerHTML= 0;
    }

    timerShow.innerHTML = timerInput.value

    clearInterval(interval);
    interval = setInterval(substractTime, 1000);
});

document.querySelector("#pauseTime").addEventListener('click', () => {
    clearInterval(interval);
});

document.querySelector("#resetTime").addEventListener('click', () => {
    timerInput.value = 0;
    timerShow.innerHTML = 0;
});

function substractTime() {
    let audio = new Audio();
    audio.src = 'media/sound1.mp3';
    audio.autoplay = false;

    if (timerShow.innerHTML > 0) {
        timerShow.innerHTML--;
        if (timerInput.value < 0 || timerShow.innerHTML == 0) {
            timerInput.value = 0;
            timerShow.innerHTML = 0;
            audio.autoplay = true;
        }
    } else {
        clearInterval(interval);
    }
}