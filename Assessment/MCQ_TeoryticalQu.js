/** ## Section A – MCQs & Conceptual Questions (30 Marks → 15 × 2 marks)  
**Time:** 25 minutes

1. Which of the following **cannot be reassigned** after initialization?  
   a) var b) let c) const d) none
   Ans - const

2. What will be logged?
```js
console.log(2 + "2" - 2);
````

a) 22 b) 2 c) 20 d) NaN

Ans -  20 (Because + is use for addtion as well for concat string it concat 2 + "2" and ans will be 22 and after subtraction it will deduct 2 from number.)


3. Define **hoisting** in one line.

Ans - In global execution context when memory phase run it stores all the variable assign undefine to them. So it looks line variable define at the top of code thats called hoisting.

4. Which operator checks **both value and type** equality?
   a) == b) === c) != d) !==

   ANS - ===

5. What will this output?

```js
console.log([1, 2, 3].map(n => n * 2));
```

a) [1, 2, 3] b) [2, 4, 6] c) [2, 3, 4] d) Error

ANS - [2,4,6]

6. Which statement about **arrow functions** is true?
   a) They have their own `this`
   b) They do not bind `this`
   c) They use `function` keyword
   d) They always return `undefined`
   
  ANS -  b) They do not bind `this`


7. Which DOM method selects **all** elements with a CSS selector?
   a) getElementById b) querySelectorAll c) getElementsByName d) querySelector

   ANS - b) querySelectorAll

8. What will be printed?

```js
let x;
console.log(typeof x);
```

a) "null" b) "undefined" c) "object" d) "number"

ANS - b) "undefined"

9. Which array method removes the **first** element?
   a) pop() b) shift() c) splice() d) unshift()

   ANS - b) shift()

10. What does `preventDefault()` do in event handling?

ANS - It stops the default behavior of the event For example -  when we click on link it redirects page to src link to avoid the redirect to another we can use prevent default same for submit event it prevent it default behavior so page will not refresh

11. Which method returns **true** if at least one element passes the condition?
    a) forEach b) filter c) some d) map

ANS - c) some

12. Output?

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj, { b: 2 });
console.log(copy);
```

a) {a: 1, b: 2} b) {b: 2} c) {a: 1} d) error

ANS - a) {a: 1, b: 2}

13. What is a **closure** in JavaScript? (1 line)

Ans -  When function remembers it lexical vairable value even after outter or parent function stops its execution but we can use that variable  

14. In the event loop, which runs first?
    a) setTimeout b) Promise callback c) I/O d) setInterval

ANS - b) Promise callback

15. What is the purpose of the **spread operator** (`...`) ? (1 line)\

ANS - It useed to spread the values of array and obj and also can be use to create the shallow copy of arrays and object 
**/
