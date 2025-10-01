class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed; 
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks!`);
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); 



const prop = "score";
const player = { name: "Max", [prop]: 95 };
console.log(player.score); 
