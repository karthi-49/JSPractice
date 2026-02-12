import {test} from "@playwright/test"

test("Message validation",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    await page.locator("#bst_007").click()
    console.log(await page.locator("[style='color: red;']").textContent());
    page.waitForTimeout(3000)
})

test("Default value display",async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    const fname= page.locator("#bst_001")
    const lname= page.locator("#bst_002")
    console.log(await fname.getAttribute("placeholder"));
    console.log(await lname.getAttribute("placeholder"));
    await page.waitForTimeout(3000)
})

test.only("Form Validation",async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    await page.locator("#bst_001").fill("Karthik")
    await page.locator("#bst_002").fill("Natarajan")
    const day= page.locator("#day")
    const month= page.locator("#month")
    const year= page.locator("#year")
    await day.selectOption({index:2})
    await month.selectOption({value:'5'})
    await year.selectOption({label:"1995"})
    await page.locator("//input[@value='-1' and @name='gender']").click()
    await page.locator("#bst_004").fill("adamxyz@gmail.com")
    await page.locator("#bst_005").fill("9485239428")
    await page.locator("#bst_006").fill("hpfvr2838")
    await page.waitForTimeout(2000)
    await page.locator("#bst_007").click()
    await page.waitForTimeout(3000)

})