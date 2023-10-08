226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    //Iterative approach javascript

    //shift=> removes the first element from the array -> used for queue implemenation
    //pop => removes the last element from the array -> used for the stack implemenation
   var queuearr = [];
   if(root!==null){
       queuearr.push(root)
   }

   while(queuearr.length>0){
       let temp = queuearr.shift();
       if(temp.left!=null){
           queuearr.push(temp.left)
       }
       if(temp.right!=null){
           queuearr.push(temp.right)
       }

       let curr = temp.left;
       temp.left = temp.right;
       temp.right = curr;
   }

   return root;



};


//******

  /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    console.log(root?.val)
    if(root==null){
        return root;
    }

    invertTree(root.left)
    invertTree(root.right)
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root;


};
