import {test,chromium} from "@playwright/test"

test("open multiple pages manually",async()=>
{
    const browser = await chromium.launch({headless:false}) //browser
    const context = await browser.newContext() //context
    const page = await context.newPage() //tab
    const page1= await context.newPage()

    await page.goto("https://www.amazon.in")
    await page1.goto("https://www.flipkart.com/")

    await page.waitForTimeout(3000)
    await page1.waitForTimeout(3000)

    console.log(context.pages().length);
})

test.only("Handle Child Window",async()=>{
    const browser = await chromium.launch({headless:false}) //browser
    const context = await browser.newContext() //context
    const page = await context.newPage() //tab
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")
    const childWindow= context.waitForEvent("page")
    await page.locator("#bst_btn4").click()
    const page1= await childWindow
    console.log("Interact with child window",page1.url())
    console.log("Interact with Parent window",page.url())
})
