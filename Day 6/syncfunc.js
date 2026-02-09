function demo()
{
    console.log("line 1");
    console.log("line 2");
    console.log("line 3");
    setTimeout(()=>{
        console.log("line 4");
    },5000)
    console.log("line 5");
}

demo();