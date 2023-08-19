/*There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

 

Example 1:



Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
Output: 4
Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
Example 2:



Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
Output: 5
Explanation: There are 5 roads that are connected to cities 1 or 2.
Example 3:

Input: n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
Output: 5
Explanation: The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.
 

Constraints:

2 <= n <= 100
0 <= roads.length <= n * (n - 1) / 2
roads[i].length == 2
0 <= ai, bi <= n-1
ai != bi
Each pair of cities has at most one road connecting them.
*/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) { //roads = [[0,1],[0,3],[1,2],[1,3]]
      const graph = new Array(n).fill(0).map(()=>[]); //[ [], [], [], [] ]

      console.log(graph);
      for(const [a,b] of roads){ //[1,3]
          graph[a].push(b);
          graph[b].push(a);
      }
      /*
            [1,3][0,2,3][1,][0,1]

      */
      //Create a adjacency List which stores the to which cities the city is connected to
      console.log(graph); // [ [ 1, 3 ], [ 0, 2, 3 ], [ 1 ], [ 0, 1 ] ]

      let maxNetworkRank =0;
      for(let i=0;i<n;i++){ //i=0
          for(let j=i+1;j<n;j++){ //j=1
              let rank = graph[i].length+ graph[j].length; // 2+3
            //// If there is a direct road between the cities, subtract 1
              if(graph[i].includes(j) || graph[j].includes(i)){ //[1,3] contains 1 as well as [0,2,3] contains 0
              maxNetworkRank = Math.max(maxNetworkRank,rank-1);

              }else{
                  maxNetworkRank = Math.max(maxNetworkRank,rank);
              }
          }
      }

    return maxNetworkRank;



  Approach 2:
  
    // let degree = new Array(n).fill(0);
    // let roadSet = new Set();
    // /*Approach
    // Store each city's degree, like how many paths are associated to it
    // Also ,store the path in the roadSet

    // */
  
    // for(let road of roads){
    //     degree[road[0]]++;
    //     degree[road[1]]++;
    //     roadSet.add(road[0]+','+road[1]);
    //     roadSet.add(road[1]+','+road[0]);
    // }

    // console.log(roadSet)
    // console.log(degree)
    // let maxRank =0;
    // for(let i=0;i<n;i++){ //n=4
    //     for(let j=i+1;j<n;j++){
    //         let rank = degree[i]+degree[j];
    //         //Decrement  count if we encounter the bidirectional path since it is counted twice. 
    //         if(roadSet.has(i+','+j)){
    //             rank--;
    //         }
    //         maxRank = Math.max(maxRank,rank)
    //     }
    // }

    //   return maxRank;


  

