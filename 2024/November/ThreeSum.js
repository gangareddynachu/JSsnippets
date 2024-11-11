/*
Description: Given an array of integers, return an array of triplets (in any order) such that i != j != k and nums[i] + nums[j] + nums[k] = 0.

Note that the solution set must not include duplicate triplets (i.e., [1, 0, 0] and [0, 1, 0] are duplicative).

Examples:
Example 1 Input: [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]

Example 2 Input: [1,4,5,1] Output: []

Example 3 Input: [0,0,0] Output: [[0,0,0]]

*/

function threeSum(nums,target){
    nums.sort((a,b)=>a-b);
    let result = [];
    for(let i = 0; i < nums.length -2; i++) {
        //It avoids duplicates
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i+1, right = nums.length -1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum < target) {
                left++;
            } else if(sum > target) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                //It avoids duplicates
                while(left < right && nums[left] === nums[left-1]) left++;
            }
        }
    }
    return result;
}






let nums1 = [3, 3, -1, -2, 0, -2, 0, -1, 0, -1];
let nums2 = [1, 3, 5, 1];
console.log(threeSum(nums1, 0));
console.log(threeSum(nums2, 0));
console.log(threeSum([-1,0,1,2,-1,-4],0))
console.log(threeSum([0,0,0],0))