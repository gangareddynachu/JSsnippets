
//Document Object Model

The browser build DOM of that page which is an object oriented model of its logical structure
DOM of an HTML document can be represented as nested set of boxes

HTML elements become interrelated nodes in tree
Nodes can have child nodes
Nodes on the same tree level are called siblings

//The document Object

predefined document object in JS,used to access all elements on the DOM
document object is the root of all nodes on webpage

document.body.innerHTML = "Some text";
As the body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property.

  
//******Selecting Elements
//finds element by id
document.getElementById(id)

//finds elements by class name
document.getElementsByClassName(name)

//finds elements by tag name
document.getElementsByTagName(name)


//Changing Attributes
var el = document.getElementById("myimg");
el.src = "apple.png";

var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";

//Changing Style
var x = document.getElementById("demo");
x.style.color = "6600FF"
All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.
For example, the background-color property should be referred to as backgroundColor.

//Creating Elements

//element.cloneNode() clones an element and returns the resulting node
//document.createElement(element) creates a new element node.
//document.createTextNode(text) creates a new text node.
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);

//Removing Elements

To remove an HTML element, you must select the parent of the element and use the removeChild(node) method
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);

//other way
var child = document.getElementById("p1");
child.parentNode.removeChild(child);

//Replacing Elements

var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);



//Animation:

window.onload = function() {
    var pos = 0;
    // Our box element
    var box = document.getElementById('box');

    var interval;

    function moveRight() {
        if (pos >= 150) {
            clearInterval(interval);
            interval = setInterval(moveDown, 10);
        } else {
            pos += 1;
            box.style.left = pos + 'px';
        }
    }

    function moveDown() {
        if (pos >= 150) {
            clearInterval(interval);
            interval = setInterval(moveUp, 10);
        } else {
            pos += 1;
            box.style.top = pos + 'px';
        }
    }

    function moveUp() {
        if (pos <= 0) {
            clearInterval(interval);
            interval = setInterval(moveLeft, 10);
        } else {
            pos -= 1;
            box.style.top = pos + 'px';
        }
    }

    function moveLeft() {
        if (pos <= 0) {
            clearInterval(interval);
            interval = setInterval(moveRight, 10);
        } else {
            pos -= 1;
            box.style.left = pos + 'px';
        }
    }

    // Start the animation by moving right
    interval = setInterval(moveRight, 10);
};

//Handling Events

var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}

//Event Propagation

Bubbling: innermost elements are handled first and then the outer elements event is handled
Capturing: outermost elements are handled first and then the inner elemenst event is handled

Capturing goes down the DOM.
Bubbling goes up the DOM.

addEventListener(event, function, useCapture)
//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);



ES6:

Ecmascript is scripting language specification created to standardize javascript
Adds new syntax for writing 
complex applications/
classes/modules/iterators 
and for/of loops , 
generators , 
arrow functions
binary data
typed arrays
collections(maps,sets,weak maps)
promises
number
math enhancements
reflection
proxies

let is not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context.
const is not subject to Variable Hoisting too, which means that const declarations do not move to the top of the current execution context.


//Template Literal

let msg = `The sum is ${a+b}`;

//Loops and Functions in ES6
The for...in loop should NOT be used to iterate over arrays because, depending on the JavaScript engine, it could iterate in an arbitrary order. Also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.

let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}


// Functions in ES6

const greet = x => "Welcome " + x;
const add = (x, y) => {
  let sum = x + y;  
  console.log(sum);
}
const x = () => alert("Hi");

//Default Parameters in ES6 
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5)); //50

ES6 objects:

//function shorthand
let tree={
    height:10,
    grow(){
        this.height=20;
    }
}

//property value shorthand
let height = 5;
let health = 100;

let athlete = {
  height,
  health
};

//When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.
  var a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x) //4
//Duplicate property names generated a SyntaxError in ES5 when using strict mode. However, ES6 removed this limitation.

//Computed Property Names 

//using square bracket notation

let prop = 'name';
let id='1234';
let mobile='08923';

let user={
  [prop]:'Jack',
  [`user_${id}`]:`${mobile}`
}
console.log(user.name);

//Object.assign() in ES6

ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object
Object.assign() is also useful for creating a duplicate of an existing object.

let person ={
    name:'abc'
}
let newperson = person
newperson.name='def';

console.log(person.name); //def
console.log(newperson.name); //def


let newp1 = Object.assign({},person);
newp1.name="xyz";
console.log(person.name); //def
console.log(newp1.name); //xyz


let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});


//Array Destructuring in ES6 

let arr=['a','b','c']
let [one,two,three] = arr;

console.log(one) //a


let a = () => {
    return [1, 3, 2];
};

let [one, , two] = a();

console.log(one); // 1
console.log(two); // 2

//The destructuring syntax also simplifies assignment and swapping values:
let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6
[c, d] = [d, c]; // c = 8, d = 4

//Object Destructuring in ES6 

let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true

let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true

({a,b} = {a:'Hello',b:'Jack'}); //assign without declaration
console.log(a+b);



var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;
let {id:idcustom,name:namecustom} = obj

console.log(id); // 42
console.log(age); // 20

console.log(idcustom); //42

//ES6 Rest Parameters

before
function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

after

function containsAll(arr, ...nums) {
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}



//Iterators and Generators:

Symbol.iterator is the default iterator for the object
The for ..of loop is based on this iterator


let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
...
console.log([...myIterableObj]);


First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.
In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function).


function * idMaker(){
  let index=0;
  while(index<5){
    yield index++;
  }
}
  var gen = idMaker();

gen.next().value;  //0
gen.next().value;  //1

//We can exit and re-enter generator funcitons later.Their variable bindings will be saved across the re-entrances.
    They are very powerful tool for asynchronous programming especially when combined with promises They can be useful for creating loops with special requirements


const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
}; //0 1 2 3 4 

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 4) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);


//Modules

  Pros: maintainability | namespacing=> vars are declared globally which can make namespace polluted as unrelated variables are accessed all over our code
    |Modules solve this problem by creating private space for variables

    reusability: 
    

    Some functions

    let arr = [1,2,3,4,5,6,7,8];
let arr1 = ["abc","def","cfg"];

console.log(arr.filter(x=>x>5));
console.log(arr.find(x=> x>3))
console.log(arr.findIndex(x=>x>3))
console.log(Array(3+1).join("foo"));
console.log("foo".repeat(3))

console.log("Hello".startsWith("He",0))
console.log("Hello".endsWith("He",2))
"SoloLearn".startsWith("Solo", 0); // true
"SoloLearn".endsWith("Solo", 4); // true
"SoloLearn".includes("loLe"); // true
"SoloLearn".includes("olo", 1); // true
"SoloLearn".includes("olo", 2); // false














  















































