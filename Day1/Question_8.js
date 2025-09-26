// ## 8. Type Coercion (String Interpolation & Comparisons)
// ```js
// console.log(1 + "2");     
// console.log("2" * 3);     
// console.log(0 == false);  
// console.log(0 === false); 
// console.log([] == false); 
// console.log([] === false);

// const num = 5;
// const str = "5";
// console.log(num == str);  
// console.log(num === str); 
// console.log(`${num + 5} is greater than ${str}`);  
// ```

// **Questions:**
// - What will each line output?
// console.log(1 + "2");     12
// console.log("2" * 3);     6
// console.log(0 == false);  true
// console.log(0 === false); false
// console.log([] == false); true
// console.log([] === false); false
// console.log(num == str);  true
// console.log(num === str); false


// - Which comparisons use type coercion and which don’t?
//   the values which have === are not coerced because it is strict equality operator
// - Why does `==` behave differently from `===`?
// == only compares both values whereas === checks values as well as data type

// - In the last line, how does string interpolation handle numbers inside `${}`?
//  In template litrals js embeded string with the logic so whatever inside ${this block} will be solved logically

