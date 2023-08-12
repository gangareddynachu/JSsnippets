var inputarr = [ [ 2131, "2016-01-01", "1:00 PM", "FA1" ],
        [ 2131, "2016-01-01", "2:00 PM", "FA1" ],
        [ 2131, "2016-01-01", "3:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "4:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "5:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "6:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "7:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "8:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "9:00 PM", "FA1" ] ];
        
        
        
var map ={};

for(var element in inputarr){
    if(!map[inputarr[element][1]]){
        map[inputarr[element][1]] = [];
    }
   // map[inputarr[element][1]].push(inputarr[element])
    map[inputarr[element][1]].push(inputarr[element]);
}

// "2016-01-01" = [[ 2131, "2016-01-01", "2:00 PM", "FA1" ], [ 2131, "2016-01-01", "3:00 PM", "FA1" ],
//         [ 2132, "2016-01-02", "4:00 PM", "FA1" ]]


var output=[];

for(var key in map){
    output.push(map[key].shift());
    // The shift() method removes the first item of an array. The shift() method changes the original array. The shift() method returns the shifted element.
    output.push(map[key].pop());
    
    //The pop() method removes (pops) the last element of an array. The pop() method changes the original array. The pop() method returns the removed element.
    
    
    
}

console.log(output);
        
        

