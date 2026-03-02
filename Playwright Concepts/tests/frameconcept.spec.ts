import {test} from "@playwright/test"

test("Frames",async ({page})=>
{
    
    await page.goto("https://playground.bsparksoftwaretechnologies.com/frames")
    const frame = page.frameLocator("#bst_frame1")

    await frame.getByPlaceholder("Type your name here").fill("Adam")
    await frame.getByRole("button",{name:"submit"}).click()
    
    const frame1 = page.frameLocator("#bst_frame2")
    const frame2 = frame1.frameLocator("#bst_frame3")

    await frame2.locator("#nameInput").fill("Terry")
    await frame2.getByRole("button",{name:"submit"}).click()
    const message = await frame2.locator("//p[contains(@class,'UsernameInput_message')]").textContent()

    if (message === "Welcome, John!")
    {
        console.log("Test case Passed");
        
    }
    else
    {
        console.log("Test case Failed")
    }


    await page.waitForTimeout(5000)

})