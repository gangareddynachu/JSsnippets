// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//Map method

const numbers=[1,2,3,4,5,6];
const multiplyByTwo = numbers.map((item)=> { return (item*2)});
const Filtergreattwo = numbers.filter((item)=> { return (item>2)});
const EveryMethodTest = numbers.every((item)=> { return (item>2)});

const ReduceMethodTest = numbers.reduce((acc,currentValue)=> { return (acc+currentValue)},0);

const SomeMethodTest = numbers.some((number)=> { return number%2===0})


console.log("Map !"+ multiplyByTwo);

console.log("Filter !"+ Filtergreattwo);

console.log("Every !"+ EveryMethodTest);

console.log("ReduceMethodTest !"+ ReduceMethodTest);

console.log("SomeMethodTest !"+ SomeMethodTest);

const products = [
  { name: 'Apple', price: 2.5 },
  { name: 'Banana', price: 1.5 },
  { name: 'Cherry', price: 3 },
];

products.sort((a,b)=> a.price - b.price);

console.log("SortMethodTest !"+ JSON.stringify(products));
