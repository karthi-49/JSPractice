let Name = "Adam"
let Names = ["Adam","Johan","Vijay","Vijay","Ramesh",18,true]
console.log(Names)
console.log(typeof(Names));
console.log(Names[2]); // get data from specific index

//update data
Names[4]=27
console.log(Names)

// size of list
console.log(Names.length);

// add data to list
Names.push("New Data")//add at end of list
console.log(Names)
Names.unshift("First data")//add at beginning of list
console.log(Names)

//to delete data in list
Names.pop()
console.log(Names);// remove last element
Names.shift()
console.log(Names);// removes first element

for (let nam of Names)
{
    console.log("Welcome",nam);
    
}



