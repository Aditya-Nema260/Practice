# **DOM Practice**

### **1. Selecting Elements**

Given an HTML snippet:

```html
<h1 id="title">Hello</h1>
<p class="desc">Welcome to training</p>
```

**Task:**

* Select the `<h1>` using `getElementById` and change its text to `"Hello Interns!"`.
* Select the `<p>` using `querySelector` and change its text color to `"blue"`.

---

### **2. Changing Content & Styles**

Given:

```html
<div id="box">Old Content</div>
```

**Task:**

* Change the content to `"New Content Loaded"`.
* Add a red border (`2px solid red`) using JavaScript.

---

### **3. Creating and Appending Elements**

**Task:**

* Dynamically create a `<li>` element with text `"Intern 1"`.
* Append it to an existing `<ul id="internList">`.

Example HTML:

```html
<ul id="internList">
  <li>Existing Intern</li>
</ul>
```

After JS execution, list should have both items.

---

### **4. Removing Elements**

Given:

```html
<ul id="tasks">
  <li>Task 1</li>
  <li id="removeMe">Task 2</li>
</ul>
```

**Task:**

* Remove the `<li>` with id `"removeMe"`.

---

### **5. Event Listener – Button Click**

Given:

```html
<button id="clickMe">Click Me</button>
<p id="output"></p>
```

**Task:**

* When the button is clicked, change the `<p>` text to `"Button was clicked!"`.

---

### **6. Event Listener – Mouse Hover**

Given:

```html
<div id="hoverBox" style="width:100px; height:100px; background:gray;"></div>
```

**Task:**

* When the mouse hovers over the box, change its background color to `"green"`.
* When the mouse leaves, change it back to `"gray"`.

---

### **7. Form Validation – Required Field**

HTML:

```html
<form id="signupForm">
  <input type="text" id="username" placeholder="Enter username" />
  <button type="submit">Submit</button>
  <p id="errorMsg"></p>
</form>
```

**Task:**

* Prevent form submission if `username` is empty.
* Show error message `"Username is required"` in `<p id="errorMsg">`.
* If filled, clear error and log `"Form submitted!"`.

---

### **8. Form Validation – Simple Email Check**

HTML:

```html
<form id="emailForm">
  <input type="text" id="email" placeholder="Enter email" />
  <button type="submit">Submit</button>
  <p id="emailError"></p>
</form>
```

**Task:**

* Validate that email contains `"@"`.
* If not, show `"Invalid email format"`.
* Otherwise log `"Valid email"`.

---


### **9. Timers (setTimeout, setInterval, clearInterval)**

* Create a countdown timer:

    * Have a ```<p> that shows: "Countdown: 10"```.
    * On button click:
        * Start a countdown from 10 → 0 using setInterval.
        * When it reaches 0, show "Time’s up!" and stop the interval (clearInterval).

**Bonus:**

* Add another button: "Stop Timer" → stops the countdown midway.

---

## Bonus Questions 

### **1. Toggle Theme**

HTML:

```html
<button id="themeToggle">Toggle Theme</button>
<body id="pageBody">Hello, WIP!</body>
```

**Task:**

* On button click, toggle the background color of the page between `"white"` and `"black"`, and text color between `"black"` and `"white"`.
* content inside body should be `"center-aligned"`, center of the screen.

---

### **2. Character Counter**

* Create a `<textarea>` for user input.
* Below it, display: **"Characters left: 100"**.
* As the user types:

  * Update the remaining count (100 – length of input).
  * Turn the count red if it goes below 0.

---

### **3. Image Slideshow with Timer**

* Add an `<img>` tag and a few images in an array.
* On page load:

  * Automatically change the image every **3 seconds** using `setInterval`.
* Add **"Next"** and **"Previous"** buttons to manually switch images.

---

### **4. Auto-Hide Notification**

* Create a button: **"Show Notification"**.
* On click:

  * Show a notification `<div>` with the message **"This is a notification"**.
  * After **5 seconds**, hide the notification automatically using `setTimeout`.

---

### **5. Stopwatch**

* Add three buttons: **Start, Stop, Reset**.
* Display a timer (`00:00:00` format).
* Functionality:

  * **Start** → begins counting every second.
  * **Stop** → pauses the timer.
  * **Reset** → sets time back to `00:00:00`.

---

### **6. Click Counter with Reset**

* Show a number starting at `0`.
* Each time a button is clicked, increase the number by 1.
* After **10 seconds**, automatically reset the counter to 0.

---

### **7. Mouse Tracker**

* Display the current mouse `X` and `Y` position inside a `<div>`.
* Update the values in real-time as the user moves the mouse.

---

### **8. Typewriter Effect**

* Create a `<p>` element.
* Use `setInterval` to type out the text **"Welcome to DOM Practice!"** one letter at a time.

---
