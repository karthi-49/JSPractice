import {test,expect} from "@playwright/test"

test("Retry failed testcase",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/")
    const title = await page.title()
    expect(title).toBe("Bala")
})

test.skip("Skip testcase",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/")
    const title = await page.title()
    expect(title).toBe("Bala")
})

test("Pass testcase",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/")
    const title = await page.title()
    expect(title).toBe("Bspark Software Technologies || Playground")
})

test.fail("Negative testcase",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/")
    const title = await page.title()
    expect(title).toBe("Bala")
})