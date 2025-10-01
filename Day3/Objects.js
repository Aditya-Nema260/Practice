let obj = {a : 12, b:"ANN"}
let obj2 ={c: 10, d: 15}

console.log(obj);

let obj3 =Object.assign(obj,obj2)
console.log(obj3,obj,obj2);

// console.log(obj);
// // console.log(obj3);
// console.log(obj2);

// // console.log(obj3 === obj);

// // let str = "aditya nema"

// // let newStr = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

// // console.log(newStr);



// let obj3 = {id:1,name:"Alice"} 

// let map = new Map() 


// for(let key in obj3){
//     let value = obj3[key];
//     map.set(key,value)
// }

// console.log(map);

// const paragraph = "I think Ruth's dog is cuter than your dog!"

// let reversedWord = paragraph.split(" ").map(char => char.split("").reverse().join("")).join(" ")

// console.log(reversedWord);


// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const wordCount = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);



let object = {
  name:"an",
  address:{
    pincode:"32323",
    line:1212
  }
}
let {name,address:{pincode:pc,line}} = object
console.log(name,pc);
