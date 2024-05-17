/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


import Tree from "./Tree.js";


function averageOfLevels(root){
    let queue=[];
    let ans = [];
    let sum=0, nodeCount=0;
    queue.push(root);
    queue.push('$') // $ acts as sentinel/ guardian to indicate level is finished and calculate the average if we encounter it and push to ans array

    while(queue.length>1){
        let node= queue.shift() //gets the first element and removes it from original array
        if(node=="$"){
            ans.push(sum/nodeCount)
            sum=0;
            nodeCount=0;
            queue.push('$')
        }else{
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right);
            sum += node.val;
            nodeCount++;
        }
    }
    ans.push(sum / nodeCount);
    return ans;

}


function main(){
    let t1 = new Tree();
    let root1 = t1.buildBinaryTree([3, 9, 20, 15, 7]);
    t1.printBinaryTree(root1);
    console.log(averageOfLevels(root1));
}

main()

