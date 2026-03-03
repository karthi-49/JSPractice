import {test} from "@playwright/test"

test("Take Screenshot", async({page})=>
{
    await page.goto("./alert")
    await page.screenshot({path:"./Screenshot/img.png"})
    const buttone= page.locator("//button[text()='HIT ME']").first()
    await buttone.screenshot({path:"./Screenshot/img1.png"})
}
)