The constructor property of an object referes to the constructor function that was used to create that object
This property is part of the prototype chain and points to the function that was originally used to instantiate the object.


function CustomConstructor() {}
CustomConstructor.prototype = Object.create(Person.prototype);

const customObj = new CustomConstructor();

console.log(customObj.constructor); // Outputs: ƒ Person(name) { this.name = name; }


//CustomObj was created with a prototype chain based on Person.prototype, so its constructor property points to Person even though
// it was created using a different constructor function.

class Animal {
  constructor(type) {
    this.type = type;
  }
}
const dog = new Animal('Dog');
console.log(dog.constructor); // Outputs: class Animal { constructor(type) { this.type = type; } }

