class ExpiringCache {
    constructor() {
        this.cache = {};
    }

    addEntry(key, value, expirationSeconds) {
        const expirationTime = Date.now() + expirationSeconds * 1000;
        this.cache[key] = { value, expirationTime };
    }

    getEntry(key) {
        const entry = this.cache[key];
        if (entry && Date.now() < entry.expirationTime) {
            return entry.value;
        } else {
            // Entry not found or expired
            return null;
        }
    }

    removeExpiredEntries() {
        const currentTime = Date.now();
        for (const key in this.cache) {
            if (this.cache.hasOwnProperty(key) && currentTime >= this.cache[key].expirationTime) {
                delete this.cache[key];
            }
        }
    }
}

// Example usage:
const cache = new ExpiringCache();
cache.addEntry('key1', 'value1', 10); // Expires in 10 seconds
cache.addEntry('key2', 'value2', 30); // Expires in 30 seconds

console.log(cache.getEntry('key1')); // Output: value1
console.log(cache.getEntry('key2')); // Output: value2

// Simulate the passage of time
setTimeout(() => {
    cache.removeExpiredEntries();
    console.log(cache.getEntry('key1')); // Output: null (expired)
    console.log(cache.getEntry('key2')); // Output: value2 (still valid)
}, 15000);
