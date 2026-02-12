import {test} from "@playwright/test"

test("getxpath", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")
    const buttonele = page.locator("//*[@name='btn_home']")
    console.log(await buttonele.textContent());
    await buttonele.click()
    await page.waitForTimeout(3000)
})