let result1 = 0;
let result2 = 0;
let countDownMin = 3;
let countDownSec = 60;
let interval = 0;
let countDownTimerMin = document.getElementById("timer-min");
let countDownTimerSec = document.getElementById("timer-sec");
let homeScore = document.getElementById("home-Score");
let guestScore = document.getElementById("guest-Score");

function addHomeScoreByOne() {
  result1 += 1;
  homeScore.innerText = result1;
  console.log(result1);
}

function addHomeScoreByTwo() {
  result1 += 2;
  homeScore.innerText = result1;
  console.log(result1);
}

function addHomeScoreByThree() {
  result1 += 3;
  homeScore.innerText = result1;
  console.log(result1);
}

function addGuestScoreByOne() {
  result2 += 1;
  guestScore.innerText = result2;
  console.log(result2);
}

function addGuestScoreByTwo() {
  result2 += 2;
  guestScore.innerText = result2;
  console.log(result2);
}

function addGuestScoreByThree() {
  result2 += 3;
  guestScore.innerText = result2;
  console.log(result2);
}

function newGame() {
  result1 = 0;
  result2 = 0;
  homeScore.innerText = result1;
  guestScore.innerText = result2;
  /*countDownTimerMin.innerText = countDownMin;
  countDownTimerSec.innerText = countDownSec;*/
  clearInterval(interval);
  countDownTimerMin.innerText = 0;
  countDownTimerSec.innerText = 0;
}

/*function newGame() {
  result1 = 0;
  result2 = 0;
  homeScore.innerText = result1;
  guestScore.innerText = result2;
  countDownTimer.innerText = countDown;
  countDownTimer.innerText = countDown;
  interval = setInterval(timer, 1000);
}*/

function startGame() {
  countDownTimerMin.innerText = countDownMin;
  countDownTimerSec.innerText = countDownSec;
  interval = setInterval(timer, 1000);
}
function timer() {
  if (countDownMin == 0) {
    countDownSec = 0;
    countDownTimerSec.innerText = countDownSec;
    clearInterval(interval);
  } else if (countDownSec == 1 && countDownMin > 0) {
    countDownMin -= 1;
    countDownSec = 60;
    countDownTimerSec.innerText = countDownSec;
    countDownTimerMin.innerText = countDownMin;
  } else {
    countDownSec -= 1;
    countDownTimerSec.innerText = countDownSec;
  }
}

/*function highlightLeader() {
  if (homeScore.innerText > guestScore.innerText) {
    homeScore.style.color = "greenyellow";
  } else {
    guestScore.style.color = "greenyellow";
  }
}*/
