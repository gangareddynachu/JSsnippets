// Early exit using set:- TC: O(n), SC: O(n)
function containsDuplicate(nums){
    let set = new Set();
    for(const num of nums){
        if(set.has(num)){
            return true;
        }
        set.add(num)
    }
    return false;
}

// Early exit using object:- TC: O(n), SC: O(n)
function containsDuplicateUsingObject(nums) {
    let noDupsObj = {};
    for(const num of nums) {
        if(noDupsObj[num]) {
            return true;
        }
        noDupsObj[num] = true;
    }
    return false;
}

//Use Set size:- TC: O(n), SC: O(n)
function containsDuplicateUsingSize(nums) {
    return new Set(nums).size !== nums.length;
}

//Using sort and iteration:- TC: O(n log n), SC: O(n)
function constainsDuplicateUsingSort(nums){
    nums = nums.sort((a,b)=> a-b);
    //Since the array is sorted if there are any duplicates, then duplicate elements will be placed side by side
    for(let i=1;i<nums.length;i++){
        if(nums[i] == nums[i-1]){
            return true
        }
    }
    return false;
}

//Brute force approach
//Each element check with other elements
function containsDuplicateBruteForce(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                return true;
            }
        }
    }

    return false;
}


console.log("-----Has duplicates----");
let nums1 = [8, 6, 4, 2, 6];
console.log(containsDuplicate(nums1));
console.log(containsDuplicateUsingObject(nums1));
console.log(containsDuplicateUsingSize(nums1));
console.log(constainsDuplicateUsingSort(nums1));
console.log(containsDuplicateBruteForce(nums1));