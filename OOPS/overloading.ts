// Polymorphism -- poly -->Many and morphism - different form

//Types 
// 1 - Method overloading or compile time polymorphism -- pending
// 2 - Method overridding or run time polymorphism

//Overriding -- Child extends parent -- child class will have same method siguature as of parent

//Overloading - Same method name with different parameter or datatype

class calculator
{
    add(n1:number,n2:number):void;
    add(n1:number,n2:number,n3:number):void;
    add(n1:number,n2:number,n3:number,n4:number):void;
    add(n1:string,n2:string):void;

    add(n1:any,n2:any,n3?:number,n4?:number):void
    {
        if(n3 !== undefined && n4 == undefined)
        {
            console.log(n1+n2+n3);
            
        }
        else if(n4!==undefined)
        {
            console.log(n1+n2+n3+n4);
        }
        else
        {
            console.log(n1+n2);      
        }
    }

}

const obj = new calculator()
obj.add(10,10)
obj.add(10,20,30)
obj.add(1,2,3,4)
obj.add("Karthik","Nathan")