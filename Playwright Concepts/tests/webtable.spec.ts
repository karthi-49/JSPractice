import {test,expect} from "@playwright/test"

test("Get all data from web Table",async({page})=>
{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")
    for(let row of await rows.all())
    {
        const cells = row.locator("td")
        for(let data of await cells.all())
        {
            const columnData= await data.textContent()
            console.log(columnData)
        }
    }
})

test.only("Get HR Record from Web Table",async({page})=>
{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")
    for(let row of await rows.all())
    {
        const cells = row.locator("td")
        for(let data of await cells.all())
        {
            const columnData= await data.textContent()
            
            if(columnData == "HR" || columnData == "TECH SUPPORT")
            {
                const isActiveEle = row.locator(("input[name='active']"))
                await isActiveEle.click()
            }
            console.log(columnData)
        }     
    }
    await page.waitForTimeout(5000)
})


