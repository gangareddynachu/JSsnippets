class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }else{
        Singleton.instance ="Hello"
    }

    return Singleton.instance;
  }

  // Other methods and properties can be added here
}

// Example usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true, both variables refer to the same instance

//If we remove else statement in the constructor then Singleton class ensure there's only one instance of class and provide global point of access to it.


var Singleton = (function(){
    var instance;
    function createInstance(){
        var obj1={
            a:"Hello",
            b:"Gangareddy nachu"
        }
        return obj1;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance=createInstance();
            }
            return instance;
        }
    }
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1)
console.log(instance1===instance2)

Singleton is an immediately invoked function expression (IIFE) that encapsulates the creaton of the instance.
The getInstance method is the interface through which you can access singleton instance.If the instance doesn't exist, it is created; otherwise, the existing instance is returned.
