/**
 * Dom Manipulation
 * Eventlisteners
 * Timer
 * propogation -> Event bubble
 * Manipulation on elements
 * Event Deligation
 */

const counter = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.addEventListener("click", () => {
  let { innerText } = counter;
  counter.innerText = +innerText + 1;

  console.log(counter.innerText);
  console.log(innerText);
});

dec.addEventListener("click", () => {
  const { innerText } = counter;
  counter.innerText = +innerText - 1;
});

const timer = document.querySelector("#timer");
const timerStart = document.querySelector("#timerStart");
const timerRemove = document.querySelector("#timerRemove");

// multiple timers -> timer not updating
const updateTimer = (timer) => {
  // timer -> element
  const { innerText } = timer;
  // + is the short hand property of -> Number("1")
  timer.innerText = +innerText + 1;
};

let timerId;

const timerUpdate = () => {
  if (timerId) clearInterval(timerId);
  timerId = setInterval(updateTimer, 1000, timer);
};

timerStart.addEventListener("click", timerUpdate);

timerRemove.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  timerStart.removeEventListener("click", timerUpdate);
});

// Query selector method
// const list = document.querySelectorAll('.list')
// list.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target.innerText)
//     })
// })





const parentList = document.querySelector("#parent-list");
parentList.addEventListener("click", (e) => {
  if (e.target.classList[0] === "list") {
    console.log(e.target.innerText);
  }
});

const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const outerBox = document.querySelector("#outer-box");
const innerBox = document.querySelector("#inner-box");

outerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Outer box");
});
innerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner Box");
});

const toggleBtn = document.getElementById("toggle-btn");
const toggletext = document.getElementById("toggle-text");

toggleBtn.addEventListener("click", () => {
  if (toggletext.style.visibility === "hidden") {
    toggletext.style.visibility = "visible";
  } else {
    toggletext.style.visibility = "hidden";
  }
});
