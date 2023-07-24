//How to do import in javascript 

//ES6 Modules:
import {functionName} from './module-file';
import {functionName1,functionName2} from './module-file';
import * as module from './module-file';
import defaultExport from './module-file';

export function functionName() { ... }
export const variableName = 42;
export default someValue; // Default export (only one default export allowed per module)

//CommonJS (Node.js)

const functionName = require('./module-file').functionName;
const {functionName1,functionName2} = require('./module-file');

exports.functionName = function(){....};
exports.variableName = 42;
module.exports = someValue;

********************************
 //math.js 
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export the functions so that other modules can use them
module.exports = {
  add: add,
  subtract: subtract,
};


// app.js

// Import the math module
const mathModule = require('./math');

// Use the functions from the math module
const result1 = mathModule.add(5, 3); // 8
const result2 = mathModule.subtract(10, 4); // 6

console.log(result1);
console.log(result2);
********************************
//console statements are defferefd in execution sometimes so you might see index be 2 when you actaully see the object
var a = {
index: 1
};
// later
console.log( a ); // ??
// even later
a.index++;

// But it's possible this same code could run in a situation where the browser felt it needed to defer the
// console I/O to the background, in which case it's possible that by the time the object is represented in the browser console,
// the a.index++ has already happened, and it shows { index: 2 } .
********************************
  
//Array to Object
var techBrands = ["facebook","Apple","Amazon","Netflix","Google"];
var object = {...techBrands}
console.log(object);

//fill Array with data
var newArray = new Array(6).fill('Helllo');
console.log(newArray);

//remove duplicates from the array

var arr1 = [1,2,3,3,4,4,5,6,6,7];
var newarr = Array.from(new Set(arr1));
console.log(newarr);

//merge arrays
var arr1 = [1,2,3,3,4,4,5,6,6,7];
var arr2 = [1,2,3,3,4,4,5,6,6,7];
var arr3 = [...arr1,...arr2];
console.log(arr3);

********************************
  
var eventLoop=[1,2,3,4,5,6,7];
var event = eventLoop.shift(); //it removes the first element and shifts the remaining elements to a lower index, effectively updating the array.
console.log(eventLoop); // [ 2, 3, 4, 5, 6, 7 ]


********************************
  setTimeout(..) timers may not fire with perfect temporal accuracy.

  Callbacks wont fire before time,but it can happen at or after that time, depending on the state of the event queue.
program is generally broken up into lots of small chunks, which happen one after the other in the
event loop queue. And technically, other events not related directly to your program can be interleaved within the queue as
well.

 ********************************

 var once = function(fn) {
    let count=0;
    return function(...args){
        if(count==0){
            count++;
            return fn(...args);
        }
       return 
    }
};
const fn = (a,b,c) => (a * b * c)
const onceFn = once(fn);
console.log(onceFn(5, 7, 4)); // 140

