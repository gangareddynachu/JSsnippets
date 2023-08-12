/*
Unshift operation to the array  adds element at the front of the array, moving exisitng elements to the right

let arr = [1,2,3,4]
arr.unshift(100) // [100,1,2,3,4]

*/


/*The brute force approach 
Loop through each element, pass in current index to a function
In that function use two seperate loops 
one loop form 0 to current index => all elements should be less than current element
and other from current index to array length => all elements should be greater than current element

*/

//O(n) apporach
/*
1)Create two arrays
2) On first array, from left to right , start with  least number = 0(default)  and see if current element is greater , then push respective greater element into
    MAXElementsArray
3) On second array, from right to left, start with largest number and see if the current element is lower , then push respective lower element to start of array by unshift operator

4) Traverse through each arrays and find thefind the index where both the values of max and min are same. This is the place where all elements to left are smaller and right are larger.


*/





var findElement = function(arr){
    var maxElemsArr = [];
    var minElemsArr = [];
    var currMax = Number.MIN_VALUE;
    for(var ele of arr){
        if(ele>currMax) currMax = ele;
        maxElemsArr.push(currMax);
    }
    console.log(maxElemsArr)

    var currMin = Number.MAX_VALUE
    for(var j=arr.length-1; j>=0; j--){
        if(arr[j]<currMin) currMin = arr[j];
        minElemsArr.unshift(currMin);
    }
    
    console.log(minElemsArr)

    var i=0, j=0;
    while(i<maxElemsArr.length && j<minElemsArr.length){
        if(maxElemsArr[i]==minElemsArr[j]) return [i,maxElemsArr[i]];
        i++;
        j++;
    }

    return [-1,-1];

}

var main = function(){
    var arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
    var ans = findElement(arr);
    console.log("index of element is: " + ans[0] + " and the element is: " + ans[1]);
};

main();
