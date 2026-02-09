async function delay()
{
    return new Promise(resolve => setTimeout(()=>{resolve()
    },5000))
}

async function demo()
{
    console.log("line 1");
    console.log("line 2");
    console.log("line 3");
    console.log("line 4");
    await delay()
    console.log("line 5");
}

demo();