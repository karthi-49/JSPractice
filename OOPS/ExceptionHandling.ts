//Compile Time Exception
//Run Time Exception

class demo
{
    age: number = 20

    numbers:number[]=[1,2,3,4,5]

    getData()
    {
        try
        {
            if(this.numbers[10]==undefined)
            {
            throw new Error("Array Index Exception found")
            }
            return this.numbers[10]
        }
        catch(error)
        {
            console.log(error)
            console.log("Please enter values less than",this.numbers.length);
        }
        finally
        {
            console.log("Finally will run always");
            
        }
    }

}

const o = new demo()
o.getData()