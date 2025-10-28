// You can create objects in JavaScript using different methods. Here are some common ways to create objects:

// 1. Object Literal
const person1 = {
    name: 'Alice',
    age: 30,
};

// 2. Using the Object Constructor
const person2 = new Object();
person2.name = 'Bob';
person2.age = 25;

// 3. Using a Constructor Function
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person('Charlie', 35);

// 4. Using ES6 Classes
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person4 = new PersonClass('Diana', 28);
