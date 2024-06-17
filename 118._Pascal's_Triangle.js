/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:



Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

Solution:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //first and last should be 1 for each row
    //example third row first will be 1 and third will be 1, we have to calculate the indexes in between
    // i=1 < row.length-1
   // we have to go to second row

   let ans= [[]];
   for(let i=0;i<numRows;i++){
        ans.push(generatePascalRowsContent(ans[i]))
   }
   return ans.slice(1)

};
function generatePascalRowsContent(arr){ 
    if( !arr || arr.length==0){
        return [1];
    } else if(arr.length==1){
        return [1,1];
    }else{
        //for third = [-1,-1,-1,-1]
        let ansArr = Array(arr.length+1).fill(-1); 
        let left = 0; //0
        let right = arr.length-1; //2
        ansArr[left] = 1;
        ansArr[right+1] = 1; // [1,-1,-1,1]
        while(left<right){ // 0<2 inputArr=[1,1]
            if(ansArr[left+1] == -1){
                ansArr[left+1] = arr[left]+arr[left+1] //ansArr[1] = arr[0]+arr[1]
            } //[1,2,1]
            if(ansArr[right] == -1){
                ansArr[right] = arr[right]+arr[right-1]
            }
            left++;
            right--;
        }
        return ansArr;
    }
}
