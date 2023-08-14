/* Easy Category
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0

*/

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    console.log(nums)
     this.nums = nums; //maintain access to nums array across all functions by binding it to the this context of newly created object.
};

ArrayWrapper.prototype.valueOf = function() {
    let sum =0;

    for(let val of this.nums){    
       sum+= val;
    }
    return sum;
}

ArrayWrapper.prototype.toString = function() {

   return JSON.stringify(this.nums);
    // let result = '';
    // for(let index in this.nums){
    //     result += this.nums[index]+',';
    // }
    
    // result = result.substring(0,result.length-1);
    // let result1 = '['+result
    // result1 += ']'

    // console.log(result1);

    // return result1;
    
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */


Other Approaches:

var ArrayWrapper = function(nums) {
     this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  return [...this.nums].reduce((sum,num)=>sum+num,0);
}

ArrayWrapper.prototype.toString = function() {

   return JSON.stringify(this.nums);
   //return "["+ this.nums.join(",")+"]";
  
    
}

**************************


  

