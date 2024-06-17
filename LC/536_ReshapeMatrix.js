/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
*/

Solution:

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length*mat[0].length !=r*c){ //this check ensures the number of elements in the target array and original array are same.
        return mat;
    }else{
        let resultArr = Array(r).fill().map(()=>Array(c).fill(0));
        //here we make result array which is is acording to expected to certain row and column
        // 1*4  = [[0,0,0,0]]
        let cRow = 0;
        let cCol = 0;
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat[0].length;j++){
                if(cCol==c){
                   cRow++;
                   cCol = cCol%c; //after reaching expected colum count reset to 0;
                }
                resultArr[cRow][cCol++] = mat[i][j]
            }
        }
        return resultArr;
    }

};

let main = () => {
    let input = [[1, 2], [3, 4]];
    console.log("Input is " + JSON.stringify(input));
    console.log(JSON.stringify(matrixReshape(input, 1, 4)));
    console.log(JSON.stringify(matrixReshape(input, 4, 1)));
    console.log(JSON.stringify(matrixReshape(input, 5, 4)));
};

main();
