let x = 7;
let y = 3;
console.log(x % y);    
console.log(x > y && y > 0);  
console.log(x < y || y > 0);  
console.log(!(x === y));  



// What will each line output?

// 1
// true
// true
// true

// Explain the difference between `&&` and `||`.

// && operater will check both side condition even if any one condition is then it will 
// return false, the both condition should be true in && case

// || will check conditions and if any one will get true it will return true, any one condition can be true in || case


// Why does `!(x === y)` return true here?
// ! is not operator so it will return the oppsite of resulted condition so x===y is false but it return opposite of it