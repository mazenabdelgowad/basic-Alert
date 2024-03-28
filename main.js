const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const timeInput = document.querySelector("input[type='number']");
const addTimeButton = document.querySelector(".add-time");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const finshTimeAudio = document.querySelector(".finshTimeAudio");

addTimeButton.addEventListener("click", () => {
  if (timeInput.value) {
    if (
      minutesContainer.textContent !== "00" ||
      secondsContainer.textContent !== "00"
    ) {
      minutesContainer.textContent = "00";
      secondsContainer.textContent = "00";
    }

    let time = parseInt(timeInput.value);
    if (time <= 0) minutesContainer.textContent = `01`;
    else if (time < 10) minutesContainer.textContent = `0${time}`;
    else if (time > 60) minutesContainer.textContent = 60;
    else minutesContainer.textContent = time;
    timeInput.value = "";
  } else return;
});

let startTimer;
startButton.addEventListener("click", () => {
  if (+minutesContainer.textContent > 0) {
    minutesContainer.innerHTML--;
    if (+minutesContainer.textContent < 10)
      minutesContainer.textContent = `0${minutesContainer.textContent}`;
    secondsContainer.innerHTML = 59;

    startTimer = setInterval(() => {
      if (+secondsContainer.textContent != 0) {
        secondsContainer.innerHTML--;
        if (parseInt(secondsContainer.textContent) < 10)
          secondsContainer.textContent = `0${secondsContainer.textContent}`;
      } else {
        if (
          +minutesContainer.textContent > 0 &&
          +minutesContainer.textContent < 10
        ) {
          minutesContainer.innerHTML = `0${--minutesContainer.textContent}`;
          secondsContainer.innerHTML = 59;
        } else {
          clearInterval(startTimer);
          minutesContainer.textContent = "00";
          secondsContainer.textContent = "00";
          playFinshTimeSound();
        }
      }
    }, 1000);

    //
  } else return;
});

resetButton.addEventListener("click", () => {
  clearInterval(startTimer);
  minutesContainer.textContent = "00";
  secondsContainer.textContent = "00";
});

function playFinshTimeSound() {
  finshTimeAudio.play();
}
