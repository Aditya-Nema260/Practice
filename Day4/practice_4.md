
# **Day 4 Practice Assignment (Final)**

### **1. Object Creation and Properties**

Create an object `car` with properties:

* `brand` = `"Toyota"`
* `model` = `"Corolla"`
* `year` = `2020`
* `start` (method) → prints `"Car started"`

 **Tasks:**

* Access and print each property using dot notation.
* Call the `start` method.

---

### **2. Object Manipulation (Add, Update, Delete)**

Using the `car` object:

* Add a property `color = "blue"`.
* Update `year` to `2022`.
* Delete `model`.

 Example:

```js
console.log(car.color); // "blue"
console.log(car.year);  // 2022
console.log(car.model); // undefined
```

---

### **3. Iterating Over Objects**

Create an object `student` with properties:

```js
const student = { name: "Alice", age: 22, grade: "A" };
```

 **Tasks:**

* Use **for…in** to print all keys.
* Use `Object.values()` to print all values.
* Use `Object.entries()` with **for…of** loop to print key-value pairs.

---

### **4. Using `this` in Object Methods**

Create an object `person` with properties:

* `firstName`, `lastName`, `age`
* Method `getFullName()` → returns full name using `this`.

👉 Example Output:

```js
console.log(person.getFullName()); // "John Doe"
```

---

### **5. Object Destructuring**

Given object:

```js
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: { city: "New York", zip: 10001 }
};
```

 **Tasks:**

* Extract `name` and `email` into variables.
* Extract `city` into a variable using **nested destructuring**.

---

### **6. Spread & Rest Operators**

* Create a new object `newUser` by copying all properties of `user` and adding a new property `role = "admin"`.
* Write a function `sum(...numbers)` that accepts any number of arguments and returns their sum.

 Example:

```js
sum(1, 2, 3, 4); // 10
```

---

### **7. Template Literals**

Using the `person` object, print:
 `"Hello, my name is John Doe and I am 25 years old."`

(use template literals and `getFullName()` method).

---

### **8. Default Parameters**

Write a function `greet(name = "Guest")` that prints:
 `"Hello, <name>!"`

Example:

```js
greet();        // "Hello, Guest!"
greet("Nitin"); // "Hello, Nitin!"
```

---

### **9. Class Introduction**

Create a class `Animal` with:

* property: `name` (from constructor)
* method: `speak()` → prints `"<name> makes a sound"`

 Example:

```js
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound"
```

---

### **10. Class with Methods & Default Params**

Extend `Animal` class to `Dog`:

* add a method `speak(sound = "Bark")` → prints `"<name> says Bark"`.

 Example:

```js
const puppy = new Dog("Puppy");
puppy.speak();       // "Puppy says Bark"
puppy.speak("Woof"); // "Puppy says Woof"
```

---

## 🔥 **Advanced Bonus Questions**

### **11. Computed Property Names**

👉 Create an object where the key comes from a variable:

```js
const prop = "score";
const player = { name: "Max", [prop]: 95 };
console.log(player.score); // ?
```

---
