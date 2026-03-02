function duplicateswithoutSet(names)
{
    let unique=[]
    for (let nam of names)
    {
        if(!unique.includes(nam))
        {
            unique.push(nam)
        }
    }
    return unique
}

function duplicateswithSet(names)
{
    let unique=new Set(names);
    return [...unique]
}

//count of each letter from given word
function count_char(str)
{
    const count=new Map();
    for(let i of str)
    {
        if(count.has(i))
        {
            count.set(i,count.get(i)+1)
        }
        else
        {
            count.set(i,1);
        }
    }
    return count
}

let names = ["Adam","Johan","Vijay","Vijay","Ramesh"]

console.log(duplicateswithoutSet(names));
console.log(duplicateswithSet(names));
console.log(count_char("Jonathan"))