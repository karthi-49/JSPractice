export class Customers
{
    //accessmodifiers - public, private, protected
    public name:string = "Karthik"
    private age:number=36;
    protected location:string = "Chennai"

    public getCustomerName():void
    {
        console.log("My name is John");
        console.log("My age is",this.age)
        console.log("My Location is",this.location);
        
    }
    /*Encapsulation is concept of hiding internal data of 
    a class and allowing access to it only through methods*/
    //getters and setters 
    public getAge():number
    {
        return this.age

    }

    public setAge(n1:number):void
    {
        this.age=n1

    }

}
const obj1 = new Customers()
obj1.name="Bala"
console.log(obj1.name)
obj1.getCustomerName()
console.log("Encapsulation -->",obj1.getAge());
obj1.setAge(49)
console.log("Encapsulation -->",obj1.getAge());
