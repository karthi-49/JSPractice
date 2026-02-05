function rank(mark)
{
    if (mark>=81 && mark<=100)
        console.log("First Class");
    else if (mark>=61 && mark<=80)
        console.log("Second Class");
    else if (mark>=40 && mark<=60)
        console.log("Third Class");
    else if (mark>=0 && mark<=39)
        console.log("Fail");
    else
        console.log("Invalid Mark");      
}

rank(89)
rank(65)
rank(47)
rank(26)
rank(150)
rank(-25)