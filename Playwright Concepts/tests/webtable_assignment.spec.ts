import {test,expect} from "@playwright/test"

test("verify each roles in dropdown", async ({page})=>
{
    await page.goto("/webtable")
    const Allroles= page.locator("select")
    const roles = await Allroles.locator("option").allTextContents()
    roles.shift()
    let jobRoleindex=0
    const table = page.locator("#webtable")
    const headers = table.locator("thead th")
    const rows = table.locator("tbody tr")
    for(let i=0;i< await headers.count();i++)
    {
        if(await headers.nth(i).textContent() === "JOB ROLE")
        {
            jobRoleindex=i;
            break
        }
    }
    for(let j=0;j<roles.length;j++)
    {
        await Allroles.selectOption({value:roles[j]})
    for(let i = 0; i< await rows.count(); i++)
    {
        const cells = rows.nth(i).locator("td")
        const ColumnData = await cells.nth(jobRoleindex).textContent()
        expect(ColumnData,"Invalid Job Role").toBe(roles[j])
        console.log(ColumnData);
    }
    }
})

test("Verify email", async ({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
        const table = page.locator("#webtable")
        const headers = table.locator("thead th")
        const rows = table.locator("tbody tr")
        const inputbox=page.locator("input[type='text']")
        await inputbox.fill("balaji@bspark.com")
        //const allroles=page.locator("//div[contains(@class,'Webtable_card')]/div/select")
        let emailindex=0
        for(let i=0;i< await headers.count();i++)
        {
            if(await headers.nth(i).textContent() === "EMAIL")
            {
                emailindex=i;
                break
            }
        }
        for(let i = 0; i< await rows.count(); i++)
        {
            const cells = rows.nth(i).locator("td")
            const ColumnData = cells.nth(emailindex)
            await expect(ColumnData,"Invalid Emailid").toHaveText("balaji@bspark.com",{ignoreCase:true})
            console.log(await ColumnData.textContent());
        }
    })

test("Verify No record found msg", async ({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
        const inputbox=page.locator("input[type='text']")
        await inputbox.fill("invalid")
        const msg = page.locator("//tbody/tr/td")
        await expect(msg).toHaveText("🚫 No records found")    
    })

test.only("Sort functionality validation", async ({page})=>
    {
        await page.goto("/webtable")
        let id= page.locator("//table[@id='webtable']/tbody/tr/td[1]")
        let unsorted_li=[]
        for(let i=0;i<await id.count();i++)
        {
           unsorted_li.push(await id.nth(i).textContent())
        }
        console.log(unsorted_li);
        
        let li= [...unsorted_li]
        let sorted_li= unsorted_li.sort()
        let new_li=[]
        await page.getByRole("button",{name:"Sort by ID "}).click()
        for(let i=0;i<await id.count();i++)
        {
            new_li.push(await id.nth(i).textContent())
        }
        console.log(li);
        console.log(new_li);
        
        
        expect(new_li).toEqual(li);

    })