const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const timeInput = document.querySelector("input[type='number']");
const addTimeButton = document.querySelector(".add-time");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const finshTimeAudio = document.querySelector(".finshTimeAudio");
const minutes = minutesContainer.textContent;
const seconds = secondsContainer.textContent;

addTimeButton.addEventListener("click", () => {
  if (timeInput.value) {
    if (minutes !== "00" || seconds !== "00") {
      minutes = "00";
      seconds = "00";
    }

    let time = parseInt(timeInput.value);
    if (time <= 0) minutesContainer.textContent = `01`;
    else if (time < 10) minutesContainer.textContent = `0${time}`;
    else if (time > 60) minutesContainer.textContent = 60;
    else minutesContainer.textContent = time;
    timeInput.value = "";
  } else return;
});

console.log(+minutes);

let startTimer;
startButton.addEventListener("click", () => {
  if (+minutesContainer.textContent > 0) {
    if (+minutesContainer.textContent > 1) {
      minutesContainer.textContent--;
      secondsContainer.textContent = 3;
    }

    startTimer = setInterval(() => {
      secondsContainer.textContent--;
      if (
        secondsContainer.textContent == 0 &&
        minutesContainer.textContent == 0
      ) {
        clearInterval(startTimer);
        playFinshTimeSound();
        minutesContainer.textContent = "00";
        secondsContainer.textContent = "00";
      } else if (
        secondsContainer.textContent == 0 &&
        minutesContainer.textContent != 0
      )
        minutesContainer.textContent--;
    }, 1000);
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(startTimer);
  minutesContainer.textContent = "00";
  secondsContainer.textContent = "00";
});

function playFinshTimeSound() {
  finshTimeAudio.play();
}
