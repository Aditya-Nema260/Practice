
const text = "Hello World";
console.log(text.charAt(0));     
console.log(text[6]);           
console.log(text.substring(0, 5)); 
console.log(text.split(" "));    
console.log(`Message: ${text}`);  

// **Questions:**
// - What does `charAt(0)` return?
//   H

// - What’s the difference between `substring` and `slice`?
//   Substring takes negative value as 0, and slice start moving moving from last index if it is negative
//   if in substring start index > last index then it will swap those both index values, slice will not swap indexes values

// - What will `split(" ")` return?
//  [H,e,l,l,o, ,W,o,r,l,d]

// - Explain how string interpolation (using backticks `` ` ``) works.
//   normal method - "Hello" +" "+ "World" + " " + 30 + 35
//   using template litral - `Hello World ${30 + 35} `