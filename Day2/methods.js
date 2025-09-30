

let str = "hello World    "

let newStr = str.trimEnd()
console.log(newStr.length);

let str2 = "        hello World"

let newStr2 = str2.trimStart()
console.log(newStr.length);


const paragraph = "I think Ruth's dog is cuter than your dog!"

console.log(paragraph.replace("I", "Hello I"));
console.log(paragraph.replaceAll("dog", "cat"));
