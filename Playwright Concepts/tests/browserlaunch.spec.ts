import {test} from '@playwright/test'

test("browserlaunch",async ({page})=>{

    await page.goto("/")
    const actualtitle=await page.title()
    console.log(actualtitle)
    const url=page.url()
    console.log(url);
    await page.goBack();
    await page.waitForTimeout(3000)
    await page.goForward()
    await page.waitForTimeout(3000)
    await page.reload()
    await page.waitForTimeout(5000)

    const automationele = page.locator(".Home_title__ANWNn").first()
    const pdtele = page.locator(".Home_title__ANWNn").last()
    const apiele = page.locator(".Home_title__ANWNn").nth(1)

    pdtele.click()

    await page.waitForTimeout(5000)





})