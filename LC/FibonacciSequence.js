Fibonacci sequence

0,1,1,2,3,5,8......

  // First two letters are 0 and 1
  // then from the third letter onwards it follows the sequence f(n) = f(n-1)+f(n-2)
  /*
 F0 = 0 (applies only to the first integer)
F1 = 1 (applies only to the second integer)
Fn = Fn-1 + Fn-2 (applies to all other integers)
  */


  var fib = function (n) {
    let mem = [];
    return fibRecursive(mem,n);
    return fibIterative(n);
};

/*we can use concept of memoisation => do not calculate if arguments to function are same. i.e lets say
m[101] = m[100]+m[99];
As part of m[100], we already would have calculated m[99] , so again if we encounter same calculation we just use the already calculated one instead of doing
recalculation..


*/

let fibHelper = (mem, n) => {
    if (n == 0 || n == 1) {
        mem[n] = n
    } 
    if(mem[n]!=undefined){
        return mem[n];
    }
        
    mem[n] = fibHelper(mem, n - 1) + fibHelper(mem, n - 2);
    return mem[n];
}

let fibEasyAndBetter = (n) => {
    let mem = [0, 1];
    for (let i = 2; i <= n; i++) {
        mem.push(mem[i - 1] + mem[i - 2]);
    }
    return mem[n];
}

let main = () => {
    console.log(fib(5));
};

main();
