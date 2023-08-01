var TimeLimitedCache = function() {
  // Define keymap as a property of the instantiated object (this)
  this.keymap = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  // Access keymap using "this.keymap" since it's a property of the instance
  this.keymap.set(key, value);

  setTimeout(() => {
    this.keymap.clear();
  }, duration);
};

TimeLimitedCache.prototype.get = function(key) {
  if (this.keymap.has(key)) {
    return this.keymap.get(key);
  }
  return -1;
};

TimeLimitedCache.prototype.count = function() {
  return this.keymap.size;
};

// Usage:
var obj = new TimeLimitedCache();
obj.set(1, 42, 1000);
obj.get(1); // Returns 42
obj.count(); // Returns 1
//keymap to be accessible to other functions in the prototype, you need to define it in the constructor function's scope
//but outside any specific function. This way, it becomes a property of the instantiated objects, and all methods in the prototype can access it.
