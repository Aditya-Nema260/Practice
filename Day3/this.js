
// console.log(this);


// let obj = {
//     name : "JK",
//     greetMyself : function() {console.log("hello ", this.name)}
     
// }

// obj.greetMyself()


// //spread

// let obj1 = {
//     age : 22
// }

// let obj3 = {...obj,...obj1}

// obj3.name = "an"
// console.log(obj3);
// console.log(obj1);
// console.log(obj);


const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      zip: "10001"
    },
    hobbies: ["reading", "hiking"]
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    address: {
      city: "Los Angeles",
      zip: "90001"
    },
    hobbies: ["gaming", "cooking"]
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    address: {
      city: "Chicago",
      zip: "60601"
    },
    hobbies: ["cycling", "music"]
  }
];


let [{id,address},obj2,obj3] = users


// let newArr = users.reduce((acc,curr) => {
// curr.age += 5
// acc.push(curr)
// return acc 
// },[])
// console.log(newArr);


// let number = 123
// let sum = 0

// for(let num of  number + "" ){
//     sum += +num
// }

// console.log(sum);


