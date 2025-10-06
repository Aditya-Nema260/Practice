// ### **1. Toggle Theme**

// HTML:

// ```html
// <button id="themeToggle">Toggle Theme</button>
// <body id="pageBody">Hello, WIP!</body>
// ```

// **Task:**

// * On button click, toggle the background color of the page between `"white"` and `"black"`, and text color between `"black"` and `"white"`.
// * content inside body should be `"center-aligned"`, center of the screen.

// ---

let themeToggle = document.getElementById("themeToggle");
let pageBody = document.getElementById("pageBody");

themeToggle.addEventListener("click", () => {
  let bodyColor = pageBody.style.backgroundColor;

  if (bodyColor === "black") {
    pageBody.style.backgroundColor = "white";
    pageBody.style.color = "black";
  } else {
    pageBody.style.backgroundColor = "black";
    pageBody.style.color = "white";
  }
});

// ### **2. Character Counter**

// * Create a `<textarea>` for user input.
// * Below it, display: **"Characters left: 100"**.
// * As the user types:

//   * Update the remaining count (100 – length of input).
//   * Turn the count red if it goes below 0.

let textArea = document.getElementById("textArea");
let charCount = document.getElementById("charCount");

textArea.addEventListener("input", () => {
  if (textArea.value.length < 100) {
    charCount.style.color = "black";
    charCount.textContent = `Characters left: ${100 - textArea.value.length}`;
  } else {
    charCount.style.color = "red";
    charCount.textContent = `Characters left: 0`;
  }
});

// ### **4. Auto-Hide Notification**

// * Create a button: **"Show Notification"**.
// * On click:

//   * Show a notification `<div>` with the message **"This is a notification"**.
//   * After **5 seconds**, hide the notification automatically using `setTimeout`.

let notificationBtn = document.getElementById("notificationBtn");
let notification = document.getElementById("notification");

notificationBtn.addEventListener("click", () => {
  notification.textContent = "This is a notification";
  setTimeout(() => {
    notification.textContent = "";
  }, 5000);
});

let coordinates = document.getElementById("coordinates");

pageBody.addEventListener("mousemove", (e) => {
  coordinates.textContent = `x : ${e.clientX} y:${e.clientY}`;
});

// ### **8. Typewriter Effect**

// * Create a `<p>` element.
// * Use `setInterval` to type out the text **"Welcome to DOM Practice!"** one letter at a time.

// ---

let str = "Welcome to DOM Practice!";
let typewriter = document.getElementById("typewriter");
let i = 0;
let intervalID = setInterval(() => {
  if (typewriter.textContent.length < str.length) {
    typewriter.textContent += str[i];
    i++;
  } else {
    clearInterval(intervalID);
  }
}, 1000);
