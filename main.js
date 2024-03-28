const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const timeInput = document.querySelector("input[type='number']");
const addTimeButton = document.querySelector(".add-time");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const finishTimeAudio = document.querySelector(".finishTimeAudio");

const padWithZero = (num) => {
  return num < 10 ? `0${num}` : num;
};

const updateTimerDisplay = (minutes, seconds) => {
  minutesContainer.textContent = padWithZero(minutes);
  secondsContainer.textContent = padWithZero(seconds);
};

const startTimer = () => {
  let minutes = parseInt(minutesContainer.textContent);
  let seconds = parseInt(secondsContainer.textContent);

  let timer = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      finishTimeAudio.play();
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateTimerDisplay(minutes, seconds);
  }, 1000);

  return timer;
};

addTimeButton.addEventListener("click", () => {
  if (timeInput.value) {
    let time = parseInt(timeInput.value);
    time = Math.min(Math.max(time, 1), 60); // Limit time between 1 and 60 minutes
    updateTimerDisplay(time, 0);
    timeInput.value = "";
  }
});

let timer;

startButton.addEventListener("click", () => {
  if (!timer) {
    timer = startTimer();
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  updateTimerDisplay(0, 0);
});
