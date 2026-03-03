import {grandparent} from "./grandparent.ts"
export class Parent extends grandparent
{
    parentAge: number = 36

    parentProperty():void
    {
        console.log("Parent owns Flat");       
    }
}