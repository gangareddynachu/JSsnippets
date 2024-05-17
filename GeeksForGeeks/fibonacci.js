function fib(n){
    if(n<0){
        print("invalid input")
    }else if(n==1){
        return 0;
    }else if(n==2){
        return 1;
    }else{
        return fib(n-1)+ fib(n-2)
    }

}
function main(){
    console.log(fib(1))
    console.log(fib(2))
    console.log(fib(3))
    console.log(fib(4))
    console.log(fib(10))
    console.log(fib(11))
    console.log(fib(12))
}

main()
