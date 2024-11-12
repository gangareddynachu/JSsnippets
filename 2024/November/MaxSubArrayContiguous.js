/*
Description: Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.

Examples
Example1: Input: nums = [-7, -2, 3, 4, -5, 6, 7, -2]

Output: 15

Example1: Input: nums = []

Output: 0
*/


function maxSumSubarray(nums){
    if(nums.length==0) return 0;
    let currentSum = totalSum = nums[0];
    //start from second index
    for(let i=1;i<nums.length;i++){
        currentSum = Math.max(nums[i],currentSum+nums[i]);
        totalSum = Math.max(totalSum,currentSum);
    }
    return totalSum;
}



let numbers = [-7, -2, 3, 4, -5, 6, 7, -2];
let maxSumNumbers = maxSumSubarray(numbers);
console.log("Max Subarray Sum:", maxSumNumbers);

let emptyNumbers = [];
let maxSumEmptyNumbers = maxSumSubarray(emptyNumbers);
console.log("Max Subarray Sum:", maxSumEmptyNumbers);