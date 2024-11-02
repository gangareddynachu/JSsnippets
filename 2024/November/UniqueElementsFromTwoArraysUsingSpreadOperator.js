/*
2722. Join Two Arrays by ID

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

Example 1:

Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
*/


//KEY APPROACH USING SPREAD OPERATOR IS IT MERGES BOTH THE CONTENT AND OVERRIDES ANY CONTENT WHICH IS COMMON FROM THE SECOND VARIABLE
// the spread operator (...) is being used to merge properties from two objects when they share the same id. Here’s a breakdown of how it works in this context:

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // 1. Dictionary for Efficiency
  const objMap = {};

  // 2. Populate the Dictionary
  for (const obj of arr1) {
    console.log(obj.id)
    objMap[obj.id] = obj;
  }

  for (const obj of arr2) {
    console.log(obj.id)
    objMap[obj.id] = { ...objMap[obj.id], ...obj }; // Merge if ID exists  
    // the spread operator takes all the properties from both objMap[obj.id] (the existing object) and obj (the new object from arr2) and combines them into a new object.
    //he new object replaces the existing object in objMap[obj.id]. This effectively merges properties from both objects, meaning if there are overlapping properties, the values from obj will overwrite those in the existing object
  }

  // 3. Extract Results and Sort
  return Object.values(objMap);
};
