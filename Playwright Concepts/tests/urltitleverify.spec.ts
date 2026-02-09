import {test} from "@playwright/test"

test("urltitle", async ({page})=>{

    await page.goto("/")
    await page.locator(".Home_title__ANWNn").first().click()
    await page.locator(".Sidebar_icon__wQ6Mc").nth(1).click()
    await page.waitForTimeout(2000)
    await page.locator("#bst_btn1").click()
    await page.waitForTimeout(6000)
    const title = await page.title()
    if(title==="Bspark Software Technologies || Best Software Training Institute in Chennai")
    {
        console.log("Valid Title");
        
    }
    else
    {
        console.log(title);
        console.log("Invalid Title");
    }
    if(page.url().toString() ==="https://www.bsparksoftwaretechnologies.com/selenium-training-in-chennai")
    {
        console.log("Valid URL");
        
    }
    else
    {
        console.log(page.url());
        console.log("Invalid URL");
    }

    


})