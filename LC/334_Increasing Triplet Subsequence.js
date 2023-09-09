/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

    //They might not be in order and followed immediaitely
   // only condition is i<j<k

   /*Approach
    We have to get the get first small and second small numbers and see if the current num(third) is greater than both of them then return true
   */
   let firstOne = Infinity
   let secondOne = Infinity;

   for(let thirdOne of nums){
       if(thirdOne<firstOne){
           firstOne = thirdOne
       }else if(thirdOne<secondOne && thirdOne> firstOne){
           secondOne = num
       }else if(thirdOne>secondOne && thirdOne>firstOne){
           return true
       }
   }

   return false;

};
