import {test,expect} from "@playwright/test"

test("Store Login Session",async({page})=>{
    await page.goto("https://onelogin.bsparksoftwaretechnologies.com/")
    await page.getByPlaceholder("email").last().fill('bala@test.com')
    await page.getByPlaceholder("password").last().fill('123')
    await page.locator("//button[text()='Login']").click()

    await page.waitForTimeout(3000)
    await page.context().storageState({path:'./storage/auth.json'})
})

test.only("Access home page without login from UI",async({page})=>
{
    await page.goto("https://onelogin.bsparksoftwaretechnologies.com/home")
    await page.waitForTimeout(3000)
}
)