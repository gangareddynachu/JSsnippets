/*
You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
 

Constraints:

1 <= products.length <= 1000
1 <= products[i].length <= 3000
1 <= sum(products[i].length) <= 2 * 104
All the strings of products are unique.
products[i] consists of lowercase English letters.
1 <= searchWord.length <= 1000
searchWord consists of lowercase English letters.

Appproach:
1)Sort the products lexographically using sort function
2)breakdown searchword => initilaise empty word => step by step add each character and search for that word in the products list, filter the array and store it in the list
3)push each list to listoflsit

*/




Solution:

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {

    //sort the products lexographically
    products.sort();
    console.log(products);
    const listoflist = [];
    let word=''
    for(let i=0;i<searchWord.length;i++){
        let list=[];
        word += searchWord[i];
        list = products.filter((product)=>{
            return product.startsWith(word)
        })
        if(list.length>3){
            listoflist.push(list.splice(0,3));
        }else{
             listoflist.push(list);
        }
        
    }

    return listoflist;
    
};
