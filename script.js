let timer;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  let ms = String(milliseconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}.${ms}`;
}

document.getElementById('start').onclick = () => {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10); // updates every 10 ms
  }
};

document.getElementById('pause').onclick = () => {
  running = false;
  clearInterval(timer);
};

document.getElementById('reset').onclick = () => {
  running = false;
  clearInterval(timer);
  milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  laps.innerHTML = '';
};

document.getElementById('lap').onclick = () => {
  let li = document.createElement('li');
  li.textContent = display.textContent;
  laps.appendChild(li);
};

updateDisplay();
