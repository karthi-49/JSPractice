import { Customers } from "./AccessModifiers_Encapsulation";
class Company extends Customers
{
    employeecount:number=100

    getLocation():void
    {
    console.log("Location is ",this.location);
    this.getCustomerName()
    }

}
