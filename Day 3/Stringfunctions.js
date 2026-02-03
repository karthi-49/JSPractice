var fname="Karthik"

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.length);
console.log(fname.charAt(4));
console.log(fname.slice(0,4));
console.log(fname.concat("Natarajan"));
console.log(fname.includes("John"));
console.log(fname.startsWith("Ka"));
console.log(fname.endsWith("ik"));

var fruits = "Apple;Orange;Banana";
console.log(fruits.split(";"));
console.log(fruits.split(";")[2]);

var car = " Hyundai "
console.log(car.trim());
console.log(car.trimStart());
console.log(car.trimEnd());
console.log(car.repeat(4));
console.log(car.replace(" Hyundai ","Honda"));

var content="I love Badminton and I am a Badminton Player";
console.log(content.replace("Badminton","Cricket"));
console.log(content.replaceAll("Badminton","Cricket"));

let countrycode = "91"
console.log(countrycode+1);
console.log(parseInt(countrycode)+1);

let mum=25
console.log(typeof(mum));
console.log(typeof(mum.toString()));












