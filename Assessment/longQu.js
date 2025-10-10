// ### 2️⃣ Async + Timers + Promises (20 Marks)

// Write a script that:

// * Logs “Start Process”
// * Uses `setTimeout` (2 s) to log “Timer Done”
// * Creates a Promise that resolves after 1 s with “Promise Resolved”
// * Fetches `https://jsonplaceholder.typicode.com/comments/1` and logs `email`
// * Logs “End Process” immediately after the synchronous code

// **Expected Console Order:**

// ```
// Start Process
// End Process
// Promise Resolved
// [email from API]
// Timer Done
// ```


// ### 1️⃣ DOM + Events + Objects (20 Marks)

// Build a small webpage that:

// * Has an input field for product name and price.
// * On clicking “Add Product”, add the data into a table below with two columns (Name & Price).
// * Each row should have a “Delete” button to remove that entry.
// * Maintain the data in an array and re-render when updated.

// **Marking Scheme:**

// * DOM selection & event binding → 5
// * Add row & delete row functionality → 10
// * Array data handling → 5





console.log("Strart Process");
console.log("End Process");

let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 1000);
});

async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  let data = await res.json();
  console.log("Title :", data.email);
}

p.then((res) => console.log(res));

setTimeout(() => {
  fetchData();
  console.log("Timer Done");
  
},1000);
