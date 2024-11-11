/*
Problem statement: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1: Input: nums = [1, 2, 3, 4, 5] Output: [120,60,40,30,24]
Example 2: Input: nums = [-3, 3, 2, 0, -4] Output: [0,0,0,72,0]
*/

function productExceptSelf(nums){
    let result =[];
    let prefix = postfix = 1;

    for(let i=0;i<nums.length;i++){
        result[i] = prefix;
        prefix *= nums[i];
    }
  /*Solution::
   The function first calculates the product of all elements to the left of each index and stores it in the output array.
   Then, it calculates the product of all elements to the right of each index and multiplies it with the corresponding value in the output array. 
   This way, each element in the output array ends up being the product of all elements in the input array except the one at that index.
  */

    for(let i=nums.length-1;i>=0;i--){
        result[i] *= postfix;
        postfix *= nums[i]
    }
    return result;
    
}

var productExceptSelf1 = function(nums) {
    const n = nums.length;
    const left = Array(n).fill(1);
    const right = Array(n).fill(1);
    const output = Array(n).fill(1);
    //[1,2,3,4]
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    //[1,1,1,1]
   // left =1  1*1 1*2 2*3 = 1 1 2 6

    // start from last but one, because last element's right is 1

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    // [1,2,3,4]
    // i = 2; i>=0;i--
   //  right[2] = right[3]*nums[3] = 1*4 = 4
   // right [1] = right[2]*nums[2] = 4*3 = 12
   // right [0] = right[1]* nums[1] = 12 * 2 = 24
   //[24,12,4,1]
    //right = 1 1 1 1

    for (let i = 0; i < n; i++) {
        output[i] = left[i] * right[i];
    }

    return output;
};



let  nums = [1, 2, 3, 4, 5];
console.log(productExceptSelf(nums))
console.log(productExceptSelf1(nums))

