import {test,expect} from "@playwright/test"

test("Get API Response from Network tab",async({page})=>
{
    await page.goto("/login")
    await page.getByPlaceholder("email").fill("Derek@example.com")
    await page.locator("#pwd").fill("abdcd123@#1")
    await page.getByRole("button",({name:"Login"})).click()

    const res = await page.waitForResponse("**/api/users/login")
    const body =await res.json()
 
    console.log(res.status())
    expect(res.status()).toBe(401)
    console.log(res.statusText());
    console.log(body);
    
    
})