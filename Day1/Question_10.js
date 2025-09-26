sayHello();
console.log(x);
function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;

// - What happens with `sayHello()`?
//   Will print Hello!

// - What gets logged for `x`?
//   Undefined

// - What if you also add `console.log(y)` before declaration?
//   will through error (can't use y before intialized)