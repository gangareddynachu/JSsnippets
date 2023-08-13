2694. Event Emitter

/*Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 

Example 1:

Input: 
actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
Explanation: 
const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

Input: 
actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], 
values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[7]]]
Explanation:
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]

  */


Approach:
1) Maintain a map to store multiple callbacks(listeners) for the same event  key: event value : array of callback functions
2) Here subscribe returns the unsubscribe method of particluar callback, so this method is stored in object and called explicitly for unsubscribing
3) In subscribe, see if event is already present in map, if not store the key and value as empty array, if already present then simply push it to the existing array
4) When unsubscribe method is called, then it will look for the index of callback function in values array and removes it.
5) When an emit with event and arguments is called, then it gets the values array of specific event and iterates through it and passes args to each callback function and store each result in array and output them at end.

class EventEmitter {
  constructor(){
    this.events = new Map();
  }
  subscribe(event, cb) {
     if(!this.events.has(event)){
       this.events.set(event,[]);
     }

     const listeners = this.events.get(event);
     listeners.push(cb);
      //key thing here is that subscribe returns unsubscribe method which is stored in object and is called explicitly
    return {
        unsubscribe: () => {
            const index = listeners.indexOf(cb);
            if(index!==-1){
              listeners.splice(index,1);
            }
        }
    };
  }

  emit(event, args = []) {
     // return the output of callbacks

     if (!this.events.has(event)) {
      return [];
    }
   
     var result = []
     const listeners = this.events.get(event);
     for(const callbackfn of listeners){
        result.push(callbackfn(...args));
     }
     return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
