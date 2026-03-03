import {test} from "@playwright/test"

test("Handle Alert", async({page})=>{
    
    page.on("dialog",async(dialog)=>{
 
        const text = dialog.message()
        if(text === "PRESS A BUTTON!")
        {
            await dialog.dismiss()
        }
        else if(text === "I AM AN ALERT BOX !")
        {
            await dialog.accept()
        }
        else if(text === "PLEASE ENTER YOUR NAME")
        {
            await dialog.accept("Geek")
        }

    })
    await page.goto("./alert")
    await page.locator("//button[text()='HIT ME']").first().click()
    await page.waitForTimeout(5000)

    await page.locator("//button[text()='HIT ME']").nth(1).click()
    await page.waitForTimeout(5000)

    await page.locator("//button[text()='HIT ME']").nth(2).click()
    await page.waitForTimeout(5000)})