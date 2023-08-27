/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

Solution:


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    //String s
    let substr = s.substring(0,k);
    console.log(substr);
    let countofK = 0;
    let vowels = ['a','e','i','o','u'];

    for(let i=0;i<substr.length;i++){
        if(vowels.includes(s[i])){
            countofK++;
        }
    }
    let result = countofK;
    for(let i=k;i<s.length;i++){
        if(vowels.includes(s[i])){
            countofK = countofK+1
        }
        if(vowels.includes(s[i-k])){
            countofK = countofK-1
        }
        result = Math.max(countofK,result)
    }

    return result
};
