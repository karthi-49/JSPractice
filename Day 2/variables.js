//variable - Name of memory location 
// Var (ES5), function scoped, reassing of data and redeclar of variable is possible
var location ="chennai"
location = "pune"
console.log(location);

var location="delhi"
console.log(location);

// let (ESP6), Block scoped, reassing of data is possible and redeclar of variable is not possible
let fruit = "Apple"
console.log("My Fruit is",fruit,"which is good");
fruit = "Orange"
console.log(fruit);

// Const  reassing of data and redeclar of variable is not possible
const season= "summer"
console.log("Season is",season);
//season="summer" //TypeError: Assignment to constant variable.

var i = "karthik"
console.log(typeof(i));

//type of variable
var i = 13
console.log(typeof(i));

var i = false
console.log(typeof(i));

