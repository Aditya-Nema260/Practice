
// ### **1. Object Creation and Properties**

// Create an object `car` with properties:

// * `brand` = `"Toyota"`
// * `model` = `"Corolla"`
// * `year` = `2020`
// * `start` (method) → prints `"Car started"`

//  **Tasks:**

// * Access and print each property using dot notation.
// * Call the `start` method.


// let obj = {
//     brand:"toyota",
//     model:"corolla",
//     year:2020,
//     start:() => {
//         console.log("Car Started");
        
//     }
// }
// console.log(obj.brand);
// console.log(obj.model);
// console.log(obj.year);
// obj.start()


// ### **2. Object Manipulation (Add, Update, Delete)**

// Using the `car` object:

// * Add a property `color = "blue"`.
// * Update `year` to `2022`.
// * Delete `model`.

//  Example:

// ```js
// console.log(car.color); // "blue"
// console.log(car.year);  // 2022
// console.log(car.model); // undefined
// ```

let car = {
    year:2020,
    model:"nx123"
}
car.color = "blue"
car.year = 2022
delete car.model

console.log(car);


// ### **3. Iterating Over Objects**

// Create an object `student` with properties:

// ```js
// const student = { name: "Alice", age: 22, grade: "A" };
// ```

//  **Tasks:**

// * Use **for…in** to print all keys.
// * Use `Object.values()` to print all values.
// * Use `Object.entries()` with **for…of** loop to print key-value pairs.

// ---

const student = { name: "Alice", age: 22, grade: "A" };

for(let key in student){
    console.log(student[key]);
    
}


// ### **4. Using `this` in Object Methods**

// Create an object `person` with properties:

// * `firstName`, `lastName`, `age`
// * Method `getFullName()` → returns full name using `this`.

// 👉 Example Output:

// ```js
// console.log(person.getFullName()); // "John Doe"
// ```

// ---

let person = {
    fn_name:"Jhon",
    ls_name:"Doe",
    age:22,
    getFullName: function() {
        return `${this.fn_name} ${this.ls_name}`
    }
}

console.log(person.getFullName());



// ### **5. Object Destructuring**

// Given object:

// ```js
// const user = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
//   address: { city: "New York", zip: 10001 }
// };
// ```

//  **Tasks:**

// * Extract `name` and `email` into variables.
// * Extract `city` into a variable using **nested destructuring**.


const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: { city: "New York", zip: 10001 }
};

const {name,email,address:{city,zip}} = user

console.log(name, email, city, zip);



// ### **6. Spread & Rest Operators**

// * Create a new object `newUser` by copying all properties of `user` and adding a new property `role = "admin"`.
// * Write a function `sum(...numbers)` that accepts any number of arguments and returns their sum.

//  Example:

// ```js
// sum(1, 2, 3, 4); // 10
// ```

// ---
let newUser = {...user,role : "admin"}

console.log(user);
console.log(newUser);

function sum (...args){
    return args.reduce((a,b) => a+b)
}
console.log(sum(1,2,3,4,5,6));


// ### **7. Template Literals**

// Using the `person` object, print:
//  `"Hello, my name is John Doe and I am 25 years old."`

// (use template literals and `getFullName()` method).

// ---

console.log(`Hello, my name is ${person.getFullName()} and I am ${person.age} years old.`);


// ### **8. Default Parameters**

// Write a function `greet(name = "Guest")` that prints:
//  `"Hello, <name>!"`

// Example:

// ```js
// greet();        // "Hello, Guest!"
// greet("Nitin"); // "Hello, Nitin!"
// ```

// ---

function greet(name="guest"){
    console.log("hello",name);
    
}

greet();        // "Hello, Guest!"
greet("Nitin"); // "Hello, Nitin!"


// ### **9. Class Introduction**

// Create a class `Animal` with:

// * property: `name` (from constructor)
// * method: `speak()` → prints `"<name> makes a sound"`

//  Example:

// ```js
// const dog = new Animal("Dog");
// dog.speak(); // "Dog makes a sound"
// ```

// ---
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
      console.log(this.name, "makes a sound");
      
    }
}

let a1 = new Animal("Dog")

a1.speak()



class Dog extends Animal{
    speak(sound = "Bark"){
        console.log(this.name,"says",sound );
    }
}

const puppy = new Dog("Puppy");
console.log(puppy);

puppy.speak();       
puppy.speak("Woof");



// ### **11. Computed Property Names**

// 👉 Create an object where the key comes from a variable:

// ```js
// const prop = "score";
// const player = { name: "Max", [prop]: 95 };
// console.log(player.score); // ?
// ```

// ---

const name1 = "Full Name"
const experience = "experience in work"
const player = { [name1]: "Jhon", [experience]: 5 };
console.log(player["Full Name"], player["experience in work"]); 