import {test,expect} from "@playwright/test"

test("verfiy config",async({page})=>
{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")
    const buttonele = page.locator("//*[@name='btn_home']")
    const actualData= await buttonele.textContent();
    //expect(actualData).toEqual("Bala")
    //await expect(buttonele).toBeVisible()
    //await expect(buttonele).toBeEnabled()
    await expect.soft(buttonele).toHaveText("GO TO HOME PAGE")
    await expect.soft(page.locator("#bst_btn2")).toHaveText("GET POSITION")
    
    await buttonele.click()
})
