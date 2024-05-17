import TreeNode from "./TreeNode.js";
class Tree{
    constructor(){

    }

    buildBinaryTree(values){
        var nodes = [];
        values.forEach(val=>{
            if(val!=null){
                nodes.push(new TreeNode(val))
            }else{
                nodes.push(null)
            }
               
        })
        var kids = nodes.slice(1) // put all elements other than first one
        var root = nodes[0];
        nodes.forEach(node=>{
            if(node){
                if(kids.length>0){
                    node.left = kids.shift();
                }
                if(kids.length>0){
                    node.right = kids.shift();
                }
            }
        })
        return root;
    }
    printTree(root){
        console.log(root.val);
        this.printTree(root.left);
        this.printTree(root.right);
    }
    printBinaryTree(root){
        
    }

}

export default Tree;
