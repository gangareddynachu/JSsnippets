/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

Approach:
1) //Sort the intervals based on endtime
2) //take the first endtime and compare with start of next interval, if it is greater, then the start time of the next interval
//overlaps with the prev end, so increment overlapcount.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    //Sort the intervals based on endtime
    intervals = intervals.sort((a,b)=>a[1]-b[1]);
    console.log(intervals);
    //take the first endtime
    var prev_end = intervals[0][1];
    var overlapcount =0;
    //start from the second interval
    for(let i=1;i<intervals.length;i++){
        if(prev_end>intervals[i][0]){
            overlapcount++;
        }else{
            prev_end = intervals[i][1];
        }
    }
    return overlapcount;


/* Tried Approach 
      var keyArrayMap={};
        
        for(let interval of intervals){
            if(keyArrayMap[interval[0]]){
                keyArrayMap[interval[0]].push(interval[1]);
            }else{
                 keyArrayMap[interval[0]] = [interval[1]];
            }
           
        }

        console.log(keyArrayMap);
        var count=0;
        Object.values(keyArrayMap).map((arr)=>{
            if(arr.length>1){
                count += arr.length-1;
            }
        })

        return count;
    */
    
};
