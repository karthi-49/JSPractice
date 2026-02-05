function getDetails()
{
    console.log("This is Get Details method");
    
}
//arrow function
const getpandetails=  ()=>
{
    console.log("This is PAN Details");    
}

//callback function
function getBankDetails(customerName, callback)
{
    console.log("Customer name is",customerName)
    callback()
}

getDetails()
getpandetails()
getBankDetails("Karthik",()=>{console.log("Steve Smith");})
getBankDetails("Karthik1",getDetails)