import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2


const dateCalcResult = document.getElementById("datecalc__result");

export const handleCalcDates = event => {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

let timerInput = document.getElementById("timer"); 


export function timeRun() {
    timerTime = parseInt(timerInput.value) * 60
}
export function timePause() {
    clearInterval(timer)
}
