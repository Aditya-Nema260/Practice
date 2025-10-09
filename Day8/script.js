// ## 📌 Part 1: Event Loop & Execution Order

// 1.  Predict the output of the following code **before running it**:

// ``` js
// console.log('1');

// setTimeout(() => console.log('timeout 1'), 0);

// Promise.resolve().then(() => console.log('promise 1'));

// console.log('2');

// setTimeout(() => console.log('timeout 2'), 0);

// Promise.resolve().then(() => console.log('promise 2'));

// console.log('3');
// ```

// 1
// 2
// 3
// promise 1
// promise 2
// timeout 1
// timeout 2

// 2.  Analyze this code and explain the exact order of execution:

// ``` js
// async function test() {
//   console.log('A');
//   await Promise.resolve();
//   console.log('B');
// }
// test();
// console.log('C');
// ```

// -   Question: What happens inside the **microtask queue** when `await`
//     is used?

// At the time of code execution it wi;; run syncronously so, first test() will be executed
// and A will printed because it is asyncronous but the promise will be direct to microtask queue and js thread will continue it line by line execution so C will be printed once the call stack go empty the promise will be shifted from task queue to callstack and executed,so B will be printed and output will be - A C B

// ## 📌 Part 2: Timers & Blocking

// 1.  Run this code and measure the delay:

// ``` js
// console.time('timer');
// setTimeout(() => {
//   console.timeEnd('timer');
// }, 2000);

// for (let i = 0; i < 1e9; i++) {} // heavy loop
// ```

// -   Question: Why does the `setTimeout` callback run **later than 2s**?

// console.time('timer');

// setTimeout(() => {
//   console.timeEnd('timer');
// }, 2000);

// for (let i = 0; i < 4e9; i++) {}

// Call stack is not empty because of expensive syncronous task so the timeout function have to wait more to be in call stack thats why it took more than 2 second

// ## 📌 Part 3: Callbacks vs Promises vs Async/Await

// 1.  Write the same logic in 3 different ways:
//     -   Using `setTimeout(callback)`
//     -   Using `Promise.then`
//     -   Using `async/await`

// Logic: Wait for 2 seconds, then print `"Done!"`.

setTimeout(() => {
  console.log("Settimeout -> Done!");
}, 2000);

let fn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
fn().then(() => console.log("Promise -> Done"));

function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

async function asaw() {
  await fn1();
  console.log("Async/Await -> Done");
}
asaw();

// ## 📌 Part 4: Mini Project -- Fetch with Loading & Skeleton

// 👉 Create an `index.html` file with: - A button `"Load Users"`. - A
// container `<div id="users"></div>`.

// When button is clicked: 1. Show **skeleton cards** (gray boxes). 2.
// Fetch data from <https://jsonplaceholder.typicode.com/users>. 3. Replace
// skeletons with actual user data (name, email, phone). 4. If fetch fails,
// show an error message `"Failed to load data"`.

// **Extra:** - Add a `"Reload"` button to refetch users. - Show a
// `"Loading..."` text before skeletons appear.

// console.log("hello");

const loadBtn = document.getElementById("loadBtn");
const reloadBtn = document.getElementById("reloadBtn");
const usersDiv = document.getElementById("users");

function showSkeletons(count = 5) {
  usersDiv.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement("div");
    skeleton.textContent = "Loading...";
    usersDiv.appendChild(skeleton);
  }
}

function showUsers(users) {
  usersDiv.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerText = `${user.name}\n${user.email}\n${user.phone}\n...........................`;
    usersDiv.appendChild(div);
  });
}

function showError() {
  usersDiv.innerText = "Failed to load data";
}

async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    showUsers(data);
    reloadBtn.hidden = false;
  } catch (err) {
    showError();
    reloadBtn.hidden = false;
  }
}

loadBtn.addEventListener("click", () => {
  showSkeletons();
  setTimeout(() => {
    loadUsers();
  }, 2000);

  loadBtn.hidden = true;
});

reloadBtn.addEventListener("click", () => {
  loadUsers();
});

// Given this snippet, fix it so that it prints in the correct order:\
// Expected: `1 → 2 → 3 → 4`

// ``` js
console.log(1);

setTimeout(() => console.log(4), 0);

Promise.resolve().then(() => console.log(3));

console.log(2);
