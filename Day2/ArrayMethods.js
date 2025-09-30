// From an array of numbers [12, 5, 8, 130, 44], return only the numbers greater than 10.  
// From an array of words ["cat", "elephant", "dog", "tiger"], filter out words shorter than 4 letters.

let numbers = [12, 5, 8, 130, 44]

let nums = numbers.filter(num => num > 10)

console.log(nums);

let words = ["cat", "elephant", "dog", "tiger"]

let wrds = words.filter((word) => word.length < 4)

console.log(wrds);


// Given [1, 2, 3, 4], create a new array with the squares of each number.  
// Convert an array of names ["alice", "bob", "charlie"] into uppercase.

let square =  [1, 2, 3, 4].map(num => num * num)

console.log(square);

console.log(["alice", "bob", "charlie"].map(word => word.toUpperCase()))

// Find the sum of numbers in [3, 7, 2, 9].  
// Find the product of all numbers in [2, 3, 4].  
// Count how many times each word appears in ["apple", "banana", "apple", "orange", "banana", "apple"].

console.log([3, 7, 2, 9].reduce((a,b) => a + b));
console.log([2,3,4].reduce((a,b) => a * b));

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
let map = new Map()

for(let fruit of fruits){
    map.set(fruit , (map.get(fruit) || 0) + 1)
}

console.log(map);

// From [1,2,3,4,5,6], extract numbers from index 2 to 4.  
// Copy the last 3 elements of an array without modifying the original.

console.log([1,2,3,4,5,6].slice(2, 5));
console.log([1,2,3,4,5,6].slice(-3));

// From [10,20,30,40,50], remove the element at index 2.  
// Insert "hello" and "world" at index 1 of [1,2,3].

let arr = [10,20,30,40,50]
arr.splice(2,1)
console.log(arr);

let arr1 = [1,2,3]
arr1.splice(1,0,"hello","world")
console.log(arr1);

// Remove the first element from ["red", "green", "blue"].  
// Add "yellow" to the beginning of ["apple", "banana"].

let arr3 = ["red", "green", "blue"]
arr3.shift()
console.log(arr3);

let arr4 = ["apple","banana"]
arr4.unshift("yellow")
console.log(arr4);

// Add "grapes" to the end of ["apple", "banana"].  
// Remove the last element of ["pen", "pencil", "eraser"].

let arr5 = ["apple","banana"]
arr5.push("grapes")
console.log(arr5);

let arr6 = ["pen", "pencil", "eraser"]
arr6.pop()
console.log(arr6);


// Find the length of ["java", "python", "js", "c++"].  
// Use .length to get the last element of [100,200,300,400].

console.log(["java", "python", "js", "c++"].length);
let arr7 = [100,200,300,400]
console.log(arr7[arr7.length - 1]);

// From ["dog", "cat", "rabbit", "dog"], find the first occurrence index of "dog".  
// Check what index "lion" would return in the same array.

console.log(["dog", "cat", "rabbit", "dog"].indexOf("dog"));
console.log(["dog", "cat", "rabbit", "dog"].indexOf("lion"));

// Check if "apple" exists inside ["banana", "mango", "grapes"].  
// Check if "zebra" exists inside [1,2,3,4,5].

console.log(["banana", "mango", "grapes"].includes("apple"));
console.log([1,2,3,4,5].includes("zebra"));


// Flatten the array [1, [2, 3], [4, [5, 6]]] just one level deep.  
// Fully flatten [1, [2, [3, [4]]]].


let arr8 = [1, [2, 3], [4, [5, 6]]]
console.log(arr8.flat())
console.log([1, [2, [3, [4]]]].flat(3));


// Sort [40, 100, 1, 5, 25, 10] in ascending order.  
// Sort ["banana", "apple", "cherry"] alphabetically.

let sortedArr = [40, 100, 1, 5, 25, 10].sort((a,b) => a - b) 
console.log(sortedArr);
console.log(["banana", "apple", "cherry"].sort());

// Reverse [1,2,3,4,5].  
// Reverse the characters of "hello" using split, reverse, and join.

console.log( [1,2,3,4,5].reverse());
console.log("hello".split("").reverse().join(""));

// Find the first number greater than 50 in [10, 20, 60, 40, 80].  
// Find the first word with more than 5 letters in ["cat", "elephant", "dog"].

console.log([10, 20, 60, 40, 80].find(num => num > 50));
console.log(["cat", "elephant", "dog"].find(word => word.length > 5));

// Return the last element of [1, 2, 3, 4, 5] using .at().  
// Return the second-to-last element using .at().

let arr10 = [1, 2, 3, 4, 5]
console.log(arr10.at(-1))
console.log(arr10.at(-2))

// Create a Set with ["apple", "banana", "mango"]. Check if "banana" exists.  
// Create a Map with {id:1,name:"Alice"} and check if the key "name" exists.

let set = new Set(["apple", "banana", "mango"])
console.log(set.has("banana"));

let map2 = new Map([["id",1],["name","alice"]])
console.log(map2.has("name"));
 

// Take an array of student marks [45, 67, 89, 34, 56].  
//   1. Filter students who scored above 50.  
//   2. Sort them in descending order.  
//   3. Find the average marks. 

let arr11 = [45, 67, 89, 34, 56]

let filteredArr = arr11.filter(num => num > 50).sort((a,b) => b - a)

console.log(filteredArr);

let average = (arr11.reduce((a,b) => a + b))/arr11.length

console.log(average);


// From a sentence "I love JavaScript arrays so much",  
//   1. Convert it to an array of words.  
//   2. Reverse the order of words.  
//   3. Remove the first word and last word.

let str2 = "I love JavaScript arrays so much"
let manipulatedString = str2.split(" ").reverse()
manipulatedString.pop()
manipulatedString.push()
console.log(manipulatedString);