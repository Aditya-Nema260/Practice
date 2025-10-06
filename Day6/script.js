// **Task:**

// * Select the `<h1>` using `getElementById` and change its text to `"Hello Interns!"`.
// * Select the `<p>` using `querySelector` and change its text color to `"blue"`.

const title = document.getElementById("title");
const desc = document.querySelector(".desc");

title.textContent = "Hello Interns";
desc.style.color = "blue";

// 2. * Change the content to `"New Content Loaded"`.
// * Add a red border (`2px solid red`) using JavaScript.

let box = document.getElementById("box");
box.textContent = "New Content Loaded";

box.style.border = "2px solid red";

// ### **3. Creating and Appending Elements**

// **Task:**

// * Dynamically create a `<li>` element with text `"Intern 1"`.
// * Append it to an existing `<ul id="internList">`.

let ulList = document.getElementById("internList");
let li = document.createElement("li");
li.innerHTML = "<p>Intern 1</p>";
ulList.append(li);

let elem = document.getElementById("removeMe");
elem.remove();

// ### **5. Event Listener – Button Click**
// **Task:**

// * When the button is clicked, change the `<p>` text to `"Button was clicked!"`.

const btn = document.getElementById("clickMe");

btn.addEventListener("click", () => {
  document.getElementById("output").textContent = "Button was clicked";
});

let btn1 = document.getElementById("button");

// btn1.addEventListener("click", () => {
//     console.log(document.getElementById("inputBox").value);
// })

let link = document.getElementById("myAnchor");

function eventPrevention(e) {
  console.log("in funciton");

  e.preventDefault();
}
link.addEventListener("click", eventPrevention);

console.log();

let input = document.getElementById("inputBox");
console.log(input);

function logChange() {
  console.log(input.value);
}

input.addEventListener("input", logChange);

// ### **6. Event Listener – Mouse Hover**

// Given:

// **Task:**

// * When the mouse hovers over the box, change its background color to `"green"`.
// * When the mouse leaves, change it back to `"gray"`.

let hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "green";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "grey";
});

// ### **7. Form Validation – Required Field**

// HTML:

// ```html
// <form id="signupForm">
//   <input type="text" id="username" placeholder="Enter username" />
//   <button type="submit">Submit</button>
//   <p id="errorMsg"></p>
// </form>
// ```

// **Task:**

// * Prevent form submission if `username` is empty.
// * Show error message `"Username is required"` in `<p id="errorMsg">`.
// * If filled, clear error and log `"Form submitted!"`.

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let usernameInput = document.getElementById("username");
  let errorMsg = document.getElementById("errorMsg");
  let username = usernameInput.value
  if(!username.length){
    errorMsg.textContent = "Username is required"
  }else{
    errorMsg.textContent= ""
    console.log("Form Submitted");
  }
});

// **Task:**

// * Prevent form submission if `username` is empty.
// * Show error message `"Username is required"` in `<p id="errorMsg">`.
// * If filled, clear error and log `"Form submitted!"`.
// **Task:**

// * Validate that email contains `"@"`.
// * If not, show `"Invalid email format"`.
// * Otherwise log `"Valid email"`.

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const errorDisplay = document.getElementById("emailError");
  const email = emailInput.value;

  if (!email.includes("@")) {
    errorDisplay.textContent = "Invalid email format";
  } else {
    errorDisplay.textContent = "";
    console.log("Valid email");
  }
});



// ### **9. Timers (setTimeout, setInterval, clearInterval)**

// * Create a countdown timer:

//     * Have a ```<p> that shows: "Countdown: 10"```.
//     * On button click:
//         * Start a countdown from 10 → 0 using setInterval.
//         * When it reaches 0, show "Time’s up!" and stop the interval (clearInterval).

// **Bonus:**

// * Add another button: "Stop Timer" → stops the countdown midway.

// ---


const countDisplay = document.getElementById("count");
const startBtn = document.getElementById("countBtn");
const stopBtn = document.getElementById("stop");

let count = 10
let intervalId

startBtn.addEventListener("click", () => {
  
  if (intervalId) return;

  count = 10;
  countDisplay.textContent = `Countdown: ${count}`;

  intervalId = setInterval(() => {
    count--;
    if (count >= 0) {
      countDisplay.textContent = `Countdown: ${count}`;
    }
    if (count === 0) {
      countDisplay.textContent = "Time’s up";
      clearInterval(intervalId)
      intervalId = null
    }
  }, 500);
});

stopBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    countDisplay.textContent = "Timer stopped.";
  }
})
