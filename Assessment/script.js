// ## Section B – Short Code Questions (30 Marks → 6 × 5 marks)

// **Time:** 35 minutes

// 1. **Conditional Statement**
//    Write a function `temperatureCheck(temp)` that logs:

// * "Too Cold" if temp < 10
// * "Pleasant" if 10–30
// * "Hot" if > 30

const temperatureCheck = (temp) => {
    if(temp<10) console.log("Too Cold");
    else if(temp > 10 && temp < 30) console.log("Pleasent");
    else console.log("Hot");
}

temperatureCheck(9)
temperatureCheck(18)
temperatureCheck(35)
// 2. **Array Loop & Map**
//    Write a function that doubles every number in an array using `map` and returns a new array.

const double = (numbers) => numbers.map( num => num * 2)
console.log(double([2,3,2,3])); 


// 3. **Object Destructuring & Template Literals**

// ```js
// const user = { name: "Rahul", city: "Pune" };
// // Expected log: "Rahul lives in Pune"
// ```

const user = { name: "Rahul", city: "Pune" };
const {name,city} = user

console.log(`${name} lives in ${city}`);


// 4. **DOM Manipulation**
//    Select a button `#changeColor` and a div `#box`.
//    When the button is clicked, change the div’s background color to blue.

let btn = document.getElementById("btn")
let pageBody = document.getElementsByTagName("body")
btn.addEventListener("click", () => {
    pageBody[0].style.background = "blue"
})


// 5. **Array Methods**
//    Given:

// ```js
// const scores = [45, 72, 88, 30, 95];
// ```

// * Use `filter()` to get scores ≥ 50.
// * Use `reduce()` to calculate the total score.


const scores = [45, 72, 88, 30, 95];

console.log(scores.filter(num => num >= 50));
console.log(scores.reduce((a,b) => a + b));


// 6. **Async/Await + Error Handling**
//    Fetch `https://jsonplaceholder.typicode.com/todos/1` and log `title`.
//    If request fails, print `"Unable to fetch data"`.

async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await res.json()
    console.log("Title :",data.title);
}
fetchData()





// ---




