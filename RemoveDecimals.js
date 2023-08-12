
let decimal = 4.51;
//Integer a = 4;
console.log(Math.trunc(decimal)); //4
//console.log(a)

//DoubleNot Operator
console.log(~~4.51222); //4
Bitwise operation like left shifting on a decimal number.
Javascript implicitly converts that decimal number into an interger before applying bitwise operation.
4.22222 is implicitly converted to the integer 4 (truncating the decimal part).
The bitwise left shift operation 4 << 0 is effectively a no-op, as shifting by 0 positions doesn't change the value.

//Bitwise Operator
console.log(5.32|0); //5

//rightshift
console.log(6.888>>0);

//leftshift
console.log(4.22222<<0);

console.log(Math.ceil(5.6))
console.log(Math.floor(6.2)) 
