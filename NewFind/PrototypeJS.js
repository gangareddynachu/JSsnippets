const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

var obj2 = Object.create(personPrototype);
obj2.greet()
Object.assign(Person.prototype,personPrototype);


var p = new Person("person1");
p.greet()
