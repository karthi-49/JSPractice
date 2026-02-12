import {test,chromium, firefox,webkit} from "@playwright/test"

test.only("openbrowser",async()=>{

    //browser,context,page
    const browser = await chromium.launch({headless:false}) //browser
    const context = await browser.newContext() //context
    const page = await context.newPage() //tab

    await page.goto("https://playground.bsparksoftwaretechnologies.com")
    await page.waitForTimeout(4000)
    await page.close()

})

test("Open browser using page fixture", async({page}) =>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com")
    await page.waitForTimeout(4000)
    await page.close()
})