/*
2239. Find Closest Number to Zero
Solved
Easy
Topics
Companies
Hint
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
 

Constraints:

1 <= n <= 1000
-105 <= nums[i] <= 105
*/
Solution::

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    var result = Number.MAX_VALUE 
    nums.forEach((num)=>{
        //if the absolute of number is less than previous result, assign result as num
        // num ===Math.abs(result) :::: in case if -1 and 1 exists we should return 1, so check if result already stores 1
        // then we assin result = 1
        if(Math.abs(num)<Math.abs(result) || num ===Math.abs(result) ){
            result=num
        }
        
    })
    return result;
};
