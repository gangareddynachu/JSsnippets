/*A TRIE or prefix is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
  There are various applications of this data structire such as autocomplete and spelll checker.

  Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
*/

Solution:

var Trie = function() {
    //Initialise bucket
    this.words=[];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    //Push each word into the array
    this.words.push(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    //search should see if exact match is present in existing stored array
    if(this.words.indexOf(word)!==-1){
        return true
    }else{
        return false
    }
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
 
    //startswith applies only on strings, so use some method which takes the callback and see if any of elements in the array  satisfies callbak condition then it returns true.
    return this.words.some((str)=> {
        return str.startsWith(prefix);
    })
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
  
