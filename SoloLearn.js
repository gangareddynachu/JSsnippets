//The Object Constructor

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

//javascript Array
1) var courses = new Array("DS","Algo","Logical");
2) var courses = new Array(3)
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

3) var courses = ["HTML","ALGO","DS"]

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

//The concat operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.

//Associative Arrays
While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays, JavaScript does not.
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);

Now, the person is treated as an object, instead of being an array.
The named indexes name and age become properties of the person object.
As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, person.length will return 0.


If you use a named index, JavaScript will redefine the array to a standard object.

  //Random number
  To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).
  
//The Date Object
//JavaScript dates are calculated in milliseconds from 01 January 1970 at 00:00:00 Universal Time (UTC). One day contains 86,400,000 milliseconds.
// A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
// Using new Date(), create a new date object with the current date and time.

  var d = new Date();
//d stores the current date and time

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000);

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);
  
