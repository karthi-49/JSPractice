class calculator
{
    //Variable
    i: number = 10
    j: number = 20
    k1:number = 0
    k2:number = 0
    
    constructor()
    {
        console.log("I am Constructor");
        this.k1=20
        this.k2=4   
    }
    
    //functions
    add():void
    {
        console.log(this.i+this.j);

    }
    static sub(n1:number,n2:number):void
    {
        console.log(n1-n2)
    }
    multiply(n1:number,n2:number):number
    {
        return n1*n2
    }
    divide():void
    {
        console.log(this.k1/this.k2);
        
    }
}
//object creation
const obj = new calculator()
obj.add()
calculator.sub(30,10)//static method can be accessed without object creation
console.log(obj.multiply(20,35));
obj.divide()
