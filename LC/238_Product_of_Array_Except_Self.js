/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    //Hint: For a given index the result is product of left side elements and right side elements to it
var prefix = [];
for(let i=0;i<nums.length;i++){
       if(i===0){
           prefix[i]=1;
       }else{
           prefix[i] = nums[i-1]*prefix[i-1]
       }
        
       /* 
       [1,2,3,4]
       prefix[0] =1
       prefix[1] = 1* prefix[0] = 1*1 = 1
       prefix[2] = 2* prefix[1] = 2*1 = 2
       prefix[3] = 3* prefix[2] = 3*2 = 6
       */
}  

let suffix = [];
for(let i=nums.length-1;i>=0;i--){
    if(i==nums.length-1){
        suffix[i] = 1;
    }else{
         suffix[i] = nums[i+1] * suffix[i+1];
    }

    /* 
       [1,2,3,4]
       suffix[3] =1
       suffix[2] = 4* suffix[3] = 4*1 = 4
       suffix[1] = 3*suffix[2] = 3*4 = 12
       suffix[0] = 2*suffix[1] = 2*12 = 24
       ans = [24*1,12*1,4*2,1*6] = [24,12,8,6]
       */
}  


let result=[];
for(let i=0;i<nums.length;i++){
    result[i] = prefix[i]*suffix[i];
}

return result;
  
  /* Brute Force Apprach
  
    var result = [];
    for(let i=0;i<nums.length;i++){
        var product = 1;
        for(let j=0;j<nums.length;j++){
            if(i!==j){
               product *= nums[j];
            }
        }
        result[i] = product;
    }

    return result

*/
};

  
