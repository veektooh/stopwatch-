// Stopwatch logic
let timer = null;
let elapsed = 0; // in seconds

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (timer !== null) return; // Prevent multiple intervals
    timer = setInterval(() => {
        elapsed++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    elapsed = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
