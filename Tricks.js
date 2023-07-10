
//Array to Object
var techBrands = ["facebook","Apple","Amazon","Netflix","Google"];
var object = {...techBrands}
console.log(object);

//fill Array with data
var newArray = new Array(6).fill('Helllo');
console.log(newArray);

//remove duplicates from the array

var arr1 = [1,2,3,3,4,4,5,6,6,7];
var newarr = Array.from(new Set(arr1));
console.log(newarr);

//merge arrays
var arr1 = [1,2,3,3,4,4,5,6,6,7];
var arr2 = [1,2,3,3,4,4,5,6,6,7];
var arr3 = [...arr1,...arr2];
console.log(arr3);
