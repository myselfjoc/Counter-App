// time

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// btns

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");

// time counter

let secCount = 0;
let minCount = 0;
let hrsCount = 0;

// global Variable for storing SetInterval

let timer;
let toggled = "continue";
// Reset function for set deault Setting

function reset() {
  // btns disable
  start.disabled = false;
  pause.disabled = true;
  stop.disabled = true;

  pause.innerText = "Pause";

  //   time default
  hrs.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
}

reset();

// for start
 
start.addEventListener("click", function () {
  console.log("start");
  start.disabled = true;
  pause.disabled = false;
  stop.disabled = false;

  timer = setInterval(stopWatchTimer, 1000); //use scoping or make this function for globally used
});

// for pause

   pause.addEventListener("click", function () {
  if (pause.value == "pause") {
    clearTimeout(timer);
    pause.value = "continue";
    pause.innerHTML = "Continue";
  } else {
    timer = setInterval(stopWatchTimer, 1000);
    pause.value = "pause";
    pause.innerHTML = "Pause";
  }
});

// for stop
stop.addEventListener("click", function () {
  console.log("stop");
  clearInterval(timer);
  reset();
  secCount = 0;
  minCount = 0;
  hrsCount = 0;
});

function stopWatchTimer() {
  secCount++;
  if (secCount <= 9) {
    sec.innerHTML = "0" + secCount;
  }

  if (secCount > 9) {
    sec.innerHTML = secCount;
  }

  if (sec.innerHTML >= 60) {
    secCount = 0;
    sec.innerHTML = "0" + "0";
    minCount++;
    min.innerHTML = "0" + minCount;
  }

  if (min.innerHTML > 9) {
    min.innerHTML = minCount;
  }

  if (min.innerHTML >= 60) {
    minCount = 0;
    min.innerHTML = "0" + "0";
    hrsCount++;
    hrs.innerHTML = "0" + hrsCount;
  }

  if (hrs.innerHTML > 9) {
    hrs.innerHTML = hrsCount;
  }

  if (hrs.innerHTML == 24) {
    reset();
    clearInterval(timer);
    secCount = 0;
    minCount = 0;
    hrsCount = 0;
  }
}
