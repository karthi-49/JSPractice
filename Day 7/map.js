let customdetails =new Map();
customdetails.set("Name","Anand")
customdetails.set("Mobile","1586484443")
customdetails.set("age",36)
customdetails.set("email","anand@bspark.com")
customdetails.set(100,"chennai")
console.log(customdetails);


console.log("Customer age is",customdetails.get("age"))
console.log(customdetails.size)
console.log(customdetails.keys());
console.log(customdetails.values());
customdetails.delete("Mobile")
console.log(customdetails);
customdetails.clear()
console.log(customdetails);

