/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {


//Bitwise operation. 5 ^ 5 = 0   0 ^4 = 4
let result=0;
for(let i=0;i<nums.length;i++){
    result = result ^ nums[i]
}

return result;


/* keyValue Map

    var keyCountMap ={};
    for(let i=0;i<nums.length;i++){
        if(!keyCountMap[nums[i]]){
            keyCountMap[nums[i]] = 1
        }else{
            keyCountMap[nums[i]]++;
        }
    }
    const keysarr = Object.keys(keyCountMap)
    for(let key of keysarr){
        if(keyCountMap[key]==1){
            return key;
        }
    }


  /*  Brute Force Approach
  //nums.sort();
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        let dup = [...nums];
        dup.splice(i,1);
        if(dup.indexOf(nums[i])<0){
            return nums[i]
        }

    }
    return 0;
    */
};
