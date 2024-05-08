const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.getElementById('timer');
const alarmSound = document.getElementById('alarmSound');
let countdown;
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
function startTimer() {
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
    if (isNaN(minutes) || minutes < 0 || isNaN(seconds) || seconds < 0) {
        alert('Please enter valid minutes and seconds (non-negative numbers)');
        return;
    }
    let totalSeconds = minutes * 60 + seconds;
    countdown = setInterval(() => {
        const minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = '00:00';
            alarmSound.play();
        } else {
            totalSeconds--;
        }
    }, 1000);
}
function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00';
    minutesInput.value = '0';
    secondsInput.value = '0';
}