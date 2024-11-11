/*
Description: Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
*/

// Input: numbers = [2,7,11,15,9], target = 16 Output: [2,5] Explanation: The sum of 7 and 9 is 16. Therefore index1 = 2, index2 = 5.


function twoSumIndices(nums,target){
    let result = [];
    for(let i=0;i<nums.length;i++){
        let element = target-nums[i];
        for(j=i+1;j<nums.length;j++){
            if(element == nums[j]){
                result.push(i+1);
                result.push(j+1)
            }
        }
    }

    return result;
}

//Arrays are sorted
function twoSumIndicesWhileLoop(nums,target){
    let result = [-1,-1];
    let left = 0;
    let right = nums.length-1
    while(left<right){
        const sum = nums[left]+nums[right];
        if(sum==target){
            return [left+1,right+1]
        }else if(sum>target){
            right--;
        }else{
            left++
        }
    }

    return result;
}

const nums = [2,7,11,15,9];
const target = 16;
console.log(twoSumIndices(nums,target))
console.log(twoSumIndicesWhileLoop(nums,target))