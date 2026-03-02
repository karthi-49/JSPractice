    import {test,expect} from "@playwright/test"

    test.only("drag and drop",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const text= page.locator("#draggable")
        const target= page.locator("#droppable")
        await text.dragTo(target) //method #1
        await page.dragAndDrop("#draggable","#droppable") //method #2
        await page.waitForTimeout(3000)        
    })

    test("move to element",async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
        const hover1= page.locator("//div[contains(@class,'ActionClass_dropdownButton')]")
        await hover1.hover()

        const frameLink = page.locator("//*[contains(text(),'Frames')]")
        await frameLink.hover()
        await page.waitForTimeout(2000)
        await frameLink.click()
        await page.waitForTimeout(3000)
    })

    test("Double click",async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
        await page.getByText("Double Click Me").dblclick()
        await page.waitForTimeout(3000)
        expect(await page.locator("#bst_para").textContent()).
        toEqual("Clicked Me Twice") //No Autowait
        await expect(page.locator("#bst_para")).toHaveText("Clicked Me Twice")//Autowait
        
    })

    test("Right Click",async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
        await page.locator("#bst_anchor").click({button:"right"})
        await page.waitForTimeout(3000)
    })