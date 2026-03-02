const names= new Set(["John","Derek","Jake","Terry","Derek"]);
names.add(36)
names.add(true)
console.log(names);
console.log(names.has("Sri"));
names.delete(36)
console.log(names);
console.log(names.size);
//names.clear()
//console.log(names);

for (let nam of names)
{
    console.log(nam);
    
}

names.forEach(n => console.log(n));




