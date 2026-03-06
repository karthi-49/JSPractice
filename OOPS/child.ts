import { Parent } from "./parent.ts";
class child extends Parent
{
    childAge: number = 8

    childProperty():void
    {
        console.log("Child owns toys"); 
    }
}

const object =new child()
object.childProperty()
object.parentProperty()
object.grandparentProperty()
console.log(object.grandparentAge);
