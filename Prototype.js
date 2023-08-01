var TimeLimitedCache = function() {

     this.keymap = new Map();

    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    let found = this.keymap.has(key);
    if(found){
        clearTimeout(this.keymap.get(key).ref);
    }
   
    this.keymap.set(key,{
        value,
        ref: setTimeout(()=> this.keymap.delete(key),duration)
    });;

    return found;

    
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {

    if(this.keymap.has(key)){
          return this.keymap.get(key).value;
    }

    return -1;
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
   return  this.keymap.size;
    
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
//keymap to be accessible to other functions in the prototype, you need to define it in the constructor function's scope
//but outside any specific function. This way, it becomes a property of the instantiated objects, and all methods in the prototype can access it.
