const secondHand = document.querySelector(".hand.second");
const minuteHand = document.querySelector(".hand.minute");
const hourHand = document.querySelector(".hand.hour");

setInterval(setTime, 1000);

// functions

function setTime() {
  let now = new Date();

  setSecondHandDegree(now);
  setMinuteHandDegree(now);
  setHourHandDegree(now);
}

function setSecondHandDegree(time) {
  let seconds = time.getSeconds();
  let secondHandDegree = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
}

function setMinuteHandDegree(time) {
  let minutes = time.getMinutes();
  let minuteHandDegree = (minutes / 60) * 360 + 90;

  minuteHand.style.transform = `rotate(${minuteHandDegree}deg)`;
}

function setHourHandDegree(time) {
  let hours = time.getHours();
  let hourHandDegree = (hours / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourHandDegree}deg)`;
}
