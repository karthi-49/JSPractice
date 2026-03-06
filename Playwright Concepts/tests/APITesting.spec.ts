import {test,expect} from "@playwright/test"

test("get response from get user api",async({request})=>
{
    const res= await request.get("https://api.bsparksoftwaretechnologies.com/api/users")
    console.log(res.status())
    expect(res.status(),"Test case failed").toBe(200)

    console.log(res.statusText())
    const resBody= await res.json()
    //console.log(resBody);
    //console.log(resBody[2].email);
    //console.log(resBody[2].password)

    for(let re of resBody)
    {
        console.log(re.email);
        console.log(re.password);   
    }    

})

test.only("Post - create new user",async({request})=>
{
    const req= await request.post("https://api.bsparksoftwaretechnologies.com/api/users",{
        data:{
            "name": "Derek",
            "email": "Derek@example.com",
            "number": "1112223333",
            "password": "abdcd123@#"
        }
    });
    console.log(req.status())
    expect(req.status(),"Test case failed").toBe(201)
    console.log(req.statusText())
    const resBody= await req.json()
    console.log(resBody);
    console.log(resBody.message);
    console.log(resBody.id);

})