//object.assign copies all the enumerable properties from one or more source objects to target object
var obj1= {"a":123,"b":456}
var obj2= {"p":444,"q":555}
//Object.assign(target, source);
var obj3 = Object.assign({"c":234},obj1,obj2)
console.log(obj3)


//Object.create creates a new Object,using existing object as a prototype of the newly created object
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const obj1 = Object.create(person);
obj1.name = "Gangareddy";
obj1.isHuman = "yes"
obj1.printIntroduction()

function Shape(){
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x,y){
    this.x +=x;
    this.y+= y;
    console.log("Shape moved and values are X:::"+this.x+"Y:::"+this.y)
}

function Rectangle(){
    Shape.call(this) //call the super constructor
}

Rectangle.prototype = Object.create(Shape.prototype,{
    constructor:{
        value:Rectangle,
        enumerable:false,
        writable:true,
        configurable:true
    
    }
})

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1);

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
     console.log(length)
     //console.log(i);
    return start + i * step
  })
   

// Generate numbers range 0..4
console.log(range(0, 4, 1));

var arr1=new Set([1,2,3,4,5,6,6,7]);
var arr2 = Array.from({length:2},(_,index) =>{
  return index+2
})
console.log(arr2)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    console.log("start:::", start);
    return followers.slice(start, start + itemsPerPage)
  })
