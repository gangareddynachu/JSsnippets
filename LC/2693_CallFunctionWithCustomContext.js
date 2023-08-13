/*

Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

For example if you had the function:

function tax(price, taxRate) {
  const totalCost = price * (1 + taxRate);
  console.log(`The cost of ${this.item} is ${totalCost}`);
}
Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.

However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.

Please solve this without using the built-in Function.call method.


Input:
fn = function add(b) {
  return this.a + b;
}
args = [{"a": 5}, 7]
Output: 12
Explanation:
fn.callPolyfill({"a": 5}, 7); // 12
callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.

Input: 
fn = function tax(price, taxRate) { 
 return `The cost of the ${this.item} is ${price * taxRate}`; 
}
args = [{"item": "burger"}, 10, 1.1]
Output: "The cost of the burger is 11"
Explanation: callPolyfill sets the "this" context to {"item": "burger"}. 10 and 1.1 are passed as additional arguments.

*/

Solution:

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
   /*The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
   */

   //setting context to the function => means context is the object here and we are adding property called fn (function) which stores the reference to the functon that callpoly fill is called on (here it is increment function)
   Object.defineProperty(context, 'fn', {
    value: this,
    enumerable: false,
  });

  /*Appproach 2
     const functionId = Symbol();
     context[functionId] = this;
        //bind the function id (Symbol) to `this` which in this case is a function
  // we are using symbol because symbol is unique so it won't override any existing property
  // and symbol is not visible when executing Object.keys()

      return context[functionId](...args);
  */

  const result = context.fn(...args);

  delete context.fn;  //delete the newly added property to the context

  return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
