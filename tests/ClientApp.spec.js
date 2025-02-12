const {test, expect} = require('@playwright/test')

test('Client website test', async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/client")
   await page.locator("#userEmail").fill("shendeakshay123@gmail.com")
   await page.locator('#userPassword').fill("Rahul@shetty1")
   await page.locator('#login').click()
   //await page.waitForLoadState('networkidle') //it will autowait untill all network call gets loaded -- idle state of network tab when all call are made
   await page.locator(".card-body b").first().waitFor() // it will be used to wait for single element visibility
   console.log(await page.locator(".card-body b").allTextContents())   // it will get text of all titles present

   await page.pause()
})



