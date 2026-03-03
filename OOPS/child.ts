import { Parent } from "./parent";
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
